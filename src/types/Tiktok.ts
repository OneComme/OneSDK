/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse'
export module Tiktok {
  export interface Gift {
    gift_id: number
    repeat_count: number
    repeat_end: number
    gift_type: number
  }
  export interface Badge {
    type: string
    name: string
    displayType?: number
    url?: string
  }
  export interface RootRoomInfo {
    title: string
    owner_user_id: number
    create_time: number
  }
  export interface RootRoomResponse {
    viewerCount: number
  }
  export interface RoomData {
    create_time: number
    id_str: string
    live_id: number
    title: string
    stream_status: number
    owner: {
      display_id: string
      nickname: string
      bio_description: string
    }
  }
  export interface AccountData {
    user_id: number
    user_id_str: string
    odin_user_type: number
    sec_user_id: string
    screen_name: string
    avatar_url: string
    description: string
    mobile: string
    email: string
    username: string
    has_password: number
    create_time: number
    connects: Connect[]
    session_key: string
    country_code: number
    app_id: number
  }
  export interface Connect {
    screen_name: string
    platform: string
    profile_image_url: string
    sec_platform_uid: string
    create_time: number
  }
  export interface UserData {
    user_id: number
    user_id_str: string
    odin_user_type: number
    sec_user_id: string
    screen_name: string
    avatar_url: string
    description: string
    mobile: string
    email: string
    username: string
    has_password: number
    create_time: number
    connects: Connect[]
    session_key: string
    country_code: number
    app_id: number
    is_employee: boolean
    external_employee_platform: string
  }

  export interface Extra {
    now: number
  }

  export interface UserResponse {
    data: UserData
    message: string
  }
  export interface AccountResponse {
    message: string
    data: AccountData
  }
  export interface RoomResponse {
    data: RoomData
    extra: any
    status_code: number
  }
  export interface RootCommentResponse {
    secUid: string
    comment: string
    userId: string
    uniqueId: string
    nickname: string
    profilePictureUrl: string
    followRole: number
    userBadges: Badge[]
    isModerator: boolean
    isNewGifter: boolean
    isSubscriber: boolean
    topGifterRank?: any
  }
  export interface ProfilePicture {
    urls: string[]
  }
  export interface FollowInfo {
    followingCount: number
    followerCount: number
    followStatus: number
    pushStatus: number
  }
  export interface ImageBadgeData {
    displayType: number // 1
    image: {
      url: string
    }
  }
  export interface BadgeData {
    type: string
    name: string
  }
  export interface UserBadge {
    badgeSceneType: number // 1 or 4
    badges?: BadgeData[]
    imageBadges?: ImageBadgeData[]
  }
  export interface User {
    userId: Long
    badges: UserBadge[]
    nickname: string
    profilePicture: ProfilePicture
    followInfo: FollowInfo
    uniqueId: string
    secUid: string

    bioDescription?: string // WebcastRoomUserSeqMessage
    createTime?: string // WebcastRoomUserSeqMessage
  }
  export interface EventDetails {
    displayType: string
    label: string
  }
  export interface Long {
    high: number
    low: number
    unsigned: boolean
    toString(): string
    toNumber(): number
  }
  export interface Event {
    msgId: Long
    createTime: Long
    eventDetails?: EventDetails
  }
  export interface WebcastMemberMessageData {
    event: Event
    user: User
    actionId: number
  }
  export interface Data {
    event: Event
    user: User
    actionId: number
    comment?: string
  }
  export interface TopViewer {
    coinCount: string
    user: User
  }
  export interface WebcastRoomUserSeqMessageData {
    topViewers: TopViewer[]
    viewerCount: number
  }
  export interface WebcastLikeMessageData {
    event: Event
    likeCount: number
    totalLikeCount: number
    user: User
  }
  export interface WebcastChatMessageData {
    event: Event
    user: User
    comment: string
  }
  export interface WebcastSocialMessageData {
    event: Event
    user: User
  }
  export interface GiftImage {
    giftPictureUrl: string
  }
  export interface GiftDetails {
    giftImage: GiftImage
    describe: string
    giftType: number
    diamondCount: number
    giftName: string
  }
  export interface GiftExtra {
    timestamp: string
    receiverUserId: string
  }
  export interface WebcastGiftMessageData {
    event: Event
    giftId: number
    repeatCount: number
    user: User
    groupId: string
    giftDetails: GiftDetails
    monitorExtra: string
    giftExtra: GiftExtra
  }
  export interface TreasureBoxData {
    coins: number
    canOpen: number
    timestamp: string
  }
  export interface User4 {
    user: User
  }
  export interface User3 {
    user4: User4
  }
  export interface User2 {
    user3: User3[]
  }
  export interface TreasureBoxUser {
    user2: User2
  }
  export interface Image {
    imageUrl: string
  }
  export interface EmoteData {
    emoteId: string
    image: Image
  }
  export interface Emote {
    emote: EmoteData
    placeInComment?: number
  }
  export interface WebcastEnvelopeMessageData {
    treasureBoxUser: TreasureBoxUser
    treasureBoxData: TreasureBoxData
  }
  export interface WebcastControlMessageData {
    action: number
  }
  export interface WebcastSubNotifyMessageData {
    event: Event
    user: User
    exhibitionType: number
    subMonth: number
    subscribingStatus: number
  }
  export interface WebcastGiftMessage {
    type: 'WebcastGiftMessage'
    data: WebcastGiftMessageData
  }
  export interface WebcastSocialMessage {
    type: 'WebcastSocialMessage'
    data: WebcastSocialMessageData
  }
  export interface WebcastChatMessage {
    type: 'WebcastChatMessage'
    data: WebcastChatMessageData
  }
  export interface WebcastLikeMessage {
    type: 'WebcastLikeMessage'
    data: WebcastLikeMessageData
  }
  export interface WebcastRoomUserSeqMessage {
    type: 'WebcastRoomUserSeqMessage'
    data: WebcastRoomUserSeqMessageData
  }
  export interface WebcastMemberMessage {
    type: 'WebcastMemberMessage'
    data: WebcastMemberMessageData
  }
  export interface WebcastRankTextMessage {
    type: 'WebcastRankTextMessage'
  }
  export interface WebcastGiftBroadcastMessage {
    type: 'WebcastGiftBroadcastMessage'
  }
  export interface WebcastUnauthorizedMemberMessage {
    type: 'WebcastUnauthorizedMemberMessage'
  }
  export interface WebcastMsgDetectMessage {
    type: 'WebcastMsgDetectMessage'
  }
  export interface WebcastEnvelopeMessage {
    type: 'WebcastEnvelopeMessage'
    data: WebcastEnvelopeMessageData
  }
  export interface WebcastInRoomBannerMessage {
    type: 'WebcastInRoomBannerMessage'
    data: string // json string
  }
  export interface WebcastRankUpdateMessage {
    type: 'WebcastRankUpdateMessage'
  }
  export interface WebcastControlMessage {
    type: 'WebcastControlMessage'
    data: WebcastControlMessageData
  }
  export interface WebcastLinkMicMethod {
    type: 'WebcastLinkMicMethod'
  }
  export interface WebcastLiveIntroMessage {
    type: 'WebcastLiveIntroMessage'
    data: any
  }
  export interface WebcastEmoteChatMessage {
    type: 'WebcastEmoteChatMessage'
    data: any
  }
  export interface WebcastSubNotifyMessage {
    type: 'WebcastSubNotifyMessage'
    data: WebcastSubNotifyMessageData
  }
  export interface WebcastQuestionNewMessage {
    type: 'WebcastQuestionNewMessage'
    data: any
  }
  export interface WebcastLinkMicBattle {
    type: 'WebcastLinkMicBattle'
    data: any
  }
  export interface WebcastLinkMicArmies {
    type: 'WebcastLinkMicArmies'
    data: any
  }
  export type Message =
    | WebcastMemberMessage
    | WebcastRoomUserSeqMessage
    | WebcastLikeMessage
    | WebcastChatMessage
    | WebcastSocialMessage
    | WebcastGiftMessage
    | WebcastRankTextMessage
    | WebcastGiftBroadcastMessage
    | WebcastUnauthorizedMemberMessage
    | WebcastMsgDetectMessage
    | WebcastEnvelopeMessage
    | WebcastInRoomBannerMessage
    | WebcastRankUpdateMessage
    | WebcastControlMessage
    | WebcastLinkMicMethod
    | WebcastLiveIntroMessage
    | WebcastEmoteChatMessage
    | WebcastSubNotifyMessage
    | WebcastQuestionNewMessage
    | WebcastLinkMicBattle
    | WebcastLinkMicArmies

  export interface RootResponse {
    messages: Message[]
    cursor: string
    fetchInterval: number
    serverTimestamp: string
    internalExt: string
    heartbeatDuration: number
    needAck: boolean
  }
  export interface GiftData {
    giftId: string
    details?: GiftDetails
    repeatCount: number
  }
  export type GiftType = 'gift' | 'social' | 'subscribe' | 'like'
  export interface CommentResponse extends BaseResponse {
    isModerator: boolean
    screenName: string
    price?: number
    gift?: GiftData
    giftType?: GiftType
    origin: any
  }
  export interface UserDetails {
    createTime: string
    bioDescription: string
    profilePictureUrls: string[]
  }

  export interface LikeResponse {
    likeCount: number
    totalLikeCount: number
    userId: string
    secUid: string
    uniqueId: string
    nickname: string
    profilePictureUrl: string
    followRole: number
    userBadges: any[]
    userSceneTypes: any[]
    userDetails: UserDetails
    followInfo: FollowInfo
    isModerator: boolean
    isNewGifter: boolean
    isSubscriber: boolean
    topGifterRank: any
    gifterLevel: number
    teamMemberLevel: number
    msgId: string
    createTime: string
    displayType: string
    label: string
  }
  export interface CountStockData {
    amount: number
    comment: CommentResponse
  }
}
