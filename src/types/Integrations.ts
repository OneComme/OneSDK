export interface YNCNeoHttpResponse {
  lang: string
  text: string
  status: 'success' | 'failure'
}
export interface REG_DWORD_Value {
  value: number
  type: 'REG_DWORD'
}
export interface YNCNeoRegistoryData {
  [name: string]: REG_DWORD_Value
  WebSocket: REG_DWORD_Value
  HTTP: REG_DWORD_Value
}
export interface BouyomiChanVoiceListResponse {
  voiceList: BouyomiChanVoiceList[]
}

export interface BouyomiChanVoiceList {
  id: number
  kind: string
  name: string
  alias: string
}
