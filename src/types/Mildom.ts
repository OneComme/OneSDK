/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse'
import { Colors } from './Comment'

export module Mildom {
  export interface SnsIds {
    [key: string]: string
  }

  export interface UserAlbum {
    id: string
    url: string
  }

  export interface HostRank {
    icon: string
    rank: string
  }
  export interface UserInfo {
    my_id: number
    user_id: number
    loginname: string
    status: number
    avatar: string
    intro: string
    anchor_intro: string
    anchor_live: number
    anchor_status: number
    pic: string
    fans: number
    exp: number
    level: number
    country: string
    finance_country: string
    user_cluster: string
    live_tags: string[]
    user_privilege?: any
    sns_ids: SnsIds
    show_birth: number
    birth_ts: number
    birthday: string
    under_age_flag: number
    following: number
    gift_revenue_history: number
    user_album: UserAlbum[]
    host_rank: HostRank
    multi_room_online: number
    avatar_border_info?: any
  }
  export interface NewFansGroupJoinInfo {
    has_join: number
  }
  export interface UserPendant {
    serial_id: number
    pendant_list?: any
  }
  export interface UserBody {
    user_info: UserInfo
    is_followed: number
    follow_status: number
    follow_list_visible: number
    fans_list_visible: number
    is_block: number
    user_pendant: UserPendant
    new_fans_group_join_info: NewFansGroupJoinInfo
  }
  export interface RouletteStatus {
    status: number
    task_progress: number
    task_target: number
    task_duration: number
    create_time_millis: number
    end_time_millis: number
  }
  export interface OfficialEmotion {
    id: number
    pic: string
    pic_type: string
  }

  export interface FansGroupEmotion {
    id: number
    pic: string
    pic_type: string
    level: number
    lock: number
    illegal: number
  }
  export type Emotion = OfficialEmotion | FansGroupEmotion

  export interface List {
    id: number
    pic: string
    pic_type: string
    lock: number
    display: number
    real_lock: number
  }
  export interface EmotionInventoryList {
    name: string
    expire_time: number
    display: number
    list: List[]
    desc: string
    weight: number
    real_lock: number
    config_c_time: number
  }
  export interface EmoteBody {
    official_emotions: OfficialEmotion[]
    fans_group_emotions: FansGroupEmotion[]
    emotion_inventory_list: EmotionInventoryList[]
    default_version: number
    emotion_inventory_version: number
  }
  export interface LiveBody {
    my_id: number
    user_id: number
    loginname: string
    status: number
    avatar: string
    intro: string
    sex: number
    sex_visible: number
    anchor_intro: string
    anchor_live: number
    pic: string
    viewers: number
    heat: number
    fans: number
    exp: number
    level: number
    country: string
    finance_country: string
    user_cluster: string
    user_privilege?: any
    sns_ids: SnsIds
    log_id: string
    device_model: string
    game_title: string
    game_type: string
    game_key: string
    live_intro: string
    screen_type: number
    live_type: number
    live_subtype: number
    StreamMode: string
    cluster: string
    recommend_tag: any
    ext: any
    lucky_draw_on_going: number
    recognize_label: any
    device_rotate_angle: number
    certifications: any[]
    show_rec_status: number
    sub_status: number
    anniversary_live: number
    multi_room_links?: any
    link_info?: any
    channel_key: string
    gift_revenue_history: number
    certification_logo: string
    certification_intro: string
    vote_on_going: number
    follow_status: number
    record_enable: number
    channel_lang: any[]
    playback_permission: number
    shield_send_gift: number
    hour_rank: any
    live_start_ms: number
    live_start_utc_time_str: string
    cmode_audio: string
    need_sub: number
    roulette_status: RouletteStatus
    avatar_border_info?: any
  }

  export interface LoginUserBody {
    my_id: number
    user_id: number
    loginname: string
    status: number
    avatar: string
    sex: number
    sex_visible: number
    level: number
    country: string
    finance_country: string
    user_cluster: string
    user_privilege?: any
    sns_ids: SnsIds
    following: number
    power_point: number
    available_account: number
    account: number
    account_total: number
    free_account: number
    paid_account: number
    avatar_border_info?: any
  }
  export interface UserResponse {
    code: number
    body: UserBody
    setting_version: number
    ts_ms: number
  }
  export interface LoginUserResponse {
    code: number
    body: LoginUserBody
    setting_version: number
    ts_ms: number
  }
  export interface EmoteResponse {
    code: number
    body: EmoteBody
    setting_version: number
    ts_ms: number
  }
  export interface LiveResponse {
    code: number
    body: LiveBody
    setting_version: number
    ts_ms: number
  }
  export interface Badge {
    level: number
    privilege_id: number
    privilege_name: string
    privilege_type: number
    fans_group_type: number
  }

  export interface GareaReturnObj {
    badges: Badge[]
    fans_group_type: number
    user_pendant?: any
  }
  export interface GiftMsg {
    cmd: 'onGift'
    area: number
    comboEffect: number
    count: number
    countSum: number
    gareaReturnObj: GareaReturnObj
    giftCoin: number
    giftCoinV2: number
    giftEffect: number
    giftId: number
    level: number
    msgId: string
    roomId: number
    toId: number
    toLevel: number
    toName: string
    toUserImg: string
    type: number
    userId: number
    userImg: string
    userName: string
    giftName: string
    giftImg: string
    category: number
    gift_play_type: number
    giftType: number
    like_count: number
    is_like: boolean
    price: number
    experience: number
    order: number
    block: boolean
    key: string
    recieveTime: number
  }
  export interface Msg {
    cmd: 'onChat'
    area: number
    fansBgPic?: any
    fansGroupType: number
    fansLevel?: any
    fansName?: any
    gareaReturnObj: GareaReturnObj
    isFirstTopup: number
    level: number
    medals?: any
    msg: string
    msgId: string
    reqId: number
    roomAdmin: number
    roomId: number
    time: string
    toId: number
    toName: string
    type: number
    userId: number
    userImg: string
    userName: string
    order: number
    block: boolean
    key: string
    recieveTime: number
  }
  export interface AddMsg {
    cmd: 'onAdd'
    area: number
    gareaReturnObj: GareaReturnObj
    level: number
    loveCountSum: number
    reqId: number
    roomId: number
    rst: number
    type: number
    userCount: number
    userId: number
    userImg: string
    userName: string
    order: number
    block: boolean
    key: string
    recieveTime: number
    foldType: string
  }
  export interface User {
    name: string
    level: number
    userId: number
  }
  export interface FoldMsg {
    cmd: 'on_fold_msg'
    area: number
    fansBgPic: string
    fansGroupType: number
    fansLevel?: any
    fansName: string
    gareaReturnObj: GareaReturnObj
    isFirstTopup: number
    level: number
    medals?: any
    msg: string
    msgId: string
    reqId: number
    roomAdmin: number
    roomId: number
    time: string
    toId: number
    toName: string
    type: number
    userId: number
    userImg: string
    userName: string
    order: number
    block: boolean
    key: string
    recieveTime: number
    foldType: string
    users: User[]
    isLastMsg: boolean
  }
  export interface BroadcastMsg {
    cmd: 'onBroadcast'
    // コメントとして取らない
  }
  export interface FollowRunBody {
    fans_group_type: number
    host_id: number
    room_id: number
    user_id: number
    user_level: number
    user_name: string
  }
  export interface NotifyMsg {
    cmd: 'runCmdNotify'
    runBody: FollowRunBody
    runCmd: 'on_host_followed' | string
    type: number
    order: number
    block: boolean
    key: string
    recieveTime: number
  }
  export type MsgProps = Msg | GiftMsg | AddMsg | FoldMsg | BroadcastMsg | NotifyMsg
  export interface DomProps {
    msgIndex: number
    roomId: number
    msg: MsgProps
    block: boolean
    // emotion: Emotion;
    // anchorInfo: AnchorInfo;
    // layout: string;
    // firstChargeGiftCash: FirstChargeGiftCash;
  }
  export interface RootResponse {
    element: string
    userData: UserBody
  }
  export interface CommentResponse extends BaseResponse {
    origin: MsgProps
    price?: number
    isModerator: boolean
    isAnonymous: boolean
    isSystem: boolean
    isFold?: boolean
    users?: Mildom.User[]
    cmd: string
    combined?: boolean
    colors?: Colors
  }
}
