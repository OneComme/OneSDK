import { RGBColor } from './Color'
import { SoundConfig, VoicevoxOptions } from './Config'
export interface ServiceList {
  youtube: 'youtube'
  twicas: 'twicas'
  twitch: 'twitch'
  niconama: 'niconama'
  showroom: 'showroom'
  bilibili: 'bilibili'
  mirrativ: 'mirrativ'
  mixch: 'mixch'
  twitter: 'twitter'
  doneru: 'doneru'
  tiktok: 'tiktok'
  streamlabs: 'streamlabs'
  kick: 'kick'
  vtips: 'vtips'
  external: 'external'
  system: 'system'
}
export type ServiceType = keyof ServiceList
export interface Service {
  id: string
  name: string
  url: string
  speech: boolean
  options?: ServiceOptions
  write: boolean
  enabled: boolean
  color: RGBColor
  translate?: string[]
  persist?: boolean
  meta?: ServiceMeta
}
export interface ServiceError {
  id: number
  url: string
  method: string
  webContentsId?: number
  referrer: string
  timestamp: number
  responseHeaders?: Record<string, string[]>
  statusCode: number
  statusLine: string
  error: string
}
export interface ServiceOptions {
  yncTalker?: string
  yncVolume?: number
  bouyomiVoice?: string
  bouyomiVolume?: number
  voice?: string
  voiceVolume?: number
  outputLogs?: boolean
  sound?: Partial<SoundConfig>
  voicevox?: Partial<VoicevoxOptions>
}
export interface ServiceMeta {
  title?: string
  startTime?: number
  viewer?: number
  total?: number
  loggedIn?: boolean
  loggedName?: string
  isLive?: boolean
  isReconnecting?: boolean
  totalLikeCount?: number
  upVote?: string // youtube
  star?: number // showroom
  follower?: number // twitch, showroom
  points?: {
    // niconama
    gift?: number
    ad?: number
  }
}
