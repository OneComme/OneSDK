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

export interface VoicevoxSupportedFeatures {
  permitted_synthesis_morphing: string
}

export interface VoicevoxSpeakerStyle {
  name: string
  id: number
  type: string
}
export interface VoicevoxSpeaker {
  name: string
  speaker_uuid: string
  styles: VoicevoxSpeakerStyle[]
  version: string
  supported_features: VoicevoxSupportedFeatures
}

export interface VoicevoxAccentPhrase {
  moras: VoicevoxMora[]
  accent: number
  pause_mora: any
  is_interrogative: boolean
}

export interface VoicevoxMora {
  text: string
  consonant?: string
  consonant_length?: number
  vowel: string
  vowel_length: number
  pitch: number
}
export interface VoicevoxQuery {
  accent_phrases: VoicevoxAccentPhrase[]
  speedScale: number
  pitchScale: number
  intonationScale: number
  volumeScale: number
  prePhonemeLength: number
  postPhonemeLength: number
  pauseLength: any
  pauseLengthScale: number
  outputSamplingRate: number
  outputStereo: boolean
  kana: string
}
