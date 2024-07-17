import { BaseResponse } from './BaseResponse'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace External {
  export interface CommentResponse extends BaseResponse {
    gift?: any
    giftData?: any
    price?: number
    meta?: any
  }
}
