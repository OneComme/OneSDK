import { ServiceType } from './Service'
export type PositionType = 'pixel' | 'percentage' 
export type RangeValue = [number, number]
export type PopperItemType = 'default' | 'emoji' | 'image'

export interface PopperItemConfig {
  type: PopperItemType
  amount: number
  size: number
  images: string[]
  emojis: string[]
  colors: string[]
  imageScale: number
  imageSize?: number
  autoPick?: boolean
  excludeAutoPick?: string[]
  autoPickLimit?: number
}
export type DropperTextureShape = 'circle' | 'rect'
export interface DropperTextureConfig {
  autoPick?: boolean
  excludeAutoPick?: string[]
  autoPickLimit?: number
  src?: string | string[]
  content?: string
  sprite?: {
    width: number
    height: number
    frame: number
  }
  shape?: DropperTextureShape
  size: number
  size2?: number
  xScale?: number
  yScale?: number
  imageSize?: number
  angle?: number
  density?: number
  frictionAir?: number
  restitution?: number
  friction?: number
  gravity?: number
  wind?: number
  forceX?: number
  forceY?: number
  through?: boolean
  randomly?: boolean
  useGravityPoint?: boolean
  gravityPoint?: [number, number]
}
export interface DropperItemConfig {
  texture: DropperTextureConfig
  lifeTime: number
  positionType?: PositionType
  x: RangeValue
  y: RangeValue
  magnification: number
}
export interface StaticObjectConfig {
  id: string
  shape: DropperTextureShape
  x: number
  y: number
  size: number
  size2?: number
  options: {
    angle: number
    density: number
    restitution: number
    friction: number
  }
}
export interface ResourceParam {
  weight: number
  sound: string
}
export interface ResourceParams {
  [key: string]: ResourceParam
}
export type TextBasePosition = 'topLeft' | 'top' | 'topRight'
  | 'left' | 'center' | 'right'
  | 'bottomLeft' | 'bottom' | 'bottomRight'
export interface NotifyItemConfig {
  lifeTime: number
  images: string[]
  resourceParams?: ResourceParams
  positionType?: PositionType
  x?: RangeValue
  y?: RangeValue
  originX?: number
  originY?: number
  width?: number
  height?: number
  only: boolean
  enter?: string
  enterDuration?: number
  displayed?: string
  displayedDuration?: number
  leave?: string
  leaveDuration?: number
  text?: string
  textPosition?: TextBasePosition
  css?: string
}
export interface PopperConfig {
  maxItems: number
}
export interface DropperConfig {
  maxItems: number
  debug: boolean
  statics: StaticObjectConfig[]
}
export interface NotifyConfig {
  maxItems: number
}
export interface ConfettiConfig {
  maxItems: number
}
export interface ThrowingConfig {
  maxItems: number
}
export interface ModulesConfig {
  popper: PopperConfig
  dropper: DropperConfig
  notifier: NotifyConfig
  confetti: ConfettiConfig
  throwing: ThrowingConfig
}
export interface VTSConfig {
  enabled: boolean
  debug: boolean
  port?: number
  faceSize: number
  x: number
  y: number
}
export interface GlobalConfig {
  apiPort: number
  multipleMatch: boolean
  modules: ModulesConfig
  excludeUser?: string
  watch?: boolean
  fileCheckInterval?: number
  vts?: VTSConfig
  version: string
}
export type ConfettiItemShape = 'square' | 'circle' | 'star' | 'image' | 'emoji'
export interface ConfettiItemConfig {
  particleCount: number
  scalar: number
  shapes: ConfettiItemShape[]
  spread: number
  startVelocity: number
  imageScale: number
  imageSize?: number
  images: string[]
  contents?: string[]
  positionType?: PositionType
  x: RangeValue
  y: RangeValue
  autoPick?: boolean
  excludeAutoPick?: string[]
  autoPickLimit?: number
}
export interface ThrowingItemConfig {
  images: string[]
  amount: number
  positionType?: PositionType
  x: RangeValue
  y: RangeValue
  spread: number // 投げたもののばらつき具合
  parabolic: number // 投げつけの放物具合
  scattering: number // 当たったあとのばらつき具合
  scaling: number    // 投げるモノの距離感
  perMeter: number   // 当たったあとの抵抗具合
  duration: number   // 投げつける時間
  penetration: boolean // 貫通
  imageScale: number
  imageSize?: number
  autoPick?: boolean
  excludeAutoPick?: string[]
  autoPickLimit?: number
  contents?: string[]
}
export type WordPartyItemOption = PopperItemConfig | DropperItemConfig | NotifyItemConfig | ConfettiItemConfig | ThrowingItemConfig
export type WordPartyEffect = 'popper' | 'dropper' | 'notifier' | 'confetti' | 'throwing'
export type Comparison = 'equal' | 'higher' | 'lower'
export interface GiftParams {
  unit: string
  price: number
  comparison: Comparison
}
export interface WordPartyItem {
  enabled: boolean
  id: string
  name?: string
  pattern: (RegExp | string)[]
  trigger: number
  effect: WordPartyEffect
  options: WordPartyItemOption
  matchCustomStamp?: boolean
  matchGift?: boolean
  matchReaction?: boolean
  matchChannelPoint?: boolean
  excludeReaction?: boolean
  giftParams?: GiftParams[]
  matchNew?: boolean
  excludeServices?: ServiceType[]
  debounce?: number
  sound?: string
  soundDelay?: number
  limitHitCount?: number | null
  totalCount?: number
  totalCountComparison?: Comparison
  count?: number
  countComparison?: Comparison
  liveCount?: number
  liveCountComparison?: Comparison
}