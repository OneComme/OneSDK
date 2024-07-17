/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse'

export module Kick {
  export interface CurrentViewers {
    livestream_id: number
    viewers: number
  }
  export interface Chatroom {
    id: number
    chatable_type: string
    channel_id: number
    created_at: string
    updated_at: string
    chat_mode_old: string
    chat_mode: string
    slow_mode: boolean
    chatable_id: number
  }
  export interface ChannelUser {
    id: number
    username: string
    agreed_to_terms: boolean
    email_verified_at: string
    bio: string
    country: string
    state: string
    city: string
    instagram: string
    twitter: string
    youtube: string
    discord: string
    tiktok: string
    facebook: string
    birthdate: string
    profile_pic: string
  }
  export interface AscendingLink {
    id: number
    channel_id: number
    description: string
    link: string
    created_at: string
    updated_at: string
    order: number
    title: string
  }

  export interface Plan {
    id: number
    channel_id: number
    stripe_plan_id: string
    amount: string
    created_at: string
    updated_at: string
  }

  export interface PreviousLivestream {
    id: number
    slug: string
    channel_id: number
    created_at: string
    session_title: string
    is_live: boolean
    risk_level_id: any
    source?: string
    twitch_channel: any
    duration: number
    language: string
    is_mature: boolean
    viewer_count: number
    thumbnail: Thumbnail2
    views: number
    tags: any[]
    categories: Category4[]
    video: Video
  }

  export interface Thumbnail2 {
    src: string
    srcset: string
  }

  export interface Category4 {
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description: any
    deleted_at: any
    banner: Banner2
    category: Category5
  }

  export interface Banner2 {
    responsive: string
    url: string
  }

  export interface Category5 {
    id: number
    name: string
    slug: string
    icon: string
  }

  export interface Video {
    id: number
    live_stream_id: number
    slug: any
    thumb: any
    s3: any
    trading_platform_id: any
    created_at: string
    updated_at: string
    uuid: string
    views: number
    deleted_at: any
  }

  export interface Verified {
    id: number
    channel_id: number
    created_at: string
    updated_at: string
  }
  export interface SubscriberBadge {
    id: number
    channel_id: number
    months: number
    badge_image: BadgeImage
  }

  export interface BadgeImage {
    srcset: string
    src: string
  }

  export interface BannerImage {
    responsive: string
    url: string
  }

  export interface RecentCategory {
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description: any
    deleted_at: any
    banner: Banner
    category: Category
  }

  export interface Banner {
    responsive: string
    url: string
  }

  export interface Category {
    id: number
    name: string
    slug: string
    icon: string
  }

  export interface Livestream {
    id: number
    slug: string
    channel_id: number
    created_at: string
    session_title: string
    is_live: boolean
    risk_level_id: any
    source: any
    twitch_channel: any
    duration: number
    language: string
    is_mature: boolean
    viewer_count: number
    thumbnail: Thumbnail
    viewers: number
    categories: Category2[]
    tags: any[]
  }

  export interface Thumbnail {
    responsive: string
    url: string
  }

  export interface Category2 {
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description: any
    deleted_at: any
    category: Category3
  }

  export interface Category3 {
    id: number
    name: string
    slug: string
    icon: string
  }
  export interface GeneratedConversions {
    fullsize: boolean
    medium: boolean
  }
  export interface CustomProperties {
    generated_conversions: GeneratedConversions
  }
  export interface Medum {
    id: number
    model_type: string
    model_id: number
    collection_name: string
    name: string
    file_name: string
    mime_type: string
    disk: string
    size: number
    manipulations: any[]
    custom_properties: CustomProperties
    responsive_images: any[]
    order_column: number
    created_at: string
    updated_at: string
    uuid: string
    conversions_disk: string
  }
  export interface ChannelInfo {
    id: number
    user_id: number
    slug: string
    playback_url: string
    name_updated_at: any
    vod_enabled: boolean
    subscription_enabled: boolean
    cf_rate_limiter: string
    followersCount: number
    subscriber_badges: SubscriberBadge[]
    banner_image: BannerImage
    recent_categories: RecentCategory[]
    livestream: Livestream
    role: any
    muted: boolean
    follower_badges: any[]
    offline_banner_image: any
    can_host: boolean
    user: ChannelUser
    chatroom: Chatroom
    ascending_links: AscendingLink[]
    plan: Plan
    previous_livestreams: PreviousLivestream[]
    verified: Verified
    media: Medum[]
  }
  export interface User {
    id: number
    username: string
    slug: string
    profile_pic: string | null
    is_staff: boolean
    is_channel_owner: boolean
    is_moderator: boolean
    badges: Badge[]
    following_since: string
    subscribed_for: number
    banned: any
  }
  export interface Sender {
    id: number
    username: string
    slug: string
    identity: Identity
  }

  export interface Identity {
    color: string
    badges: Badge[]
  }

  export interface Badge {
    type: string
    text: string
    count?: number
  }

  export interface ChatMessageData {
    id: string
    chatroom_id: number
    content: string
    type: string
    created_at: string
    sender: Sender
  }

  export interface FollowersUpdateData {
    channel_id: number
    created_at: number
    followed: boolean
    followersCount: number
    username: null | string
  }
  export interface LuckyUsersWhoGotGiftSubscriptionsEventData {
    channel: ChannelInfo
    gifter_username: string
    usernames: string[]
  }
  export interface GiftsLeaderboardUpdatedData {
    channel: ChannelInfo
    gifted_quantity: number
    gifter_id: number
    leaderboard: {
      quantity: number
      username: string
      user_id: number
    }[]
  }

  export interface ChatMessageReact {
    channel: string
    data: string
    event: 'App\\Events\\ChatMessageReact'
  }
  export interface ChatMessageEvent {
    channel: string
    data: string
    event: 'App\\Events\\ChatMessageEvent'
  }
  export interface SubscriptionSucceeded {
    channel: string
    data: string
    event: 'pusher_internal:subscription_succeeded'
  }
  export interface ConnectionEstablished {
    channel: string
    data: string
    event: 'pusher:connection_established'
  }
  export interface FollowersUpdate {
    channel: string
    data: string
    event: 'App\\Events\\FollowersUpdated'
  }
  export interface ISLiveStream {
    id: number
    channel_id: number
    session_title: string
    source: any
    created_at: string
  }
  export interface StreamerIsLiveData {
    livestream: ISLiveStream
  }
  export interface StreamerIsLive {
    event: 'App\\Events\\StreamerIsLive'
    data: string
    channel: string
  }
  export interface ChatMessageDeleted {
    channel: string
    data: string
    event: 'App\\Events\\ChatMessageDeletedEvent'
  }
  export interface LuckyUsersWhoGotGiftSubscriptionsEvent {
    channel: string
    data: string
    event: 'App\\Events\\LuckyUsersWhoGotGiftSubscriptionsEvent'
  }
  export interface GiftsLeaderboardUpdated {
    channel: string
    data: string
    event: 'App\\Events\\GiftsLeaderboardUpdated'
  }
  export interface DeletedMessage {
    id: string
    deleted_by: number
    chatroom_id: string
  }
  export interface ChatMessageDeletedEventData {
    deletedMessage: DeletedMessage
  }
  export interface ChatMessageDeletedEvent {
    event: 'App\\Events\\ChatMessageDeletedEvent'
    channel: string
    data: string
  }
  export interface Channel {
    id: number
    is_banned: boolean
  }
  export interface StoppedLivestream {
    id: number
    channel: Channel
  }

  export interface StopStreamBroadcastData {
    livestream: StoppedLivestream
  }
  export interface StopStreamBroadcast {
    event: 'App\\Events\\StopStreamBroadcast'
    data: string
    channel: string
  }

  export interface SubscriptionEventData {
    chatroom_id: number
    username: string
    months: number
  }
  export interface SubscriptionEvent {
    event: 'App\\Events\\SubscriptionEvent'
    data: string
    channel: string
  }
  export type RootResponse =
    | ConnectionEstablished
    | SubscriptionSucceeded
    | ChatMessageEvent
    | ChatMessageReact
    | FollowersUpdate
    | ChatMessageDeleted
    | LuckyUsersWhoGotGiftSubscriptionsEvent
    | GiftsLeaderboardUpdated
    | StreamerIsLive
    | SubscriptionEvent
    | ChatMessageDeletedEvent
    | StopStreamBroadcast
  export interface CommentResponse extends BaseResponse {
    origin: any
    anonymity: boolean
  }
}
