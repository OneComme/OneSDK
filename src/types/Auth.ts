import { ServiceType } from './Service'

export type LoginResponse = {
  id: string
  username: string
  type: ServiceType
}

export type LoginStatus = {
  login: boolean
  supported: boolean
  value?: {
    id: string
    username: string
  }
}

export type LoginStates = {
  [key in ServiceType]?: LoginStatus
}
