/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from "./BaseResponse";
import { Colors } from './Comment';

export module Twicas {
	export interface Author {
		id: string;
		name: string;
		screenName: string;
		profileImage: string;
		grade: number;
		m?: boolean;
		pgimage?: string;
	}
	export interface Item {
		name: string;
		image: string;
		detailImage: string;
		effectCommand: string;
		showsSenderInfo: boolean;
	}
	export interface Sender {
		id: string;
		name: string;
		screenName: string;
		profileImage: string;
		grade: number;
		// メンバー情報はなかった
	}
	export interface Comment {
		type: 'comment';
		id: number;
		message: string;
		createdAt: number;
		author: Author;
		isAnonymous: boolean
		numComments: number;
	}
	export interface Gift {
		id: string;
		type: 'gift';
		message: string;
		item: Item;
		sender: Sender;
		isAnonymous: boolean;
		isPaidGift: boolean;
		isForMovie: boolean;
		createdAt: number;
	}
	export interface Category {
		id: string;
		name: string;
	}
	export interface Viewers {
		current: number;
		total: number;
	}
	
	export interface Movie {
		id: number;
		title: string;
		telop?: string;
		category: Category;
		viewers: Viewers;
		pin_message: string;
	}
	export interface Visibility {
		type: string;
	}
	export interface LiveResponse {
		id: number;
		started_at: number;
		visibility: Visibility;
		collabo?: any;
		is_tool?: any;
		is_games?: any;
		is_vtuber?: any;
		is_corporate_broadcasting?: any;
		is_portrait?: any;
	}
	export interface MetaResponse {
		update_interval_sec: number;
		movie: Movie;
		isLive: boolean
	}
	export interface LiveMovie {
		id: number;
		is_on_live: boolean;
	}
	export interface LiveStatus {
		update_interval_sec: number;
		movie: LiveMovie;
	}
	export interface CallUpdate {
		id: string
		type: 'call_status_update',
		time: number
		status: string
	}
	export interface Payload {
		rshift_bits: number;
	}
	export interface CallParticipantUpdate {
		id: string;
		type: 'call_participant_update';
		hub_id: string;
		status: string;
		user_id: string;
		name: string;
		screen_name: string;
		thumbnail_url: string;
		premier_grade: number;
		avatar_url: string;
		time: number;
		entry_request_id: string;
		payload: Payload;
	}
	export interface TalkUpdate {
		id: string;
		type: 'call_talking_status_update';
		hub_id: string;
		status: string;
		user_id: string;
		time: number;
	}
	export interface Author2 {
		id: string;
		name: string;
		screenName: string;
		profileImage: string;
	}
	export interface PinMessage {
		id: string
		type: 'pin_message',
		message: string
		createdAt: number
		author: Author2
	}
	export type RootResponse = Comment | Gift | TalkUpdate | CallParticipantUpdate | CallUpdate | PinMessage
	export interface CommentResponse extends BaseResponse {
		item?: Item
		price?: number
		screenName: string
		isAnonymous: boolean
		isFreeGift?: boolean
		colors?: Colors
	}
}