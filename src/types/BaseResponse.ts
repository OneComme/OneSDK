export interface BaseBadge {
  url: string
  label: string
}
export interface CommentMeta {
  hasNickname?: boolean
  hasMemo?: boolean
  anonymity?: boolean
  label?: string
}
export interface CommentNotification {
  title: string
  subheader?: string
  icon?: string
}
export interface BaseResponse {
  id: string
  userId: string
  liveId: string
  name: string
  isOwner: boolean
  displayName?: string
  nickname?: string
  hasGift: boolean
  profileImage: string
  originalProfileImage?: string
  badges: BaseBadge[]
  timestamp: string
  comment: string
  speechText?: string
  isFirstTime?: boolean
  isRepeater?: boolean
  commentVisible?: boolean
  meta?: CommentMeta
}
