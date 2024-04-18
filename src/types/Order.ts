import { ServiceType } from './Service';
import { UserNameData } from './UserData';
export interface OrderItem {
  id: string // userid
  commentId: string
  service: ServiceType
  serviceName: string
  username: string
  profileImage: string
  timestamp: string
  comment: string
  count: number
  completed: boolean
  playing: boolean
  anonymity: boolean
  userData?: UserNameData
  totalCount?: number
  lastCompletedAt?: string
}
export type UpdatableOrderItemProps = Partial<Pick<OrderItem, 'count' | 'playing'>> & { id: string }

export interface OrderHistory {
  id: string
  count: number
  created_at: string
  updated_at: string
}