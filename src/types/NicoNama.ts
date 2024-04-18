import { BaseResponse } from "./BaseResponse";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NicoNama {
  export interface Icon {
    urls: {
      [size: string]: string
    }
  }
  export interface User {
    description: string
    hasPremiumOrStrongerRights: false
    hasSuperPremiumOrStrongerRights: false
    icons: Icon
    nickname: string
    userId: string
  }
  export interface Meta {
    status: number
    hasNext: boolean
    maxId: string
    minId: string
    errors: any[]
  }
  export interface WatchContext {
    parameter: Parameter
  }
  
  export interface Parameter {
    nicorepo: string
  }
  
  export interface Actor {
    url: string
    name: string
    icon: string
  }
  export interface DaumObject {
    type: string
    url: string
    name: string
    image: string
  }
  export interface Daum {
    id: string
    updated: string
    watchContext: WatchContext
    actor: Actor
    title: string
    object: DaumObject
  }
  export interface UserEntryResponse {
    meta: Meta
    data: Daum[]
    errors: any[]
  }
  export interface UserDataResponse {
    data: User[]
    meta: {
      status: number
    }
  }
  export interface Chat {
    name?: string
    anonymity?: number
    content: string
    date: number
    date_usec: number
    mail?: string
    no: number
    premium: number
    thread: string
    user_id: string
    vpos: number
  }
  
  export interface Thread {
    last_res: number
    resultcode: number
    revision: number
    server_time: number
    thread: string
    ticket: string
  }
  export interface MetaResponse {
    type: string;
    data: any;
  }
  export interface RootResponse {
    chat?: Chat
    thread?: Thread
  }
  export interface EmotionHistoryElement {
    emotionId: string
    name: string
    thumbnailUrl: string
    seqNum: number
    staminaSum: number
  }
  export interface EmotionData {
    contentType: string
    contentId: string
    liveCycle: string
    isAvailable: boolean
    isPublishable: boolean
    hasReachedEmotionLimit: boolean
    enabledByOwner: boolean
    isOwner: boolean
    user: User
    staminaMaxFactor: number
    token: string
    emotionHistoryElements: EmotionHistoryElement[]
  }
  export interface Reaction {
    key: string
    src: string
    value: number
  }
  export interface Emotion {
    id: string
    name: string
    description: string
    thumbnailUrl: string
    stamina: number
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
  export interface EmotionResponse {
    meta: {
      status: number
    }
    data: EmotionData
  }
  export interface CommentResponse extends BaseResponse {
    vpos: number
    thread: string
    dateUsec: number
    mail: string
    premium: number
    anonymity: boolean
    isSystem: boolean
    command: string
    commandPrefix: string
    giftRank: string
    price: number
    no: number
		commentVisible?: boolean
    screenName: string
    origin?: string
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
}