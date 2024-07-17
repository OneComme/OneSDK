/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import { BaseResponse } from './BaseResponse'

export module Twitter {
  export interface EntryContent {
    item: {
      clientEventInfo: any
      content: {
        tweet: {
          displayType: string // "Tweet"
          id: string
          promotedMetadata?: {
            advertiserId: string
            impressionId: string
            disclosureType: string
            experimentValues: any
            promotedTrendId: string
            clickTrackingInfo: any
          }
        }
      }
    }
  }
  export interface Entry {
    entryId: string
    sortId: string
    content: EntryContent
  }
  export interface AddEntries {
    entries: Entry[]
  }
  export interface Instruction {
    addEntries?: AddEntries
    replaceEntry?: any[]
  }
  export interface Timeline {
    id: string
    instructions: Instruction[]
  }
  export interface Tweet {
    user_id_str: string
    source: string
    id_str: string
    full_text: string
    created_at: string
    entries: {
      hashtags: any[]
      media: {
        id_str: string
        media_url_https: string
        sizes: any
        type: string
        url: string
      }[]
    }
    extended_entities: any
  }
  export interface User {
    id_str: string
    created_at: string
    name: string // display name
    profile_image_url_https: string
    url: string
    screen_name: string // @id
    advertiser_account_type: string
  }
  export interface GlobalObject {
    tweets: { [key: string]: Tweet }
    users: { [key: string]: User }
  }
  export interface RootResponse {
    errors?: {
      code: number
      message: string
    }[]
    globalObjects?: GlobalObject
    timeline?: {
      id: string
      instructions: Instruction[]
    }
  }
  export interface CommentResponse extends BaseResponse {
    screenName: string
    link: string
    commentVisible?: boolean
  }
}
