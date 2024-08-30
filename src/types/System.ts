import { BaseResponse } from './BaseResponse'
import { ServiceType } from './Service'

export type SystemMessageType = 'success' | 'warning' | 'info' | 'error' | 'inherit'
export type SystemMessageIcon = 'default' | 'cruise' | 'poll' | 'share' | 'notification' | 'quote' | 'enter' | 'assign'
export interface SystemMessage {
  type?: SystemMessageType
  service?: ServiceType
  liveId?: string
  profileImage?: string
  name?: string
  message: string
  messageId?: string
  isGift?: boolean
  isFreeGift?: boolean
  icon?: SystemMessageIcon
}
export interface SystemCommentResponse extends BaseResponse {
  type: SystemMessageType
  icon: SystemMessageIcon
  free: boolean
}

export interface SystemCommentOptions {
  speech?: boolean
  asComment?: boolean
  log?: boolean
}
