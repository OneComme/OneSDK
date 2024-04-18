import { BaseBadge } from './BaseResponse';
export interface GiftAmount {
  unit?: string
  value: number
}
export interface UserNameData {
  id: string
  nickname: string
  memo: string
  lang: string[]
  username?: string
  screenName?: string
  service?: string
  nameHistory: string[]
  interval?: number // comment interval
  lcts: string // last comment timestamp
  tc: number // total count
  tgc: number // total gift count
  amount?: number // total gift point
  icon: string
  badges: BaseBadge[]
  lst: string // last streaming title
  allowIcon?: boolean
  anonymity?: boolean
  label: string
}
export interface UserStoreData {
  [id: string]: UserNameData
}