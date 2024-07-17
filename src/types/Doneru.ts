import { BaseResponse } from './BaseResponse'
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Doneru {
  /*
	Doneruさんがtestのメンバーになりました!
	*/
  export interface YouTubeMemberShip {
    level: string
    nickname: string
    test: boolean
    type: 'membership'
  }
  /*
	Doneruさんがチャンネル登録しました!
	*/
  export interface YouTubeSubscribe {
    nickname: string
    test: boolean
    type: 'youtubeSubscriber'
  }
  /*
	Doneruさんが¥500をどねしました!
	*/
  export interface YouTubeSuperChat {
    amount: number
    currency: string
    jpy: number
    message: string
    nickname: string
    test: boolean
    type: 'superchat'
  }
  /*
	Doneruさんが500ビッツで応援しました!
	*/
  export interface TwitchCheer {
    amount: number
    message: string
    nickname: string
    test: boolean
    type: 'bit'
  }
  /*
	Doneruさんが500人をホスティングしました!
	*/
  export interface TwitchHosting {
    amount: number
    nickname: string
    test: boolean
    type: 'hosting'
  }
  /*
	Doneruさんがティア1をサブスクしました!
こんにちは。これは通知テストです。
*/
  export interface TwitchSubscribe {
    amount: number
    message: string
    nickname: string
    plan: string // 1000 ティア1 2000 ティア2 3000 ティア3
    test: boolean
    type: 'twitchSubscriber'
  }
  /*
	Doneruさんがフォローしました!
	*/
  export interface TwitchFollow {
    nickname: string
    test: boolean
    type: 'follower'
  }
  /*
	Doneruさんが1ヶ月目500どねをサポートしました！
こんにちは。これは通知テストです。
*/
  export interface SupportDonation {
    amount: number
    message: string
    month: number
    nickname: string
    test: boolean
    tts: number
    type: 'support'
  }
  /*
	Doneruさんが500円をどねしました!
こんにちは。これは通知テストです。
	*/

  export interface Donation {
    amount: number
    assetID?: any
    message: string
    messageType: number
    nickname: string
    test: boolean
    type: 'donation'
  }
  export type RootResponse =
    | Donation
    | SupportDonation
    | TwitchFollow
    | TwitchSubscribe
    | TwitchHosting
    | TwitchCheer
    | YouTubeSuperChat
    | YouTubeSubscribe
    | YouTubeMemberShip
  export interface CommentResponse extends BaseResponse {
    price?: number
  }
}

export namespace DoneruConfig {
  export interface ImageSource {
    hash: string
    name: string
  }
  export interface SoundSource {
    name: string
    hash: string
  }
  export interface Message {
    enable: number
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    emote: number
  }
  export interface Tts {
    enable: number
    minAmount: number
    volume: number
    speed: number
    spamProtectedLevel: number
  }
  export interface Donation {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    minAmount: number
    textAnimation: string
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    messageTemplate: string
    imageSource: ImageSource
    soundSource: SoundSource
    soundVolume: number
    alertDuration: number
    message: Message
    tts: Tts
    customAlert: any[]
  }

  export interface ImageSource2 {
    name: string
    hash: string
  }

  export interface SoundSource2 {
    name: string
    hash: string
  }

  export interface Message2 {
    enable: number
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
  }

  export interface Tts2 {
    enable: number
    minAmount: number
    volume: number
  }

  export interface Bit {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource2
    soundSource: SoundSource2
    soundVolume: number
    alertDuration: number
    message: Message2
    tts: Tts2
    customAlert: any[]
  }

  export interface ImageSource3 {
    name: string
    hash: string
  }

  export interface SoundSource3 {
    name: string
    hash: string
  }

  export interface Follower {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource3
    soundSource: SoundSource3
    soundVolume: number
    alertDuration: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
  }

  export interface ImageSource4 {
    name: string
    hash: string
  }

  export interface SoundSource4 {
    name: string
    hash: string
  }

  export interface Hosting {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    minAmount: number
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource4
    soundSource: SoundSource4
    soundVolume: number
    alertDuration: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    customAlert: any[]
  }

  export interface ImageSource5 {
    name: string
    hash: string
  }

  export interface SoundSource5 {
    name: string
    hash: string
  }

  export interface Membership {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource5
    soundSource: SoundSource5
    soundVolume: number
    alertDuration: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    customAlert: any[]
  }

  export interface ImageSource6 {
    name: string
    hash: string
  }

  export interface SoundSource6 {
    name: string
    hash: string
  }

  export interface Message3 {
    enable: number
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
  }

  export interface Tts3 {
    enable: number
    minAmount: number
    volume: number
  }

  export interface Superchat {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource6
    soundSource: SoundSource6
    soundVolume: number
    alertDuration: number
    message: Message3
    tts: Tts3
    customAlert: any[]
  }

  export interface ImageSource7 {
    hash: string
    name: string
  }

  export interface SoundSource7 {
    name: string
    hash: string
  }

  export interface Message4 {
    enable: number
    minAmount: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    emote: number
  }

  export interface Tts4 {
    enable: number
    minAmount: number
    volume: number
    speed: number
    spamProtectedLevel: number
  }

  export interface Support {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    minAmount: number
    textAnimation: string
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    messageTemplate: string
    imageSource: ImageSource7
    soundSource: SoundSource7
    soundVolume: number
    alertDuration: number
    message: Message4
    tts: Tts4
    customAlert: any[]
  }

  export interface ImageSource8 {
    name: string
    hash: string
  }

  export interface SoundSource8 {
    name: string
    hash: string
  }

  export interface Message5 {
    enable: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
  }

  export interface Tts5 {
    enable: number
    volume: number
    spamProtectedLevel: number
  }

  export interface TwitchSubscriber {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource8
    soundSource: SoundSource8
    soundVolume: number
    alertDuration: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
    message: Message5
    tts: Tts5
    customAlert: any[]
  }

  export interface ImageSource9 {
    hash: string
    name: string
  }

  export interface SoundSource9 {
    name: string
    hash: string
  }

  export interface YoutubeSubscriber {
    enable: number
    layout: number
    startAnimation: string
    endAnimation: string
    messageTemplate: string
    textAnimation: string
    imageSource: ImageSource9
    soundSource: SoundSource9
    soundVolume: number
    alertDuration: number
    font: string
    fontSize: number
    fontWeight: number
    fontColor: string
    fontHighlightColor: string
  }

  export interface Setting {
    alertDelay: number
    alertOrder: string[]
    backgroundColor: string
    customCss: string
    donation: Donation
    bit: Bit
    follower: Follower
    hosting: Hosting
    loadOnReload: number
    membership: Membership
    superchat: Superchat
    support: Support
    twitchSubscriber: TwitchSubscriber
    youtubeSubscriber: YoutubeSubscriber
  }

  export interface Audio {
    enable: number
    volume: number
    minAmount: number
    amountPerSecond: number
    maxDuration: number
  }

  export interface Video {
    enable: number
    youtubeAllow: number
    twitchAllow: number
    volume: number
    method: number
    minAmount: number
    amountPerSecond: number
    maxDuration: number
    ttsLevel: number
    caption: number
  }
  export interface Image {
    enable: number
  }

  export interface Media {
    audio: Audio
    video: Video
    image: Image
  }

  export interface Config {
    setting: Setting
    assets: any[]
    arrange: any[]
    media: Media
  }
}
