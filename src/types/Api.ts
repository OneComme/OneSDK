import { RunResult } from 'better-sqlite3'
import { AnalysisResultData, CommentLogFile, SearchFilterProps, SearchProps } from './Analysis'
import { LoginStates } from './Auth'
import { BackupFile } from './Backup'
import { CommentNotification } from './BaseResponse'
import { Bookmark } from './Bookmark'
import { Comment, CommentData, CommentSenderOption, ExtendedComment, ListenerInfo, Reaction } from './Comment'
import { RecursivePartial } from './Common'
import { ActiveSurvey, Config, SpeechConfig } from './Config'
import { BouyomiChanVoiceListResponse, YNCNeoRegistoryData } from './Integrations'
import { NewsData } from './News'
import { OrderItem, OrderStats, UpdatableOrderItemProps } from './Order'
import { PluginList } from './Plugin'
import { ServerInfo } from './Server'
import { Service, ServiceError, ServiceMeta, ServiceType } from './Service'
import {
  MusicBox,
  MusicBoxParams,
  MusicData,
  MusicDataParams,
  MusicDataSearchResult,
  RequestItem,
  SetList,
  SetListAPIResponse,
  SetListArray,
} from './Setlist'
import { QuizResult, Survey, SurveyResult, SurveyResults } from './Survey'
import { TemplateData } from './Template'
import { UpdateCheckResult } from './Update'
import { UserNameData, UserStoreData } from './UserData'
import { GlobalConfig, WordPartyItem } from './WordParty'
import { TimestampData } from './Timestamp'

type UnregisterFunction = () => void
export type SendType =
  | 'connected'
  | 'comments'
  | 'clear'
  | 'deleted'
  | 'meta'
  | 'meta.clear'
  | 'config'
  | 'userDatas'
  | 'services'
  | 'notification'
  | 'pinned'
  | 'waitingList'
  | 'bookmarked'
  | 'setList'
  | 'reactions'
  | 'wp.update'
  | 'wp.exec'
  | 'setList.request'
  | 'yt.survey.start'
  | 'yt.survey.update'
  | 'yt.survey.finish'
export type SendSurveyType = 'connected' | 'result' | 'config' | 'reset' | 'result.quiz' | 'result.quiz.correct'

interface WordPartyErrorResponse {
  status: 'error'
  dir: string
  error: string
}
interface WordPartySuccessResponse {
  status: 'success'
  dir: string
  init: GlobalConfig
  setup: WordPartyItem[]
}
export type WordPartyResponse = WordPartySuccessResponse | WordPartyErrorResponse | null

export interface Api {
  platform: string
  receiveComments(
    callback: (comments: Comment[], listeners: ListenerInfo[], options: CommentSenderOption) => void
  ): UnregisterFunction
  receiveReactions(callback: (reactions: Reaction[]) => void): UnregisterFunction
  receiveDeleteComment(callback: (deleteComment: { id: string; message: string }[]) => void): UnregisterFunction
  receiveSpeech(callback: (text: string, config: SpeechConfig) => void): UnregisterFunction
  receiveStopSpeech(callback: () => void): UnregisterFunction
  receivePageError(callback: (error: ServiceError) => void): UnregisterFunction
  receiveConfigUpdate(callback: (config: Config) => void): UnregisterFunction
  receiveUpdateMeta(callback: (id: string, meta: ServiceMeta) => void): UnregisterFunction
  receiveClearMeta(callback: (id: string) => void): UnregisterFunction
  receiveLoadWordParty(callback: (data: WordPartyResponse) => void): UnregisterFunction
  receiveWatings(callback: (orders: OrderItem[], stats: OrderStats) => void): UnregisterFunction
  receiveClearComments(callback: () => void): UnregisterFunction
  receiveUpdateUserDatas(callback: (userData: UserStoreData) => void): UnregisterFunction
  receiveDeleteUserDatas(callback: (ids: string[]) => void): UnregisterFunction
  receiveSurveyResult(callback: (result: SurveyResult) => void): UnregisterFunction
  receiveBeepSound(callback: (file: string, volume: number) => void): UnregisterFunction
  receiveNotification(callback: (type: string, message: string) => void): UnregisterFunction
  receivePinned(callback: (comment: Comment | null) => void): UnregisterFunction
  receiveBookmark(callback: (bookmark: Bookmark) => void): UnregisterFunction
  receiveProgress(callback: (message: string) => void): UnregisterFunction
  receiveServices(callback: (services: Service[]) => void): UnregisterFunction
  receiveRequests(callback: (requests: RequestItem[]) => void): UnregisterFunction
  receiveCommentNotification(callback: (data: CommentNotification) => void): UnregisterFunction
  receiveSetList(callback: (data: SetList) => void): UnregisterFunction
  receiveStockComments(callback: (data: Comment[]) => void): UnregisterFunction
  receiveTimestamps(callback: (data: TimestampData) => void): UnregisterFunction
  getService(serviceId: string): Promise<Service | null>
  getServices(): Promise<Service[]>
  createService(): Promise<Service>
  updateService(service: Service): void
  removeService(service: Service): void
  clearComents(): void
  getConfig(): Promise<Config>
  updateConfig(config: RecursivePartial<Config>): Promise<Config>
  openUserDirectory(templateName?: string): void
  resetSettings(type: keyof Config): void
  getVersion(): Promise<string>
  isProMode(): Promise<{ proMode: boolean; type: string; key: string }>
  getTemplatePath(): Promise<string>
  showContextMenu(type: string, ...args: any[]): void
  checkUpdate(): Promise<UpdateCheckResult>
  downloadUpdate(): void
  openBrowserWindow(url: string): Promise<void>
  speechPreview(comment: string, username: string, config: SpeechConfig): void
  checkIntegration(name: string, ...args: any[]): Promise<any>
  sendTestComment(comment: CommentData, option: TestCommentOption): void
  openCommentTester(): void
  openListenersWindow(): void
  getUserDatas(): Promise<UserStoreData>
  getUserData(id: string): Promise<UserNameData>
  updateUserData(id: string, userData: Partial<UserNameData>): void
  getListeners(): Promise<ListenerInfo[]>
  getServerInfo(): Promise<ServerInfo>
  openTemplateWindow(): void
  translateComment(lang: string, comment: Comment): void
  openWordPartyWindow(dir: string): void
  openPluginManagerWindow(): void
  openOrderManagerWindow(): void
  openSetlistManagerWindow(): void
  getWaitingList(): Promise<OrderItem[]>
  getOrderStats(): Promise<OrderStats>
  completeWaitingList(ids: string[]): Promise<OrderItem[]>
  cancelWaitingList(ids: string[]): Promise<OrderItem[]>
  shuffleWaitingList(): Promise<OrderItem[]>
  swapWaitingList(from: number, to: number): Promise<OrderItem[]>
  prioritizeLowerCount(): Promise<OrderItem[]>
  prioritizeLowerTotalCount(): Promise<OrderItem[]>
  updateOrderItems(items: UpdatableOrderItemProps[]): Promise<OrderItem[]>
  completeTopOrder(): Promise<OrderItem[]>
  incrementPlayingOrder(): Promise<OrderItem[]>
  decrementPlayingOrder(): Promise<OrderItem[]>
  changePlayings(count: number): Promise<OrderItem[]>
  completePlayingOrders(): Promise<OrderItem[]>
  dragFileStart(filename: string): void
  dragStaticFile(pathname: string): void
  uploadTemplateResource(
    dir: string,
    files: {
      name: string
      type: string
      buffer: ArrayBuffer
    }[]
  ): Promise<string[]>
  deleteTemplateResource(dir: string, files: string[]): Promise<string[]>
  cloneTemplateResource(dir: string, files: string[]): Promise<string[]>
  saveWordPartyConfig(dir: string, config: GlobalConfig, items: WordPartyItem[]): Promise<void>
  getTemplateList(): Promise<TemplateData[]>
  dragStart(templateData: TemplateData): void
  minimizeWindow(): void
  maximizeWindow(): void
  closeWindow(): void
  deleteUserData(ids: string[]): void
  deleteComment(id: string): void
  getLocale(): Promise<string>
  loadWordParty(): void
  stopSpeech(): void
  getYNCVoiceList(): Promise<string[]>
  getYNCRegistry(): Promise<YNCNeoRegistoryData | null>
  openDirectorySelectDialog(): Promise<string[] | undefined>
  backupNow(): Promise<BackupFile>
  openFolder(path: string): void
  getBackupFiles(): Promise<BackupFile[]>
  restoreBackup(path: string): Promise<boolean>
  openSurveyManager(): void
  changeServiceOrder(from: number, to: number): void
  updateLicense(licenseKey: string): void
  rewriteOrderFile(): void
  updateSurveys(surveys: Survey[]): Promise<Survey[]>
  getSurveys(): Promise<Survey[]>
  deleteSurvey(surveyId: string): Promise<Survey | null>
  getSurveyResult(surveyId: string, questionId: string): Promise<SurveyResult>
  getSurveyResultAll(surveyId: string): Promise<SurveyResults>
  getQuizResult(surveyId: string): Promise<QuizResult>
  clearSurveyResult(surveyId: string, questionId: string): void
  joinSurveyAnswers(surveyId: string, questionId: string, from: string, to: string): Promise<SurveyResult>
  deleteSurveyAnswer(surveyId: string, questionId: string, label: string): Promise<SurveyResult>
  changeActiveSurvey(activeSurvey: ActiveSurvey | null): void
  changeResultVisible(visible: boolean): void
  sendSurveyResult(surveyId: string, questionId: string): void
  sendCorrectAnswer(surveyId: string, questionId: string): void
  resetResultView(): void
  sendQuizResult(surveyId: string): void
  openLogsDirectory(): void
  openPluginDirectory(): void
  openAppDirectory(): void
  openLink(url: string): void
  toggleSecretMode(): Promise<boolean>
  checkLoginStatus(platforms: ServiceType[]): Promise<LoginStates>
  getLoginStatus(): Promise<LoginStates>
  saveFavorites(names: string[]): Promise<string[]>
  getFavorites(): Promise<string[]>
  addWaitingList(comment: Comment): Promise<boolean>
  addBlock(comment: Comment): void
  pinComment(comment: Comment | null): void
  openChatWindow(serviceId: string): void
  getFontList(): Promise<string[]>
  openAnalysisWindow(): void
  openTimeStampTool(): void
  getCommentLogFiles(): Promise<CommentLogFile[]>
  execAnalyze(conditions: SearchProps[], filters: SearchFilterProps): Promise<AnalysisResultData>
  getMusicBoxList(): Promise<MusicBox[]>
  createMusicBox(params: MusicBoxParams): Promise<MusicBox>
  updateMusicBox(id: number, params: MusicBoxParams): Promise<MusicBox>
  deleteMusicBox(id: number): Promise<void>
  getAllMusicList(): Promise<MusicData[]>
  getMusicList(boxId: number): Promise<MusicData[]>
  rewriteSetListTemplate(): void
  searchMusic(name: string): Promise<MusicDataSearchResult[]>
  insertMusicList(boxId: number, params: MusicDataParams): Promise<RunResult>
  updateMusicList(id: number, params: MusicDataParams): Promise<void>
  deleteMusicList(ids: number[]): Promise<void>

  getSetLists(): Promise<SetListArray[]>
  getCurrentSetListId(): Promise<number>
  getSetList(id: number): Promise<SetList>
  insertSetList(name: string): Promise<SetList>
  updateSetList(id: number, name: string): Promise<void>
  deleteSetList(id: number): Promise<void>
  insertSetListItem(id: number, itemId: number): Promise<void>
  updateSetListItems(id: number, items: number[]): Promise<void>
  completeSetListItems(id: number, items: number[]): Promise<void>
  rewriteSetListTemplates(): void
  startSetList(id: number): void
  endSetList(): void
  changeBookmark(bookmark: Bookmark): void
  getBouyomiChanVoiceList(): Promise<BouyomiChanVoiceListResponse>
  getAPIToken(): Promise<string>
  generateAPIToken(): Promise<string>
  uploadTemplate(): Promise<{ status: 'succeeded' | 'error'; path?: string; message: string }>
  uploadTemplateFile(filepath: string): Promise<{ status: 'succeeded' | 'error'; path?: string; message: string }>
  getNews(): Promise<NewsData>
  showNews(): void
  getPlugins(): Promise<PluginList>
  activatePlugin(uid: string): Promise<PluginList>
  deactivatePlugin(uid: string): Promise<PluginList>
  reloladPlugins(): Promise<PluginList>
  deleteTemplate(templateId: string): Promise<boolean>
  createReport(): void
  clearAllCache(): Promise<void>
  changeThemeTemporarily(mode: 'light' | 'dark'): void
  getRequests(): Promise<RequestItem[]>
  deleteRequests(ids: number[]): Promise<RequestItem[]>
  openCommentStock(): void
  openGiftWindow(): void
  getTimestamps(): Promise<TimestampData>
  updateTimestamps(data: Partial<TimestampData>): Promise<TimestampData>
  stockComment(comment: Comment): Promise<void>
  unstockComments(ids: string[]): Promise<void>
  getAllStockComments(): Promise<Comment[]>
  clearAllStockComments(): Promise<void>
  getAllComments(): Promise<Comment[]>
}
export interface TestCommentOption {
  speech: boolean
  write: boolean
  newComment: boolean
  repeater: boolean
  subscribe: boolean
  serviceType: ServiceType
}
export interface ConnectedData {
  comments: ExtendedComment[]
  config: Config
  services: Service[]
  waitingList: OrderItem[]
  setList: SetListAPIResponse | NonNullable<object>
}
