import { BaseResponse, BaseSystemResponse } from './BaseResponse'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NicoNama {
  export interface MetaResponse {
    type: string
    data: any
  }
  export interface Reaction {
    key: string
    src: string
    value: number
  }
  export interface EmotionGroup {
    id: number
    name: string
    emotions: Emotion[]
    isOwnerOnly: boolean
  }
  export interface EmotionGroupData {
    groups: EmotionGroup[]
  }
  export interface EmotionGroupResponse {
    meta: {
      status: number
    }
    data: EmotionGroupData
  }
  export interface Emotion {
    id: string
    name: string
    description: string
    thumbnailUrl: string
    stamina: number
  }
  export interface Id {
    value: string
  }

  export interface AudienceLimitation {
    loginLimitation: string
  }

  export interface Features {
    enabledList: string[]
  }

  export interface KonomiTags {
    itemsList: any[]
  }

  export interface Program {
    title: string
    description: string
    provider: string
    schedule: Schedule
    additionalDescriptions: unknown
  }

  export interface Schedule {
    status: string
    openTime: OpenTime
    beginTime: BeginTime
    scheduledEndTime: ScheduledEndTime
    endTime: EndTime
    vposBaseTime: VposBaseTime
  }

  export interface OpenTime {
    seconds: number
    nanos: number
  }

  export interface BeginTime {
    seconds: number
    nanos: number
  }

  export interface ScheduledEndTime {
    seconds: number
    nanos: number
  }

  export interface EndTime {
    seconds: number
    nanos: number
  }

  export interface VposBaseTime {
    seconds: number
    nanos: number
  }

  export interface ProgramProvider {
    type: string
    name: string
    profileUrl: string
    nicopediaArticleUrl: NicopediaArticleUrl
    programProviderId: ProgramProviderId
    icons: Icons
    userLevel: UserLevel
    isStandardAccount: IsStandardAccount
    description: Description
  }

  export interface NicopediaArticleUrl {
    value: string
  }

  export interface ProgramProviderId {
    value: string
  }

  export interface Icons {
    uri150x150: string
    uri50x50: string
  }

  export interface UserLevel {
    value: number
  }

  export interface IsStandardAccount {
    value: boolean
  }

  export interface Description {
    value: string
  }

  export interface SocialGroup {
    socialGroupId: string
    type: string
    name: string
    description: string
    thumbnail: string
    thumbnailSmall: string
    isSafeThumbnail: IsSafeThumbnail
    level: Level
    isFollowed: boolean
    isJoined: boolean
    isDeleted: IsDeleted
  }

  export interface IsSafeThumbnail {
    value: boolean
  }

  export interface Level {
    value: number
  }

  export interface IsDeleted {
    value: boolean
  }

  export interface Statistics {
    viewers: Viewers
    comments: Comments
    timeshiftReservations?: TimeshiftReservations
  }

  export interface Viewers {
    value: number
  }
  export interface Comments {
    value: number
  }
  export interface TimeshiftReservations {
    value: number
  }

  export interface Taxonomy {
    tags: Tags
    categories: Categories
  }

  export interface Tags {
    itemsList: ItemsList[]
    ownerLocked: boolean
  }
  export interface ItemsList {
    text: string
    locked: boolean
    reserved: boolean
    nicopediaArticleUrl?: NicopediaArticleUrl2
  }

  export interface NicopediaArticleUrl2 {
    value: string
  }
  export interface MainList {
    text: string
    nicopediaArticleUrl: NicopediaArticleUrl3
  }

  export interface NicopediaArticleUrl3 {
    value: string
  }

  export interface SubList {
    text: string
    nicopediaArticleUrl: NicopediaArticleUrl4
  }

  export interface NicopediaArticleUrl4 {
    value: string
  }
  export interface Categories {
    mainList: MainList[]
    subList: SubList[]
  }
  export interface Thumbnail {
    screenshot?: Screenshot
  }

  export interface Screenshot {
    large: string
    middle: string
    small: string
    micro: string
  }

  export interface TimeshiftSetting {
    watchLimit: string
    requirement: string
    status: string
    endTime: EndTime2
    reservationDeadline: ReservationDeadline
  }

  export interface EndTime2 {
    seconds: number
    nanos: number
  }

  export interface ReservationDeadline {
    seconds: number
    nanos: number
  }
  export interface ProgramsList {
    id: Id
    publicStatus: number
    audienceLimitation: AudienceLimitation
    features: Features
    konomiTags: KonomiTags
    program: Program
    programProvider: ProgramProvider
    socialGroup: SocialGroup
    statistics: Statistics
    taxonomy: Taxonomy
    thumbnail: Thumbnail
    timeshiftSetting?: TimeshiftSetting
  }
  export interface BroadcastHistoryData {
    programsList: ProgramsList[]
    hasNext: boolean
    totalCount: number
  }
  export interface UserBroadcastHistory {
    meta: Meta
    data: BroadcastHistoryData
  }
  export interface OperatorComment {
    content: string
  }

  export interface MarqueDisplay {
    operatorComment: OperatorComment
    duration: string
  }

  export interface MarqueState {
    display: MarqueDisplay
  }
  export interface ModerationAnnouncementState {
    // todo
  }
  export interface ProgramStatusState {
    state: string // 'Ended'
  }
  export interface TrialPanelState {
    // todo
  }
  export interface CommentModeState {
    // todo
  }
  export interface CommentLockState {
    // todo
  }

  export interface Jump {
    content: string // ジャンプ先 URL
    message: string // ジャンプ時に表示するメッセージ
  }
  export interface Redirect {
    uri: string // リダイレクト先 URL
    message: string // リダイレクト時に表示するメッセージ
  }
  export interface MoveOrderState {
    // todo
    jump?: Jump
    redirect?: Redirect
  }
  export interface EnqueteChoice {
    description: string
    perMille: number
  }
  export interface EnqueteState {
    question?: string
    choices?: EnqueteChoice[]
    status?: 'Result' | 'Poll'
  }
  export interface StatisticsState {
    viewers?: number
    comments?: number
    adPoints?: number
    giftPoints?: number
  }
  export interface UnknownState {}
  export interface StateResponse {
    state:
      | { statistics: StatisticsState } // 番組統計
      | { enquete: EnqueteState } // 旧 /enquete
      | { moveOrder: MoveOrderState } // 旧 /jump or /redirect
      | { marquee: MarqueState } // 運営コメントおよび旧 /perm
      | { commentLock: CommentLockState } // 旧 /commentlock
      | { commentMode: CommentModeState } // 旧 /commentmode
      | { trialPanel: TrialPanelState } // 旧 /trialpanel
      | { programStatus: ProgramStatusState } // 旧 /disconnect相当
      | { moderationAnnouncement: ModerationAnnouncementState } // モデレータへの指示内容
    meta: Meta
  }
  export type ChunkEntryData = RootMessageResponse | StateResponse | SignalResponse
  export interface ChunkEntry {
    toJson(): ChunkEntryData
  }
  export interface Meta {
    id: string
    at: string
    origin: Origin
  }

  export interface DateComponent {
    date: number
    dateUsec: number
  }

  export interface Origin {
    chat: Chat
  }

  export interface Chat {
    liveId: string
  }
  export interface AnonimityChatMessage {
    content?: string
    hashedUserId: string
    modifier: any
    no: number
    vpos: number
    accountStatus?: 'Premium' | 'Standard'
  }
  export interface UserChatMessage {
    content: string
    name: string
    vpos: number
    accountStatus: string
    rawUserId: string
    modifier: any
    no: number
  }
  export interface OperatorMessage extends DateComponent {
    content?: string
    link?: string
    mail?: string
    name?: string
  }
  export const NotificationTypeTable = [
    'quote',
    'cruise',
    'emotion',
    'ichiba',
    'programExtended',
    'rankingIn',
    'rankingUpdated',
    'visited',
  ] as const

  export const AllNotificationTypeTable = ['nicoad', ...NotificationTypeTable, 'disconnect', 'survey'] as const
  export type AllNotificationTypes = (typeof AllNotificationTypeTable)[number]
  export type NotificationTypes = (typeof NotificationTypeTable)[number]
  export type IchibaMessage = {
    ichiba: string
  }
  export type QuoteMessage = {
    quote: string
  }
  export type CruiseMessage = {
    cruise: string
  }
  export type ProgramExtendedMessage = {
    programExtended: string
  }
  export type RankingInMessage = {
    rankingIn: string
  }
  export type RankingUpdateMessage = {
    rankingUpdated: string
  }
  export type EmotionMessage = {
    emotion: any
  }
  export type VisitedMessage = {
    visited: string
  }

  export type NotificationMessage =
    | VisitedMessage
    | IchibaMessage
    | QuoteMessage
    | CruiseMessage
    | ProgramExtendedMessage
    | RankingInMessage
    | RankingUpdateMessage
    | EmotionMessage
    | VisitedMessage

  export interface GiftMessage extends DateComponent {
    itemId: string
    advertiserUserId?: number
    advertiserName: string
    point: string
    message: string
    itemName: string
    contributionRank?: number
  }

  export interface NicoadMessageV0 extends DateComponent {
    v0: {
      latest?: {
        advertiser: string
        point: number
        message?: string
      }
      ranking?: {
        advertiser: string
        rank: number
        message?: string
        userRank?: number
      }[]
      totalPoint: number
    }
  }
  export interface NicoadMessageV1 extends DateComponent {
    v1: {
      totalAdPoint?: number
      message?: string
    }
  }
  export interface NicopediaArticle {
    pageUrl: string
    exists: boolean
  }

  export interface SupplierIcons {
    uri50x50: string
    uri150x150: string
  }

  export interface Supplier {
    name: string
    pageUrl: string
    introduction: string
    nicopediaArticle: NicopediaArticle
    programProviderId: string
    icons: SupplierIcons
    level: number
    accountType: string
  }

  export type NicoadMessage = NicoadMessageV0 | NicoadMessageV1

  export interface GameUpdateMessage extends DateComponent {}

  export interface StateMessage extends DateComponent {
    state: 'ended'
  }

  export interface ParsedSystemResponse {
    type: 'system'
    data: SystemResponse
  }
  export interface ParsedCommentResponse {
    type: 'comment'
    data: CommentResponse
  }

  export type SignalMessage = 'flushed'
  export type ChatMessageType = UserChatMessage | AnonimityChatMessage
  export type RootMessageType =
    | { chat: ChatMessageType }
    | { operator: OperatorMessage }
    | { simpleNotification: NotificationMessage }
    | { gift: GiftMessage }
    | { nicoad: NicoadMessage }
    | { gameUpdate: GameUpdateMessage }
    | { state: StateMessage }
  export type RootMessageResponse = {
    message: RootMessageType
    meta: Meta
  }
  export type SignalResponse = { signal: SignalMessage }
  export interface SystemResponse extends BaseSystemResponse {
    command: AllNotificationTypes
  }

  export interface CommentResponse extends BaseResponse {
    screenName: string
    anonymity: boolean
    no?: number
    premium?: boolean
    price?: number
    commentVisible?: boolean
    origin: RootMessageResponse | StateResponse | SignalResponse
  }
}
