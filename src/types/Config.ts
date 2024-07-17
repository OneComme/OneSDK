import { ServiceType } from './Service'
import { Question } from './Survey'
export interface EmojiLimit {
  enabled: boolean
  count: number
  includeGift: boolean
}
export interface ConditionalFormat {
  id: string
  le: number
  ge: number
  format: string
}
export interface SpeechConfig {
  pitch: number
  rate: number
  volume: number
  lang: string
  voice: string
  // @deprecated // plz use speechTemplate
  speechName: boolean
  dictionary: [string, string][]
  commentLengthLimit: boolean
  commentLength: number
  nameLengthLimit: boolean
  nameLength: number
  excludeUser: string
  speechFormat: string
  useSpeechFormatForGift: boolean
  speechFormatForGift: string
  useSpeechFormatForChannelPoints: boolean
  speechFormatForChannelPoints: ConditionalFormat[]
  excludeEmoji: boolean
  excludeCustomStamp: boolean
  excludeGiftImage: boolean
  emojiLimit: EmojiLimit
  speechSystemMessage: boolean
}
export type NicknameAcceptType = 'membership' | 'channelPoint' | 'subscriber' | 'nonAnonymous' | 'anonymous'
export interface CommentConfig {
  nameLengthLimit: boolean
  nameLength: number
  nameCutAfterAtSign: boolean
  useNicknamesForOutput: boolean
  excludeUser: string
  excludeImage: string
  replaceIcons: boolean
  showIconInApp: boolean
  assignNicknameFromSign: boolean
  nicknameSign: string
  nicknameAccepts: NicknameAcceptType[]
  persistNickname: boolean
  wordReplace: [string, string][]
  exportFreeGift: boolean
  exportExcludeUser: string
}
export type TraslatedSpeechType = 'translated' | 'body' | 'both'
export interface OSCTargets {
  VRChat: boolean
  VirtualCast: boolean
  NeosVR: boolean
  Unity: boolean
}
export interface YNCNeoConfig {
  enabled: boolean
  autoLaunch: boolean
  autoClose: boolean
  exePath: string
  protocol: string
  hostname: string
  port: number
  translate: boolean
  speech: boolean
  excludeUser: string
  speechType: TraslatedSpeechType
  primaryLang: string
  talker: string
  multipleTranslations: boolean
  oscEnabled: boolean
  oscTargets: OSCTargets
  speechVolume: number
}
export interface BouyomichanConfig {
  enabled: boolean
  autoLaunch: boolean
  autoClose: boolean
  exePath: string
  hostname: string
  port: number
}
export interface NicoNamaConfig {
  show184: boolean
  showLineBreakComment: boolean
  outputLineBreakComment: boolean
  speechLineBreakComment: boolean
  excludeCommands: string[]
  anonymousName: string
}
export interface ShowroomConfig {
  // @deprecated 5.0で削除
  showFreeGift: boolean
  lowestPrice: number
}
export interface BiliBiliConfig {
  lowestPriceGift: number
}
export interface TwitterConfig {
  blocks: string
}
export interface TwitchConfig {
  getChannelPointMessage: boolean
  exportChannelPointMessage: boolean
  exportChannelPointMessageWithUserInput: boolean
  speechEmote: boolean
  allowSubscribersIcon: boolean
  useBetterTTV: boolean
  use7TV: boolean
  useFrankerFaceZ: boolean
}
export interface YouTubeConfig {
  allowMembersIcon: boolean
  allowSuperChatIcon: boolean
  showAutoModeratedItem: boolean
  showAllChat: boolean
  speechAutoModeratedComment: boolean
  outputAutoModeratedComment: boolean
  showReceivedSponsorshipMessage: boolean
  getSurvey: boolean
}
export interface MirrativConfig {
  lowestPriceCoin: number
}
export interface TiktokConfig {
  lowestPrice: number
  showNotification: boolean
  shareAsFreeGiftComment: boolean
  likeAsFreeGiftComment: boolean
}
export interface MildomConfig {
  showEnterMessage: boolean
}
export interface PlatformCommonConfig {
  use: ServiceType[]
}
export interface PlatformConfig {
  common: PlatformCommonConfig
  youtube: YouTubeConfig
  niconama: NicoNamaConfig
  showroom: ShowroomConfig
  bilibili: BiliBiliConfig
  twitter: TwitterConfig
  twitch: TwitchConfig
  mirrativ: MirrativConfig
  tiktok: TiktokConfig
  mildom: MildomConfig
}
export interface APIConfig {
  allowHosts: string[]
}
export interface IntegrationConfig {
  bouyomichan: BouyomichanConfig
  yncNeo: YNCNeoConfig
  plugins: PluginConfig
}
export interface SoundConfig {
  enabled: boolean
  file: string
  volume: number
  excludeUser: string
  newCommentSoundEnabled: boolean
  newCommentSoundFile: string
  newCommentSoundVolume: number
  firstTimeCommentSoundEnabled: boolean
  firstTimeCommentSoundFile: string
  firstTimeCommentSoundVolume: number
  giftSoundEnabled: boolean
  giftSoundFile: string
  giftSoundVolume: number
  channelPointSoundEnabled: boolean
  channelPointSoundFile: string
  channelPointSoundVolume: number
  excludeLowestPriceGift: boolean
}
export interface OrderConfig {
  enabled: boolean
  words: string
  declineWords: string
  templateString: string
  excludeUser: string
  templateType: 'column' | 'row'
  emptyText: string
  skipConfirm: boolean
  onlyChannelPointFromTwitch: boolean
  sound: {
    enabled: boolean
    file: string
    volume: number
  }
}
export interface ActiveSurvey {
  surveyId: string
  question: Question
}
export interface SelectiveAnswerConfig {
  skipSpeech: boolean
  skipTranslate: boolean
}
// export interface RequestAnswerConfig {}
export interface SurveyConfig {
  enabled: boolean
  prefix: string
  excludeUser: string
  resultVisible: boolean
  active: ActiveSurvey | null
  selectiveAnswerConfig: SelectiveAnswerConfig
  // requestAnswerConfig: RequestAnswerConfig
}
export interface BackupTargets {
  template: boolean
  commentLog: boolean
  database: boolean
  config: boolean
  survey: boolean
  plugins: boolean
}
export interface BackupTiming {
  atLaunched: boolean
  atClosed: boolean
}
export interface BackupConfig {
  enabled: boolean
  path: string
  count: number
  targets: BackupTargets
  timing: BackupTiming
}
export interface NotifyConfig {
  enabled: boolean
  sound: boolean
  excludeUser: string
}
export interface NotificationConfig {
  sound: SoundConfig
  notify: NotifyConfig
}
export interface UICommentConfig {
  userIcon: boolean
  userBadge: boolean
  screenName: boolean
  floatComment: boolean
  commentServiceName: boolean
  commentTimestamp: boolean
  commentCount: boolean
  labels: boolean
  returnVisitTime: boolean
  fontSize: number
  nameSize: number
  screenNameSize: number
  labelSize: number
  footerInfoSize: number
  paidTextSize: number
  iconSize: number
  badgeSize: number
  direction: CommentDirectionType
  animation: boolean
  fontFamily: string
  padding: number
  lineHeight: number
  imgSize: number
  giftImgSize: number
  emoteImgSize: number
}
export interface UIViewerConfig {
  chatView: boolean
  giftView: boolean
  freeGiftView: boolean
  streamingInfoView: boolean
}
export interface UIConfig {
  darkMode: boolean
  theme: string
  comment: UICommentConfig
  viewer: UIViewerConfig
}
export interface ProConfig {
  skipOutput: boolean
}
export type CommentDirectionType = 'top' | 'bottom'
export interface ReactionEffectConfig {
  enabled: boolean
  magnification: number
  limit: number
  size: number
}

export interface ActivatedPlugins {
  [key: string]: boolean
}
export interface PluginConfig {
  activated: string[]
}
export interface AppConfig {
  fixedForeground: boolean
  logs: boolean
  lang: string
  pro: ProConfig
  mode: number
  lastNewsDate: string
  autoLaunch: boolean
  reactionEffect: ReactionEffectConfig
  skipCloseConfirmation: boolean
  hardwareAcceleration: boolean
  migrated: {
    v5: boolean
    v52: boolean
  }
  testComments: string
}
export interface SearchConfig {
  newComment: boolean
  word: string
}
export interface ViewConfig {
  filter: string[]
  search: SearchConfig
}
export interface MainViewConfig {
  splitView: boolean
  views: ViewConfig[]
}
export interface RemoteConfig {
  enabled: boolean
}
export interface TemplateConfig {
  favorites: string[]
}
export interface SetListTemplateConfig {
  textFormat: string
  templateType: 'column' | 'row'
}
export interface RequestTemplateConfig extends SetListTemplateConfig {
  order: 'desc' | 'asc'
}
export interface SetListTemplateList {
  list: SetListTemplateConfig
  completed: SetListTemplateConfig
  request: RequestTemplateConfig
}
export type RequestAccepts = NicknameAcceptType
export interface SearchLink {
  label: string
  url: string
}
export interface MusicRequestConfig {
  enabled: boolean
  requestWord: string
  excludeUser: string
  searchLinks: SearchLink[]
  accepts: RequestAccepts[]
  sound: {
    enabled: boolean
    file: string
    volume: number
  }
}
export interface SetListSearchOptions {
  threshold: number
  distance: number
}
export interface SetListConfig {
  request: MusicRequestConfig
  templates: SetListTemplateList
  search: SetListSearchOptions
}
export interface TimestampConfig {
  acceptTimestampComment: boolean
  moderatorOnly: boolean
  includeUsername: boolean
}
export interface Config {
  speech: SpeechConfig
  app: AppConfig
  backup: BackupConfig
  comment: CommentConfig
  integration: IntegrationConfig
  api: APIConfig
  platform: PlatformConfig
  notification: NotificationConfig
  order: OrderConfig
  survey: SurveyConfig
  timestamp: TimestampConfig
  ui: UIConfig
  mainView: MainViewConfig
  remote: RemoteConfig
  template: TemplateConfig
  setList: SetListConfig
}
