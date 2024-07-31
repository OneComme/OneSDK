import { BaseResponse } from './BaseResponse'

export type SystemMessageType = 'success' | 'warning' | 'info' | 'error' | 'inherit'
export interface SystemMessage {
  type?: SystemMessageType
  message: string
  messageId?: string
}
export interface SystemCommentResponse extends BaseResponse {
  type: SystemMessageType
}
