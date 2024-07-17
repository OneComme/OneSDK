/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse'
import { Colors } from './Comment'

export module BiliBili {
  export interface Contribution {
    grade: number
  }

  export interface User {
    ruid: number
    runame: string
    rface: string
    fans_club_count: number
    live_stream_status: number
    anchor_roomid: number
  }
  export interface UserResponse {
    code: number
    message: string
    ttl: number
    data: User
  }

  export interface CountMap {
    num: number
    text: string
    web_svga: string
    vertical_svga: string
    horizontal_svga: string
    special_color: string
    effect_id: number
  }

  export interface GiftResource {
    id: number
    name: string
    price: number
    type: number
    coin_type: string
    bag_gift: number
    effect: number
    corner_mark: string
    corner_background: string
    broadcast: number
    draw: number
    stay_time: number
    animation_frame_num: number
    desc: string
    rule: string
    rights: string
    privilege_required: number
    count_map: CountMap[]
    img_basic: string
    img_dynamic: string
    frame_animation: string
    gif: string
    webp: string
    full_sc_web: string
    full_sc_horizontal: string
    full_sc_vertical: string
    full_sc_horizontal_svga: string
    full_sc_vertical_svga: string
    bullet_head: string
    bullet_tail: string
    limit_interval: number
    bind_ruid: number
    bind_roomid: number
    gift_type: number
    combo_resources_id: number
    max_send_limit: number
    weight: number
    goods_id: number
    has_imaged_gift: number
    left_corner_text: string
    left_corner_background: string
    gift_banner?: any
    diy_count_map: number
    effect_id: number
  }

  export interface GuardResource {
    img: string
    icon: string
    level: number
    name: string
  }

  export interface ComboResource {
    color_one: string
    color_two: string
    combo_resources_id: number
    img_four: string
    img_one: string
    img_three: string
    img_two: string
  }

  export interface FansMedal {
    anchor_roomid: number
    guard_level: number
    icon_id: number
    is_lighted: number
    medal_color: number
    medal_color_border: number
    medal_color_end: number
    medal_color_start: number
    medal_level: number
    medal_name: string
    score: number
    special: string
    target_id: number
  }

  export interface InteractData {
    contribution: Contribution
    dmscore: number
    fans_medal: FansMedal
    identities: number[]
    is_spread: number
    msg_type: number
    roomid: number
    score: number
    spread_desc: string
    spread_info: string
    tail_icon: number
    timestamp: number
    trigger_time: number
    uid: number
    uname: string
    uname_color: string
  }
  export interface MedalInfo {
    anchor_roomid: number
    anchor_uname: string
    guard_level: number
    icon_id: number
    is_lighted: number
    medal_color: number
    medal_color_border: number
    medal_color_end: number
    medal_color_start: number
    medal_level: number
    medal_name: string
    special: string
    target_id: number
  }
  export interface DanmuAggregationData {
    activity_identity: string
    activity_source: number
    aggregation_cycle: number
    aggregation_icon: string
    aggregation_num: number
    dmscore: number
    msg: string
    show_rows: number
    show_time: number
    timestamp: number
  }
  export interface GiftData {
    action: string
    batch_combo_id: string
    batch_combo_send?: any
    beatId: string
    biz_source: string
    blind_gift?: any
    broadcast_id: number
    coin_type: string
    combo_resources_id: number
    combo_send?: any
    combo_stay_time: number
    combo_total_coin: number
    crit_prob: number
    demarcation: number
    discount_price: number
    dmscore: number
    draw: number
    effect: number
    effect_block: number
    face: string
    float_sc_resource_id: number
    giftId: number
    giftName: string
    giftType: number
    gold: number
    guard_level: number
    is_first: boolean
    is_special_batch: number
    magnification: number
    medal_info: MedalInfo
    name_color: string
    num: number
    original_gift_name: string
    price: number
    rcost: number
    remain: number
    rnd: string
    send_master?: any
    silver: number
    super: number
    super_batch_gift_num: number
    super_gift_num: number
    svga_block: number
    tag_image: string
    tid: string
    timestamp: number
    top_list?: any
    total_coin: number
    uid: number
    uname: string
  }
  export interface SuperChatGift {
    gift_id: number
    gift_name: string
    num: number
  }
  export interface UserInfo {
    face: string
    face_frame: string
    guard_level: number
    is_main_vip: number
    is_svip: number
    is_vip: number
    level_color: string
    manager: number
    name_color: string
    title: string
    uname: string
    user_level: number
  }
  export interface GuardBuyData {
    uid: number
    username: string
    guard_level: number
    num: number
    price: number
    gift_id: number
    gift_name: string
    start_time: number
    end_time: number
  }
  export interface SuperChatData {
    background_bottom_color: string
    background_color: string
    background_color_end: string
    background_color_start: string
    background_icon: string
    background_image: string
    background_price_color: string
    color_point: number
    dmscore: number
    end_time: number
    gift: SuperChatGift
    id: number
    is_ranked: number
    is_send_audit: number
    medal_info: MedalInfo
    message: string
    message_font_color: string
    message_trans: string
    price: number
    rate: number
    start_time: number
    time: number
    token: string
    trans_mark: number
    ts: number
    uid: number
    user_info: UserInfo
  }
  export type InfoData = [
    [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      string,
      number,
      number,
      number,
      string,
      number,
      (
        | {
            bulge_display: number
            emoticon_unique: string
            height: number
            in_player_area: number
            is_dynamic: number
            url: string
            width: number
          }
        | '{}'
      ),
      string,
      {
        mode: number
        show_player_type: number
        extra: string
      },
      { activity_identity: string; activity_source: number; not_show: number },
    ],
    string, // comment
    [number, string, number, number, number, number, number, string], // user data
    [number, string, string, number, number, string, number, number, number, number, number, number, number] | [],
    number[],
    string[],
    number,
    number,
    null, //??
    {
      ts: number
      ct: string
    },
    number,
    number,
    null, //?
    null, //?
    number,
    number,
  ]
  export interface GeneratedType {
    emoticon_id: number
    emoji: string
    descript: string
    url: string
    width: number
    height: number
    emoticon_unique: string
    count: number
  }
  export interface Emots {
    [key: string]: GeneratedType
  }
  export interface ExtraData {
    send_from_me: boolean
    mode: number
    color: number
    dm_type: number
    font_size: number
    player_mode: number
    show_player_type: number
    content: string
    user_hash: string
    emoticon_unique: string
    bulge_display: number
    recommend_score: number
    main_state_dm_color: string
    objective_state_dm_color: string
    direction: number
    pk_direction: number
    quartet_direction: number
    anniversary_crowd: number
    yeah_space_type: string
    yeah_space_url: string
    jump_to_url: string
    space_type: string
    space_url: string
    animation: Animation
    emots: Emots | null
    is_audited: boolean
    id_str: string
  }
  export type OperationType =
    | 'INTERACT_WORD'
    | 'STOP_LIVE_ROOM_LIST'
    | 'ONLINE_RANK_V2'
    | 'ONLINE_RANK_COUNT'
    | 'WATCHED_CHANGE'
    | 'DANMU_MSG'
    | 'DANMU_AGGREGATION'
    | 'ROOM_REAL_TIME_MESSAGE_UPDATE'
    | 'ONLINE_RANK_TOP3'
    | 'SUPER_CHAT_MESSAGE'
    | 'SUPER_CHAT_MESSAGE_JPN'
    | 'WIDGET_BANNER'
    | 'HOT_RANK_CHANGED_V2'
    | 'HOT_RANK_CHANGED'
    | 'LIVE_INTERACTIVE_GAME'
    | 'SEND_GIFT'
    | 'ENTRY_EFFECT'
    | 'COMBO_SEND'
    | 'PREPARING'
    | 'HOT_RANK_SETTLEMENT_V2'
    | 'NOTICE_MSG'
    | 'GUARD_BUY'
    | 'SUPER_CHAT_MESSAGE_DELETE'
  export type RootResponse =
    | {
        cmd: OperationType
        data?: GiftData | InteractData | WatchData | SuperChatData | GuardBuyData | DanmuAggregationData
        info?: InfoData
        roomid?: number
      }
    | number
  export interface Label {
    name: string
    level: number
  }
  export interface WatchData {
    num: number
    text_small: string
    text_large: string
  }
  export interface CommentResponse extends BaseResponse {
    gift?: GiftResource
    guard?: GuardResource
    infoData?: InfoData
    giftData?: GiftData
    giftId?: string
    price?: number
    isModerator: boolean
    isMember: boolean
    commentVisible?: boolean
    superChatData?: SuperChatData
    colors?: Colors
  }
  export interface CountStockData {
    amount: number
    comment: CommentResponse
  }
}
