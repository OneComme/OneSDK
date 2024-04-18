import { SendType } from './types/Api';

import axios, { AxiosRequestConfig } from 'axios'
import 'hacktimer'
import './forcetimer'
import { Colors, Comment } from './types/Comment';
import { Action, DeletedData, OneSDKConfig, Protocol, PublishActions, Subscriber } from './types/OneSDK'
import { Service } from './types/Service';
import { Config } from './types/Config';
import { OrderItem } from './types/Order';
import { SetListAPIResponse } from './types/Setlist';
import { AppInfo } from './types/App'
import { TemplateData } from './types/Template'

export class OneSDK {
  private _config: OneSDKConfig = {
    protocol: 'local',
    port: 11180,
    host: (!location.hostname || location.hostname === 'absolute') ? 'localhost' : location.hostname,
    pathname: '',
    mode: 'all',
    disabledDelay: false,
    intervalTime: 5000,
    maxQueueInterval: 150,
    reconnectInterval: 5000,
    commentLimit: 100,
    requestInterval: 1500,
    includes: null,
    excludes: null,
    includeIds: null,
    excludeIds: null,
    includeNames: null,
    excludeNames: null,
    lifeTime: Infinity,
  }
  private _subscriberId = 0
  private _checkTimerId = -1
  private _tickTimerId = -1
  private _timerMap: Map<string, number> = new Map()
  private _commentMap: Map<string, Comment> = new Map()
  private _queues: Map<string, Comment> = new Map()
  private _connected: boolean = false
  private _subscribers: Map<number, Subscriber> = new Map()
  get connected() {
    return this._connected
  }
  get config(): Readonly<OneSDKConfig> {
    return Object.freeze({...this._config })
  }
  ready(): Promise<void> {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    if (document.readyState === 'complete') {
      return Promise.resolve()
    }
    return new Promise((resolve) => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          resolve()
          this._tick()
        })
      })
    })
  }
  async setup(op: Partial<OneSDKConfig> = {}) {
    Object.assign(this._config, op)
    const url = new URL(location.href)
    if (url.searchParams.get('css')) {
      const css = url.searchParams.get('css') as string
      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.href = css
      document.head.appendChild(style)
    }
    if (url.searchParams.get('style')) {
      const styleStr = url.searchParams.get('style') as string
      const style = document.createElement('style')
      style.innerHTML = styleStr
      document.head.appendChild(style)
    }
    this._config.protocol = this.getStyleVariable<Protocol>('--one-sdk-protocol', this._config.protocol)
    this._config.host = this.getStyleVariable<string>('--one-sdk-host', this._config.host)
    this._config.pathname = this.getStyleVariable<string>('--one-sdk-pathname', this._config.pathname)
    this._config.port = this.getStyleVariable<number>('--one-sdk-port', this._config.port, parseInt)
    
    this._config.includes = this.getStyleVariable<string[] | null>('--one-sdk-includes', this._config.includes, this._splitValues)
    this._config.excludes = this.getStyleVariable<string[] | null>('--one-sdk-excludes', this._config.excludes, this._splitValues)
    this._config.includeIds = this.getStyleVariable<string[] | null>('--one-sdk-include-ids', this._config.includeIds, this._splitValues)
    this._config.excludeIds = this.getStyleVariable<string[] | null>('--one-sdk-exclude-ids', this._config.excludeIds, this._splitValues)
    this._config.includeNames = this.getStyleVariable<string[] | null>('--one-sdk-include-names', this._config.includeNames, this._splitValues)
    this._config.excludeNames = this.getStyleVariable<string[] | null>('--one-sdk-exclude-names', this._config.excludeNames, this._splitValues)
    this._config.lifeTime = this.getStyleVariable<number>('--one-sdk-life-time', this._config.lifeTime, parseInt)
    
    if (url.searchParams.get('protocol')) {
      this._config.protocol = url.searchParams.get('protocol') as Protocol
    }
    if (url.searchParams.get('host')) {
      this._config.host = url.searchParams.get('host') as string
    }
    if (url.searchParams.get('pathname')) {
      this._config.pathname = decodeURIComponent(url.searchParams.get('pathname') as string)
    }
    if (url.searchParams.get('port')) {
      this._config.port = parseInt(url.searchParams.get('port') as string)
    }
    if (url.searchParams.get('includes')) {
      this._config.includes = url.searchParams.getAll('includes')
    }
    if (url.searchParams.get('excludes')) {
      this._config.excludes = url.searchParams.getAll('excludes')
    }
    if (url.searchParams.get('includeIds')) {
      this._config.includeIds = url.searchParams.getAll('includeIds')
    }
    if (url.searchParams.get('excludeIds')) {
      this._config.excludeIds = url.searchParams.getAll('excludeIds')
    }
    if (url.searchParams.get('includeNames')) {
      this._config.includeNames = url.searchParams.getAll('includeNames')
    }
    if (url.searchParams.get('excludeNames')) {
      this._config.excludeNames = url.searchParams.getAll('excludeNames')
    }
    if (url.searchParams.get('lifeTime')) {
      this._config.lifeTime = parseInt(url.searchParams.get('lifeTime') as string)
    }
  }
  private _tick = () => {
    window.clearTimeout(this._tickTimerId)
    const now = Date.now()
    let hasTimeout = false
    this._timerMap.forEach((time, id) => {
      if (time <= now) {
        hasTimeout = true
        this._timerMap.delete(id)
        this._commentMap.delete(id)
      }
    })
    if (hasTimeout) {
      this._sendComments()
    }
    this._tickTimerId = window.setTimeout(this._tick, 100)
  }
  subscribe(subscriber: Subscriber) {
    ++this._subscriberId
    this._subscribers.set(this._subscriberId, subscriber)
    return this._subscriberId
  }
  unsubscribe(subscriberId: number) {
    this._subscribers.delete(subscriberId)
  }
  reset() {
    clearTimeout(this._checkTimerId)
    this._queues = new Map()
    this._commentMap = new Map()
    this._publish('comments', [])
  }
  getStyleVariable<T = any>(name: string, defaultValue: T, parser: (val:string) => T = val => val as any) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name)
    if (value) {
      return parser(value.trim())
    }
    return defaultValue
  }
  private _splitValues(values: string): string[] {
    const result = values.match(/\w+|"(?:\\"|[^"])+"/g);
    if (!result) return []
    return result.map(item => {
      return item.replace(/"|'/g, '')
    })
  }
  private _publish<T>(action: SendType, params: PublishActions[keyof PublishActions]) {
    this._subscribers.forEach(subscriber => {
      if (subscriber.action === action) {
        subscriber.callback(params)
      }
    })
  }
  private _check = () => {
    window.clearTimeout(this._checkTimerId)
    const q = Array.from(this._queues.values()).shift()
    if (!q) {
      return
    }
    this._queues.delete(q.data.id)
    this._saveComment(q)
    
    this._sendComments()
    if (this._config.mode === 'diff') {
      this._publish('comments', [q])
    }

    const nextTime = Math.min(this._config.intervalTime / this._queues.size, this._config.maxQueueInterval)
    this._checkTimerId = window.setTimeout(() => {
      this._check()
    }, nextTime)
  }
  private _sendComments() {
    const a = Array.from(this._commentMap).slice(-this._config.commentLimit)
    this._commentMap = new Map(a)
    if (this._config.mode === 'all') {    
      const va = Array.from(this._commentMap.values()).slice(-this._config.commentLimit)
      this._publish('comments', va)
    }
  }
  private _filterComment(comments: Comment[]): Comment[] {
    const result = comments.filter(comment => {
      if (this._config.includes && !this._config.includes.includes(comment.service)) return false
      if (this._config.excludes && this._config.excludes.includes(comment.service)) return false
      if (this._config.includeIds && !this._config.includeIds.includes(comment.id)) return false
      if (this._config.excludeIds && this._config.excludeIds.includes(comment.id)) return false
      if (this._config.includeNames && !this._config.includeNames.includes(comment.name)) return false
      if (this._config.excludeNames && this._config.excludeNames.includes(comment.name)) return false
      return true
    })
    return result
  }
  private _saveComment(comment: Comment) {
    this._commentMap.set(comment.data.id, comment)
    if (this._config.lifeTime !== Infinity) {
      this._timerMap.set(comment.data.id, Date.now() + this._config.lifeTime)
    }
  }
  private _parseComment(action: Action) {
    switch(action.type) {
      case 'connected': {
        const { comments = [] } = action.data
        const filteredComments = this._filterComment(comments)
        filteredComments.forEach((comment: Comment) => {
          this._saveComment(comment)
        })
        this._sendComments()
        this._publish('connected', action.data)
        break
      }
      case 'comments': {
        const { comments = [] } = action.data
        const filteredComments = this._filterComment(comments)
        if (filteredComments.length === 0) return
        if (action.data.options?.init) {
          filteredComments.forEach((comment: Comment) => {
            this._saveComment(comment)
          })
          this._sendComments()
          return
        }
        let queueChanged = false
        filteredComments.forEach((comment: Comment) => {
          const exists = this._commentMap.has(comment.data.id)
          if (exists) {
            this._saveComment(comment)
          } else {
            if (this._config.disabledDelay) {
              this._saveComment(comment)
            } else {
              this._queues.set(comment.data.id, comment)
              queueChanged = true
            }
          }
        })
        if (this._config.disabledDelay) {
          this._sendComments()
          if (this._config.mode === 'diff') {
            this._publish('comments', filteredComments)
          }
        } else {
          if (!queueChanged) {
            this._sendComments()
          }
          this._check()
        }
        break
      }
      case 'deleted': {
        const deletedDatas = action.data
        deletedDatas.forEach(deleted => {
          this._queues.delete(deleted.id)
          this._timerMap.delete(deleted.id)
          this._commentMap.delete(deleted.id)
        })
        this._sendComments()
        break;
      }
      case 'clear':
        this.reset()
        break
      default: 
        this._publish((action as any).type, (action as any).data)
    }
  }
  getCommentStyle(comment: Comment) {
    const style: {[key: string]: any} = {}
    const colors: Colors | undefined = (comment.data as any).colors
    if (colors) {
      style['--lcv-background-color'] = colors.bodyBackgroundColor,
      style['--lcv-text-color'] = colors.bodyTextColor,
      style['--lcv-comment-shadow'] = 'none'
    }
    if ((comment.data as any).isMember) {
      style['--lcv-membership-color'] = '#2ba640'
    }
    return style
  }
  async checkLicensed() {
    const licensed = await this._checkLicense()
    return licensed
  }
  async connect() {
    if (this.connected) return
    await this.ready()
    if (['local', 'ws'].includes(this._config.protocol)) {
      const socket = new WebSocket(`ws://${this._config.host}:${this._config.port}/sub`);
      socket.addEventListener('open', (e) => {
        this._connected = true
      })
      socket.addEventListener('error', (e) => {
        // console.error(e)
      })
      socket.addEventListener('close', () => {
        this._connected = false
        setTimeout(() => this.connect(), this._config.reconnectInterval)
      })
      socket.addEventListener('message', (e) => {
        try {
          const data = JSON.parse(e.data) as Action
          this._parseComment(data)
        } catch(e) {
          console.error(e)
        }
      })
    } else {
      let init = true
      let cached: Map<string, string> = new Map()
      const filePath = this._config.protocol === 'local' ?
          `http://${this._config.host}:${this._config.port}/api/comments` :
          `${this._config.protocol}://${this._config.host}:${this._config.port}${this._config.pathname}`
        
      const request = () => {
        axios
          .get<Comment[]>(filePath)
          .then((res) => {
            if (!res.data) {
              setTimeout(request, 1000)
              return
            }
            const data = Array.isArray(res.data) ? res.data : (res.data as any).comments
            if (init) {
              const comments = this._filterComment(data)
              comments.forEach((com: Comment) => {
                cached.set(com.data.id, com.data.comment)
              })
              this._parseComment({
                type: 'comments',
                data: {
                  comments
                }
              })
              init = false
            } else {
              if (data.length === 0) {
                cached.clear()
                this._parseComment({
                  type: 'clear'
                })
              } else {
                const comments = this._filterComment(data)
                const deleted: DeletedData[] = []
                const newCached = new Map<string, string>()
                const diff: Comment[] = []
                comments.forEach((com: Comment) => {
                  const cachedData = cached.get(com.data.id)
                  if (cachedData !== com.data.comment) {
                    diff.push(com)
                  }
                  cached.delete(com.data.id)
                  newCached.set(com.data.id, com.data.comment)
                })
                cached.forEach((_, id) => {
                  deleted.push({
                    id,
                    message: 'deleted'
                  })
                })
                if (deleted.length !== 0) {
                  this._parseComment({
                    type: 'deleted',
                    data: deleted
                  })
                }
                cached = newCached
                this._parseComment({
                  type: 'comments',
                  data: {
                    comments: diff
                  }
                })
              }
            }
            setTimeout(request, this._config.requestInterval)
          })
          .catch((e: any) => {
            console.error(e)
            setTimeout(request, this._config.reconnectInterval)
          })
      }
      request()
    }
  }
  private getAPIUrl(pathname: string) {
    return this._config.protocol === 'local' ? 
        `http://${this._config.host}:${this._config.port}/api/${pathname}`
        : `http://localhost:11180/api/${pathname}`
  }
  private _checkLicense(): Promise<boolean> {
    return new Promise((resolve) => {
      const request = () => {
        this.getInfo().then((info: AppInfo) => {
          resolve(info.licensed)
        }, () => {
          setTimeout(request, 5000)
        })
      }
      request()
    })
  }
  get<T = any>(url: string, config: AxiosRequestConfig<T>) {
    return axios.get(url, config)
  }
  post<T = any>(url: string, config: AxiosRequestConfig<T>) {
    return axios.post(url, config)
  }
  put<T = any>(url: string, config: AxiosRequestConfig<T>) {
    return axios.put(url, config)
  }
  delete<T = any>(url: string, config: AxiosRequestConfig<T>) {
    return axios.delete(url, config)
  }
  getInfo(): Promise<AppInfo> {
    return axios.get<AppInfo>(this.getAPIUrl('info')).then((res) => {
      return res.data
    })
  }
  getComments(): Promise<Comment[]> {
    return axios.get<Comment[]>(this.getAPIUrl('comments')).then((res) => {
      return res.data
    })
  }
  searchComments(params: { services: string[]; comments: string[] }): Promise<Comment[]> {
    return axios.post<Comment[]>(this.getAPIUrl('comments/search'), params).then((res) => {
      return res.data
    })
  }
  getPinnedComment(): Promise<Comment | null> {
    return axios.get<Comment | null>(this.getAPIUrl('comments/pinned')).then((res) => {
      return res.data
    })
  }
  getTemplates(): Promise<TemplateData[]> {
    return axios.get<TemplateData[]>(this.getAPIUrl('templates')).then((res) => {
      return res.data
    })
  }
  getServices(): Promise<Service[]> {
    return axios.get<Service[]>(this.getAPIUrl('services')).then((res) => {
      return res.data
    })
  }
  getConfig(): Promise<Config[]> {
    return axios.get<Config[]>(this.getAPIUrl('config')).then((res) => {
      return res.data
    })
  }
  getOrders(): Promise<OrderItem[]> {
    return axios.get<OrderItem[]>(this.getAPIUrl('orders')).then((res) => {
      return res.data
    })
  }
  cancelOrder(orderId: string): Promise<OrderItem[]> {
    return axios.delete<OrderItem[]>(this.getAPIUrl(`orders/${orderId}`)).then((res) => {
      return res.data
    })
  }
  completeOrder(orderId: string): Promise<OrderItem[]> {
    return axios.put<OrderItem[]>(this.getAPIUrl(`orders/${orderId}`)).then((res) => {
      return res.data
    })
  }
  getSetList(): Promise<SetListAPIResponse> {
    return axios.get<SetListAPIResponse>(this.getAPIUrl('setlists/current')).then((res) => {
      return res.data
    })
  }
}