import { UserStoreData } from './UserData';
import { CommentSenderOption, Reaction } from './Comment'
import { Config } from './Config'
import { OrderItem } from './Order'
import { Service, ServiceMeta } from './Service'
import { RequestItem, SetListAPIResponse } from './Setlist'
import { Comment } from './Comment'
import { SendType } from './Api';
export type SubscribeAction = 'comments' | 'meta'
export interface MetaResponse {
  service: Service
  meta: ServiceMeta
}
export type Protocol = 'http' | 'https' | 'ws' | 'local'
export interface OneSDKConfig {
  protocol: Protocol
  port: number
  host: string
  pathname: string
  mode: 'all' | 'diff',
  disabledDelay: boolean
  intervalTime: number
  maxQueueInterval: number
  reconnectInterval: number
  commentLimit: number
  requestInterval: number
  includes: string[] | null
  excludes: string[] | null
  includeIds: string[] | null
  excludeIds: string[] | null
  includeNames: string[] | null
  excludeNames: string[] | null
  lifeTime: number
}
export interface PublishActions {
  connected: {
    config: Config
    services: Service[]
    comments: Comment[]
    waitingList: OrderItem[]
    setList: SetListAPIResponse
  }
  comments: Comment[]
  meta: { service: Service, meta: ServiceMeta }
  pinned: Comment
  setList: SetListAPIResponse
  waitingList: OrderItem[]
  bookmarked: { key: string, commentId: string | null }
  clear: []
  config: Config
  deleted: { id: string; message: string }[]
  'meta.clear': string
  notification: void
  reactions: { reactions: Reaction[], effect: boolean}
  services: Service[]
  userDatas: UserStoreData
  'wp.update': {
    dir: string
  },
  'setList.request': RequestItem[]
}
export type Subscriber<T extends SendType = SendType> = {
  action: T
  callback: (response: PublishActions[T]) => void
}
export interface DeletedData {
  id: string
  message: string
}
export interface BookmarkData { key: string, commentId: string | null }
export interface ConnectedAction {
  type: 'connected'
  data: {
    config: Config
    services: Service[]
    comments: Comment[]
    waitingList: OrderItem[]
    setList: SetListAPIResponse
  }
}
export interface CommentsAction {
  type: 'comments'
  data: {
    comments: Comment[]
    options?: CommentSenderOption
  }
}
export interface ClearAction {
  type: 'clear'
}
export interface MetaAction {
  type: 'meta'
  data: any
}
export interface DeleteAction {
  type: 'deleted'
  data: DeletedData[]
}
export interface ConfigAction {
  type: 'config'
  data: Config
}
export interface ClearMetaAction {
  type: 'meta.clear'
  data: string
}
export interface UserDataAction {
  type: 'userDatas'
  data: UserStoreData
}
export interface ServiceAction {
  type: 'services'
  data: Service[]
}
export interface BookmarkAction {
  type: 'bookmarked'
  data: BookmarkData
}
export interface PinnedAction {
  type: 'pinned'
  data: Comment
}
export interface WaitingListAction {
  type: 'waitingList'
  data: OrderItem[]
}
export interface SetListAction {
  type: 'setList'
  data: SetListAPIResponse
}
export type Action = ConnectedAction 
  | CommentsAction 
  | DeleteAction 
  | ClearAction 
  | MetaAction 
  | ClearMetaAction
  | UserDataAction
  | ConfigAction
  | ServiceAction
  | BookmarkAction
  | PinnedAction 
  | WaitingListAction 
  | SetListAction