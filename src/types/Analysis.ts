import { Comment } from './Comment'
import { ServiceList } from './Service'

export interface CommentLogFile {
  path: string
  name: string
  createdAt: number
  updatedAt: number
  date: string
}
export interface CommentUser {
  id: string
  name: string
  nickname?: string
  displayName: string
  count: number
  profileImage: string
  service: keyof ServiceList
  serviceName: string
  anonymity: boolean
}
export interface GiftUser {
  id: string
  name: string
  displayName: string
  nickname?: string
  profileImage: string
  service: keyof ServiceList
  serviceName: string
  comments: Comment[]
  anonymity: boolean
}
export interface TimeSection {
  timestamp: number
  name: string
  comment: 0,
  gift: 0,
}
export interface TimeSegment {
  filename: string
  dateStr: string
  startTime: number
  endTime: number
  step: number
  sections: TimeSection[]
}
export interface ResultServiceData {
  id: string
  name: string
}
export interface AnalysisResultData {
  createdAt: number
  total: number
  giftCount: number
  userCount: number
  startTime: number
  endTime: number
  segments: TimeSegment[]
  services: ResultServiceData[]
  limit: number
  limitOver: boolean
  ranking: {
    comment: CommentUser[]
  }
  comments: Comment[]
}
export interface SearchProps {
  year: number
  month: number
  date: number
  start: string
  end: string
}
export interface SearchFilterProps {
  service?: string
}