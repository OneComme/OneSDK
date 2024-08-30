import { External } from './External'
import { Doneru } from './Doneru'
import { Twitter } from './Twitter'
import { Mixch } from './Mixch'
import { BaseBadge } from './BaseResponse'
import { YouTube } from './YouTube'
import { Twicas } from './Twicas'
import { Twitch } from './Twitch'
import { NicoNama } from './NicoNama'
import { Showroom } from './Showroom'
import { BiliBili } from './BiliBili'
import { RGBColor } from './Color'
import { Service, ServiceList, ServiceType } from './Service'
import { Mirrativ } from './Mirrativ'
import { Tiktok } from './Tiktok'
import { Streamlabs } from './Streamlabs'
import { SystemCommentResponse } from './System'
import { Kick } from './Kick'
import { VTips } from './VTips'

export type CommentData =
  | YouTube.CommentResponse
  | Twicas.CommentResponse
  | Twitch.CommentResponse
  | NicoNama.CommentResponse
  | Showroom.CommentResponse
  | BiliBili.CommentResponse
  | Mixch.CommentResponse
  | Mirrativ.CommentResponse
  | Kick.CommentResponse
  | Doneru.CommentResponse
  | Tiktok.CommentResponse
  | VTips.CommentResponse
  | External.CommentResponse

export interface BaseCommentMeta {
  no?: number
  tc?: number
  lc?: number
  interval?: number
  free?: boolean
}
export interface BaseComment {
  id: string
  service: ServiceType
  name: string
  url: string
  color: RGBColor
  meta?: BaseCommentMeta
}
export interface SystemComment extends BaseComment {
  service: ServiceList['system']
  data: SystemCommentResponse
}
export interface YouTubeComment extends BaseComment {
  service: ServiceList['youtube']
  data: YouTube.CommentResponse
}
export interface TwicasComment extends BaseComment {
  service: ServiceList['twicas']
  data: Twicas.CommentResponse
}
export interface TwitchComment extends BaseComment {
  service: ServiceList['twitch']
  data: Twitch.CommentResponse
}
export interface NicoNamaComment extends BaseComment {
  service: ServiceList['niconama']
  data: NicoNama.CommentResponse
}
export interface ShowroomComment extends BaseComment {
  service: ServiceList['showroom']
  data: Showroom.CommentResponse
}
export interface BiliBiliComment extends BaseComment {
  service: ServiceList['bilibili']
  data: BiliBili.CommentResponse
}
export interface MixchComment extends BaseComment {
  service: ServiceList['mixch']
  data: Mixch.CommentResponse
}
export interface TwitterComment extends BaseComment {
  service: ServiceList['twitter']
  data: Twitter.CommentResponse
}
export interface MirrativComment extends BaseComment {
  service: ServiceList['mirrativ']
  data: Mirrativ.CommentResponse
}
export interface DoneruComment extends BaseComment {
  service: ServiceList['doneru']
  data: Doneru.CommentResponse
}
export interface StreamlabsComment extends BaseComment {
  service: ServiceList['streamlabs']
  data: Streamlabs.CommentResponse
}
export interface TiktokComment extends BaseComment {
  service: ServiceList['tiktok']
  data: Tiktok.CommentResponse
}
export interface KickComment extends BaseComment {
  service: ServiceList['kick']
  data: Kick.CommentResponse
}
export interface VTipsComment extends BaseComment {
  service: ServiceList['vtips']
  data: VTips.CommentResponse
}
export interface ExternalComment extends BaseComment {
  service: ServiceList['external']
  data: External.CommentResponse
}
export interface Reaction {
  key: string
  src?: string
  value: number
  scale?: number
}
export type Comment =
  | YouTubeComment
  | TwicasComment
  | TwitchComment
  | NicoNamaComment
  | ShowroomComment
  | BiliBiliComment
  | MixchComment
  | TwitterComment
  | MirrativComment
  | DoneruComment
  | StreamlabsComment
  | TiktokComment
  | KickComment
  | ExternalComment
  | SystemComment
  | VTipsComment

export interface CommentSenderOption {
  init?: boolean
  skipSpeech?: boolean
}

export interface Listener {
  id: string
  name: string
  screenName?: string
  profileImage: string
  firstCommentTime: string
  lastCommentTime: string
  badges: BaseBadge[]
  count: number
  giftCount: number
  anonymity: boolean
}
export interface ListenerInfo {
  id: string
  type: ServiceType
  name: string
  url: string
  color: RGBColor
  listeners: Listener[]
}
export type ExtendedComment = Comment & {
  serviceData: Service | undefined
}

export interface Colors {
  headerBackgroundColor: string
  headerTextColor: string
  bodyBackgroundColor: string
  bodyTextColor: string
  authorNameTextColor?: string
  timestampColor?: string
}
