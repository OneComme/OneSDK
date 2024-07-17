import Store from 'electron-store'
import { ConnectedData, SendType } from './Api'
import { Comment } from './Comment'
import { SpeechConfig } from './Config'
import { Service } from './Service'
import { UserNameData } from './UserData'
export type PluginFilterEvent = 'filter.comment' | 'filter.speech'
export interface PluginRequest {
  url: string // request url
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params: { [key: string]: string } // querystrings
  body?: any // request body
}
export interface PluginResponse {
  code: number
  response: string
}
export interface PluginAPI {
  dir: string
  filepath: string
  store: Store
}
export interface PluginData {
  plugin: OnePlugin
  api: PluginAPI
  activated: boolean
}
export interface OnePlugin {
  uid: string
  name: string
  version: string
  permissions: (SendType | PluginFilterEvent)[]
  author?: string
  url?: string
  defaultState: Record<string, any>
  init?(api: PluginAPI, initialData: Partial<ConnectedData>): void
  subscribe?(type: SendType, ...args: any[]): void
  request?(req: PluginRequest): Promise<PluginResponse>
  filterComment?(comment: Comment, service: Service, userData: UserNameData | null): Promise<Comment | false>
  filterSpeech?(text: string, userData: UserNameData | null, config: Partial<SpeechConfig>): Promise<string | false>
  destroy?(): void
  [key: string]: any
}
export type PluginInternal = Pick<OnePlugin, 'uid' | 'name' | 'version' | 'url' | 'author' | 'permissions'> & {
  activated: boolean
}
export type PluginList = PluginInternal[]
