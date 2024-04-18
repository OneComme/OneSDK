import { FuseResult } from 'fuse.js'

export interface MusicBox {
  id: number
  name: string
}
export type MusicBoxParams = Pick<MusicBox, 'name'>

export interface MusicData {
  id: number
  box: number
  name: string
  link: string
  tags: string[]
  memo: string
}
export type MusicDataParams = Pick<MusicData, 'name' | 'link' | 'tags' | 'memo'>

export interface MusicDataSearchResultItem extends MusicData {
  box_name: string
  created_at: string
  updated_at: string
}
export type MusicDataSearchResult = FuseResult<MusicDataSearchResultItem>


export interface SetListArray {
  id: number
  name: string
  data: number[]
}

export interface SetListAPIResponse {
  id: number
  name: string
  items: MusicData[]
  completed: MusicData[] 
}
export interface RequestItem {
  id: number
  title: string
  username: string
  comment: string
  created_at: string
  updated_at: string
}
export interface SetList {
  id: number
  name: string
  items: MusicData[]
  completes: number[]
  created_at: string
  updated_at: string
}