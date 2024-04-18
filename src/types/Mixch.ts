/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from "./BaseResponse";

export module Mixch {
	export interface Level {
		level: number;
		level_exp: number;
		level_goal: number;
	}
	export interface User {
		id: number;
		name: string;
		profile_image_url: string;
		profile_image_normal_url: string;
		bio: string;
		wallpaper_image_url: string;
		is_follow: number;
		is_fan: number;
		is_blocking: number;
		is_fanclub: number;
		level: Level;
	}
	export interface SpecialUser {
		id: number;
		name: string;
		profile_image_url: string;
		anonymous: number;
	}
	export interface Adbonus {
		adbonus_id: number;
		start: number;
		end: number;
		total_coin: number;
		meter_on_icon_url: string;
		meter_off_icon_url: string;
		help_page_url: string;
	}	
	export interface Box {
		kind: 53;
    user_id: number;
    name: string;
    created: number;
    message_id: string;
    profile_image_url: string;
    anonymous: number;
    item_id: number;
    resource_id: number;
    live_session_id: number;
    item_purchase_id: number;
    display: number;
    count: number;
    special_users: SpecialUser[];
    item_set_count: number;
    level: number;
    level_exp: number;
    level_goal: number;
    adbonus: Adbonus;
		superfan_rank?: number
	}
	export interface SuperChat {
		kind: 42;
    user_id: number;
    name: string;
    created: number;
    message_id: string;
    body: string;
    profile_image_url: string;
    anonymous: number;
    item_id: number;
    resource_id: number;
    live_session_id: number;
    item_purchase_id: number;
    display: number;
    count: number;
    special_users: SpecialUser[];
    level: number;
    level_exp: number;
    level_goal: number;
		superfan_rank?: number
	}
	export interface Cheer3 {
		kind: 45;
    user_id: number;
    name: string;
    created: number;
    message_id: string;
    profile_image_url: string;
    anonymous: number;
    item_id: number;
    resource_id: number;
    live_session_id: number;
    item_purchase_id: number;
    display: number;
    count: number;
    special_users: SpecialUser[];
    level: number;
    level_exp: number;
    level_goal: number;
		superfan_rank?: number
	}
	export interface Cheer2 { // 画面に出ない系ギフト
		kind: 46
    user_id: number;
    name: string;
    created: number;
    message_id: string;
    profile_image_url: string;
    anonymous: number;
    item_id: number;
    resource_id: number;
    live_session_id: number;
    item_purchase_id: number;
    expire: number;
    count: number;
		is_manager?: number; // 管理者かモデレーター的なやつ？
		superfan_rank?: number
	}
	export interface Cheer {
		kind: 48;
    user_id: number;
    name: string;
    created: number;
    message_id: string;
    profile_image_url: string;
    anonymous: number;
    item_id: number;
    resource_id: number;
    live_session_id: number;
    item_purchase_id: number;
    count: number;
    special_users: SpecialUser[];
    level: number;
    level_exp: number;
    level_goal: number;
    display: number; // 画面に出るでないフラグ 1だと出る
		is_manager?: number; // 管理者かモデレーター的なやつ？
		superfan_rank?: number
	}
	export interface Enter2 {
		kind: 61
		body: string
		created: number
		level: number
		message_id: ""
		name: string
		user_id: number
		superfan_rank?: number
	}
	
	export interface Enter {
		kind: 60
		body: string
		created: number
		level: number
		message_id: ""
		name: string
		user_id: number
		superfan_rank?: number
	}
	
	export interface NewFan {
		kind: 62
		body: string
		created: number
		level: number
		message_id: ""
		name: string
		user_id: number
		superfan_rank?: number
	}
	export interface Share {
		kind: 50
		body: string
		message_id: ""
		name: ""
		user_id: 0
		superfan_rank?: number
	}
	export interface NormalComment {
		kind: 0
		body: string
		created: number
		level: number
		message_id: string
		name: string
		user_id: number
		superfan_rank?: number
	}
	export interface BroadcastInfo {
		kind: 10
		elapsed: number;
		message: number;
		viewer: number;
		visitor: number;
		fans?: number;
		point?: number;
		music?: string;
		title?: string;
		queue: number;
		orientation: number;
		live_session_id?: number;
		event_point?: number;
		event_rank?: number;
		box_resource_id?: number;
		box_level?: number;
		last_item_updated: number;
		level?: number;
		level_exp?: number;
		level_goal?: number;
		adbonus_queue: number;
		display_point: number;
	}
	export interface SuperFanInfo {
		kind: 64
		user_id: number
		name: string
		level: number
		created: number
		message_id: string
		superfan_rank: number
	}
	export interface GiftResource {
		android_version: number;
    icon_active: string;
    icon_inactive: string;
    ios_version: string;
    type: number;
	}
	export interface Item {
		id: number;
    price: number;
    level: number;
    kind: number;
    score: number;
    resource_id: number;
    tab_id: number;
    unlocked_level: number;
	}
	export type RootResponse = BroadcastInfo
    | NormalComment
		| NewFan
		| Share
		| Enter
		| Enter2
		| Cheer
		| Cheer2
		| Cheer3
		| SuperChat
		| Box
		| SuperFanInfo
		
	export interface CommentResponse extends BaseResponse {
		user?: User | null
		gift?: GiftResource
		giftData?: any
		price?: number
		origin: RootResponse
	}
}

