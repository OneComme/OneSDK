/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */

import { BaseResponse } from './BaseResponse'
import { Colors } from './Comment'

export module VTips {
  export interface Chat {
    chatId: string
    message: string
    createdAt: string
    userInfo: UserInfo
    tipInfo?: TipInfo
    vcoinTipInfo?: VcoinTipInfo
  }

  export interface UserInfo {
    userId: string
    name: string
    icon: string
    isStreamer: boolean
    isOwner: boolean
  }
  export interface VcoinTipInfo {
    amount: string
    displayDuration: number
    grade: number
  }
  export interface TipInfo {
    amount: string
    currency: string
    displayDuration: number
    grade: number
  }
  export interface UpdateUser {
    userId: string
    isVisible: boolean
  }
  export interface DeleteChat {
    chatId: string
  }
  export interface LatestChat {
    chatId: string // 差分があると変わる
    createdAt: string
  }
  export interface Stats {
    fanRankings: any[]
    watchCount: string
  }
  export type BroadcastStatusType = 'READY' | 'LIVE' | 'COMPLETED'
  export type StreamStatusType = 'NO_DATA' | 'GOOD'
  export interface BroadcastStatus {
    broadcastStatus: string
    streamStatus: string // READY
    publishedScope: number
    streamId: string
  }
  export interface DiffResponse {
    latestChat: LatestChat
    deletedChats: DeleteChat[]
    updatedUsers: UpdateUser[]
    isEnabledTips: boolean
  }
  export interface ChatResponse {
    chats: Chat[]
  }
  export interface StreamerInfo {
    userId: string
    name: string
    followerCount: number
    icon: string
    isEnabledReturnGacha: boolean
  }
  export interface ContentInfo {
    contentId: string
    type: string
    thumbnail: {
      720: string
      180: string
      36: string
      1080: string
      360: string
      90: string
    }
    title: string // 配信タイトル
    broadcastStatus: BroadcastStatusType
    publishedScope: number // 0: 公開, 1: フォロワー限定, 2: プライベート
    issuedAt: string // 配信開始日時（予約配信で配信開始前は予約日時）
    isEnabledChats: boolean // チャット機能が有効かどうか
    isEnabledTips: boolean // チップ機能が有効かどうか
    isEnabledComments: boolean
  }
  export interface StreamingInfo {
    streamerInfo: StreamerInfo
    contentInfo: ContentInfo
    hash: string
    hashIssuedAt: string
    watchHistoryId: string
  }

  export interface CommentResponse extends BaseResponse {
    tipInfo?: TipInfo | VcoinTipInfo
    price?: number
    isStreamer: boolean
    isOwner: boolean
    isFreeGift?: boolean
    paidText?: string
    colors?: Colors
  }
}
