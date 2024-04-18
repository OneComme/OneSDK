/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse';
import { Colors } from './Comment';

export module Twitch {
  export interface RootResponse {
      '@badge-info': string;
      badges: string;
      bits?: string;
      color: string;
      'display-name': string;
      emotes?: string;
      'first-msg': string;
      flags: string;
      id: string;
      mod: string;
      'room-id': string;
      subscriber: "0" | "1";
      'tmi-sent-ts': string;
      turbo: string;
      'user-id': string;
      message: string;
      'user-type': string;
      'system-msg'?: string
      vip?: number
  }
  export interface Extensions {
    durationMilliseconds: number;
    operationName: string;
    requestID: string;
  }
  export interface DisplayBadge {
    id: string;
    setID: string;
    version: string;
    title: string;
    image1x: string;
    image2x: string;
    image4x: string;
    clickAction: string;
    clickURL: string;
    __typename: string;
    description: string;
  }
  export interface Self {
    friendship?: any;
    __typename: string;
  }
  export interface CumulativeTenure {
      daysRemaining: number;
      months: number;
      __typename: string;
  }
  export interface Gift {
    isGift: boolean;
    __typename: string;
  }
  export interface SubscriptionBenefit {
      id: string;
      tier: string;
      purchasedWithPrime: boolean;
      gift: Gift;
      __typename: string;
  }
  export interface Relationship {
      cumulativeTenure: CumulativeTenure;
      followedAt: Date;
      subscriptionBenefit: SubscriptionBenefit;
      __typename: string;
  }
  export interface TargetUserData {
    id: string;
    login: string;
    bannerImageURL?: any;
    displayName: string;
    displayBadges: DisplayBadge[];
    profileImageURL: string;
    createdAt: Date;
    self: Self;
    __typename: string;
    relationship: Relationship;
  }
  export interface ViewCardResponse {
    data: {
      targetUser: TargetUserData
    };
    extensions: Extensions;
  }
  export interface Badge {
    id: string;
    setID: string;
    version: string;
    title: string;
    image1x: string;
    image2x: string;
    image4x: string;
    clickAction: string;
    clickURL: string;
    __typename: string;
  }
  export interface ClipMetadata {
    game: string;
    channel_display_name: string;
    slug: string;
    id: string;
    broadcaster_id: string;
    curator_id: string;
  }
  export interface TwitchMetadata {
    clip_metadata: ClipMetadata;
  }
  export interface CommuinityPointsUserMessageData {
    timestamp: string
    redemption: Redemption
  }
  export interface CommuinityPointsUserMessage {
    type: string;
    data: CommuinityPointsUserMessageData;
  }
  
  export interface StreamChatRoomMessageData {
    message_id: string;
    request_url: string;
    author_name: string;
    thumbnail_url: string;
    title: string;
    twitch_metadata: TwitchMetadata;
  }
  export interface StreamChatRoomMessage {
    type: string;
    data: StreamChatRoomMessageData;
  }
  export interface User {
    id: string
    login: string
    display_name: string
  }
  export interface RewardImage {
    url_1x: string
    url_2x: string
    url_4x: string
  }
  
  export interface MaxPerStream {
    is_enabled: boolean
    max_per_stream: number
  }
  
  export interface MaxPerUserPerStream {
    is_enabled: boolean
    max_per_user_per_stream: number
  }
  
  export interface GlobalCooldown {
    is_enabled: boolean
    global_cooldown_seconds: number
  }
  
  export interface Reward {
    id: string
    channel_id: string
    title: string
    prompt: string
    cost: number
    is_user_input_required: boolean
    is_sub_only: boolean
    image: RewardImage | null
    default_image: RewardImage
    background_color: string
    is_enabled: boolean
    is_paused: boolean
    is_in_stock: boolean
    max_per_stream: MaxPerStream
    should_redemptions_skip_request_queue: boolean
    template_id: any
    updated_for_indicator_at: string
    max_per_user_per_stream: MaxPerUserPerStream
    global_cooldown: GlobalCooldown
    redemptions_redeemed_current_stream: any
    cooldown_expires_at: string
    user_input?: string
  }
  export interface Redemption {
    id: string
    user: User
    channel_id: string
    redeemed_at: string
    reward: Reward
    user_input: string
    status: string
    cursor: string
  }
  export interface VideoPlayBackMessage {
    type: string;
    server_time: number;
    viewers: number;
  }
  export interface ChatRichEmbed {
    message_id: string
    request_url: string
    author_name: string
    thumbnail_url: string
    title: string
    twitch_metadata: TwitchMetadata
  }
  export interface ResponseNotification {
    type: string
    error: string
    nonce: string
  }
  export interface Data {
    topic: string;
    message: string;
  } 
  export interface MetaResponse {
    type: string;
    data: Data;
  }
  export interface Static {
    "1": string
    "2": string
    "3": string
    "4": string
    "1.5": string
  }
  export interface Animated {
    "1": string
    "2": string
    "3": string
    "4": string
    "1.5": string
  }
  export interface Image {
    animated: Animated
    static: Static
  }
  export interface Images {
    dark: Image
    light: Image
  }
  export interface Tier {
    min_bits: number
    id: string
    color: string
    images: Images
    can_cheer: boolean
    show_in_bits_card: boolean
  }
  export interface Cheers {
    prefix: string
    tiers: Tier[]
    type: string
    order: number
    last_updated: string
    is_charitable: boolean
  }
  export interface TierConfig {
    id: string
    bits: number
    canShowInBitsCard: boolean
  }
  export interface Node {
    id: string
    prefix: string
    type: string
    campaign: any
    tiers: TierConfig[]
  }
  export interface Group {
    templateURL: string
    nodes: Node[]
  }
  export interface CheerGlobalConfig {
    // displayConfig: DisplayConfig
    groups: Group[]
  }
  export interface CheerChannelConfig {
    // displayConfig: DisplayConfig
    groups: Group[]
  }
  export interface StreamRefetchManagerResponse {
    user?: {
      id: string
      __typename: string
      stream: null | {
        id: string
        isEncrypted: boolean
        __typename: string
      }
    }
  }
  export interface BitsGlobalConfig {
    cheerConfig: CheerGlobalConfig
  }
  export interface Cheer {
    id: string
    cheerGroups: Group[]
    isEnabled: boolean
    isBitsEnabled: boolean
  }
  export interface Channel {
    id: string
    cheer: Cheer
  }
  export interface BitsChannelConfig {
    channel: Channel
  }
  export interface CheerEmotesResponse {
    data: Cheers[]
  }
  export interface CommentResponse extends BaseResponse {
		bits?: string
    price?: number
    unit?: string // ex. JPY
    paidText?: string
    colors?: Colors
    turbo?: string;
    flags?: string;
    mod?: string;
    subscriber?: "0" | "1";
    isModerator: boolean
    origin: string
    reward?: Twitch.Reward
    screenName: string
	}
}

