import { BaseResponse } from './BaseResponse'

export type SystemMessageType = 'success' | 'warning' | 'info' | 'error' | 'inherit'
export interface SystemMessage {
  type?: SystemMessageType
  message: string
  messageId?: string
  noOutput?: boolean
  isGift?: boolean
  isFreeGift?: boolean
}
export interface SystemCommentResponse extends BaseResponse {
  type: SystemMessageType
}
