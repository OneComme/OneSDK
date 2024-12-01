import { UserStoreData } from './UserData';
import { CommentSenderOption, Reaction } from './Comment'
import { Config } from './Config'
import { OrderItem } from './Order'
import { Service, ServiceMeta } from './Service'
import { RequestItem, SetListAPIResponse } from './Setlist'
import { Comment } from './Comment'
import { DeprecatedSendType, SendType } from './Api';
import { WordPartyExecParams } from './WordParty';
import { YouTube } from './YouTube';
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
  permissions: SendType[] | DeprecatedSendType
}
type SendActions = {
  [key in SendType]: any
}
export interface PublishActions extends SendActions {
  connected: {
    config?: Config
    services?: Service[]
    comments?: Comment[]
    waitingList?: OrderItem[]
    setList?: SetListAPIResponse
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
  'setList.request': RequestItem[],
  'wp.exec': WordPartyExecParams
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

export interface BaseAction {
  type: SendType
}
export interface ClearAction extends BaseAction {
  type: 'clear'
}
export interface MetaAction extends BaseAction {
  type: 'meta'
  data: ServiceMeta
}
export interface DeleteAction extends BaseAction {
  type: 'deleted'
  data: DeletedData[]
}
export interface ConfigAction extends BaseAction {
  type: 'config'
  data: Config
}
export interface ClearMetaAction extends BaseAction {
  type: 'meta.clear'
  data: string
}
export interface UserDataAction extends BaseAction {
  type: 'userDatas'
  data: UserStoreData
}
export interface ServiceAction extends BaseAction {
  type: 'services'
  data: Service[]
}
export interface BookmarkAction extends BaseAction {
  type: 'bookmarked'
  data: BookmarkData
}
export interface PinnedAction extends BaseAction {
  type: 'pinned'
  data: Comment | null
}
export interface WaitingListAction extends BaseAction {
  type: 'waitingList'
  data: OrderItem[]
}
export interface SetListAction extends BaseAction {
  type: 'setList'
  data: SetListAPIResponse
}

export interface WpUpdateAction extends BaseAction {
  type: 'wp.update'
  data: { dir: string }
}

export interface NotificationAction extends BaseAction {
  type: 'notification'
  data: { type: string; message: string }
}
export interface ReactionAction extends BaseAction {
  type: 'reactions'
  data: { reactions: Reaction[]; effect: boolean }
}
export interface SetlistRequestAction extends BaseAction {
  type: 'setList.request'
  data: RequestItem[]
}
export interface YouTubeSurveyStartAction extends BaseAction {
  type: 'yt.survey.start'
  data: YouTube.SurveyData
}
export interface YouTubeSurveyUpdateAction extends BaseAction {
  type: 'yt.survey.update'
  data: YouTube.SurveyData
}
export interface YouTubeSurveyFinishAction extends BaseAction {
  type: 'yt.survey.finish'
  data: YouTube.SurveyResult
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
  | NotificationAction
  | ReactionAction
  | SetlistRequestAction
  | YouTubeSurveyStartAction
  | YouTubeSurveyUpdateAction
  | YouTubeSurveyFinishAction