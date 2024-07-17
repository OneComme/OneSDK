export interface TimelineItem {
  id: string
  s: number
  title: string
  username?: string
}
export interface TimestampData {
  serviceId: string | null
  talkScript: string
  startTime: string
  timeline: TimelineItem[]
}
