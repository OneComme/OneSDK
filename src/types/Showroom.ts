import { BaseResponse } from './BaseResponse'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Showroom {
  export interface GiftList {
    icon: number
    is_hidden: boolean
    order_no: number
    gift_type: number
    image: string
    gift_id: number
    image2: string
    free: boolean
    point: number
    is_delete_from_stage: boolean
    gift_name: string
    scale: number
    label: number
    dialog_id: number
  }
  export interface GiftGroup {
    is_default: boolean
    name: string
    gift_list: GiftList[]
  }
  export interface GiftRootResponse {
    enquete: GiftList[]
    gift_groups: GiftGroup[]
  }
  export interface Color {
    r: number
    b: number
    g: number
  }

  export interface Telop {
    color: Color
    text: string
    type: string
  }

  export interface TimeResponse {
    created_at: number
    t: number
    c?: number
    p?: number
  }

  export interface MessageResponse {
    ua: number
    av: number
    d: number
    ac: string
    cm: string
    created_at: number
    u: number
    at: number
    t: string
  }
  export interface GiftResponse {
    ua: number
    n: number
    av: number
    d: number
    ac: string
    created_at: number
    cm?: string
    u: number
    h: number
    g: number
    gt: number
    at: number
    t: string
  }

  export interface TelopResponse {
    telops: Telop[]
    telop: string
    interval: number
    t: number
    api: string
  }
  export type RootResponse = TelopResponse | MessageResponse | GiftResponse | TimeResponse
  export interface CommentResponse extends BaseResponse {
    at?: number
    d?: number
    ua?: number
    gt?: number
    g?: number
    h?: number
    av?: number
    n?: number
    price?: number
    gift?: GiftList
    giftId?: string
    countId?: string
    commentVisible?: boolean
  }
  export interface CountStockData {
    amount: number
    comment: CommentResponse
  }
}
