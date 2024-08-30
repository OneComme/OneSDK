import { BaseResponse } from './BaseResponse'
import { Colors } from './Comment'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace YouTube {
  export interface Param {
    key: string
    value: string
  }

  export interface ServiceTrackingParam {
    service: string
    params: Param[]
  }

  export interface MainAppWebResponseContext {
    loggedOut: boolean
  }

  export interface WebResponseContextExtensionData {
    hasDecorated: boolean
  }

  export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[]
    mainAppWebResponseContext: MainAppWebResponseContext
    webResponseContextExtensionData: WebResponseContextExtensionData
  }

  export interface TimedContinuationData {
    timeoutMs: number
    continuation: string
    clickTrackingParams: string
  }
  export interface InvalidationContinuationData {
    continuation: string
    timeoutMs: number
  }
  export interface ReloadContinuationData {
    continuation: string
  }
  export interface Continuation {
    invalidationContinuationData?: InvalidationContinuationData
    reloadContinuationData?: ReloadContinuationData
    timedContinuationData?: TimedContinuationData
  }

  export interface Image {
    thumbnails: Thumbnail[]
    accessibility: Accessibility
  }

  export interface Emoji {
    emojiId: string
    shortcuts: string[]
    searchTerms: string[]
    image: Image
    isCustomEmoji: boolean
  }

  export interface Run {
    text: string
    emoji: Emoji
  }

  export interface Message {
    runs?: Run[]
    simpleText?: string
  }

  export interface AuthorName {
    simpleText: string
  }

  export interface Thumbnail {
    url: string
    width: number
    height: number
  }

  export interface AuthorPhoto {
    thumbnails: Thumbnail[]
  }

  export interface WebCommandMetadata {
    ignoreNavigation: boolean
  }

  export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata
  }

  export interface LiveChatItemContextMenuEndpoint {
    params: string
  }

  export interface ContextMenuEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata
    liveChatItemContextMenuEndpoint: LiveChatItemContextMenuEndpoint
  }

  export interface AccessibilityData {
    label: string
  }

  export interface ContextMenuAccessibility {
    accessibilityData: AccessibilityData
  }

  export interface Thumbnail2 {
    url: string
    width: number
    height: number
  }

  export interface CustomThumbnail {
    thumbnails: Thumbnail2[]
  }

  export interface AccessibilityData2 {
    label: string
  }

  export interface Accessibility {
    accessibilityData: AccessibilityData2
  }

  export interface Icon {
    iconType: string
  }

  export interface LiveChatAuthorBadgeRenderer {
    customThumbnail?: CustomThumbnail
    tooltip: string
    accessibility: Accessibility
    icon?: Icon
  }

  export interface AuthorBadge {
    liveChatAuthorBadgeRenderer: LiveChatAuthorBadgeRenderer
  }

  export interface LiveChatTextMessageRenderer {
    message?: Message
    authorName: AuthorName
    authorPhoto: AuthorPhoto
    contextMenuEndpoint: ContextMenuEndpoint
    id: string
    timestampUsec: string
    authorExternalChannelId: string
    contextMenuAccessibility: ContextMenuAccessibility
    authorBadges: AuthorBadge[]
  }

  export interface AuthorName2 {
    simpleText: string
  }

  export interface Thumbnail3 {
    url: string
    width: number
    height: number
  }

  export interface AuthorPhoto2 {
    thumbnails: Thumbnail3[]
  }

  export interface PurchaseAmountText {
    simpleText: string
  }

  export interface Run2 {
    text: string
    emoji: Emoji
  }

  export interface Message2 {
    runs?: Run2[]
  }

  export interface WebCommandMetadata2 {
    ignoreNavigation: boolean
  }

  export interface CommandMetadata2 {
    webCommandMetadata: WebCommandMetadata2
  }

  export interface LiveChatItemContextMenuEndpoint2 {
    params: string
  }

  export interface ContextMenuEndpoint2 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata2
    liveChatItemContextMenuEndpoint: LiveChatItemContextMenuEndpoint2
  }

  export interface AccessibilityData3 {
    label: string
  }

  export interface ContextMenuAccessibility2 {
    accessibilityData: AccessibilityData3
  }
  export interface TimestampText {
    simpleText: string
  }
  export interface Sticker {
    thumbnails: Thumbnail2[]
    accessibility: Accessibility
  }
  export interface LiveChatPaidStickerRenderer {
    id: string
    contextMenuEndpoint: ContextMenuEndpoint
    contextMenuAccessibility: ContextMenuAccessibility
    timestampUsec: string
    authorPhoto: AuthorPhoto
    authorName: AuthorName
    authorExternalChannelId: string
    timestampText: TimestampText
    sticker: Sticker
    moneyChipBackgroundColor: number
    moneyChipTextColor: number
    purchaseAmountText: PurchaseAmountText
    stickerDisplayWidth: number
    stickerDisplayHeight: number
    backgroundColor: number
    authorNameTextColor: number
    authorBadges: AuthorBadge[]
  }

  export interface LiveChatPaidMessageRenderer {
    id: string
    timestampUsec: string
    authorName: AuthorName2
    authorPhoto: AuthorPhoto2
    purchaseAmountText: PurchaseAmountText
    message: Message2
    headerBackgroundColor: number
    headerTextColor: number
    bodyBackgroundColor: number
    bodyTextColor: number
    authorExternalChannelId: string
    authorNameTextColor: number
    contextMenuEndpoint: ContextMenuEndpoint2
    timestampColor: number
    contextMenuAccessibility: ContextMenuAccessibility2
    trackingParams: string
    authorBadges: AuthorBadge[]
  }
  export interface SponsorPhoto {
    thumbnails: Thumbnail[]
  }
  export interface DetailText {
    runs: Run[]
  }
  export interface LiveChatTickerSponsorItemRenderer {
    id: string
    detailText: DetailText
    detailTextColor: number
    startBackgroundColor: number
    endBackgroundColor: number
    sponsorPhoto: SponsorPhoto
    durationSec: number
    showItemEndpoint: ShowItemEndpoint
    authorExternalChannelId: string
    fullDurationSec: number
    trackingParams: string
  }

  export interface liveChatPlaceholderItemRenderer {
    id: string
    timestampUsec: string
  }

  export interface PrimaryText {
    runs: Run[]
  }

  export interface LiveChatSponsorshipsHeaderRenderer {
    authorName: AuthorName
    authorPhoto: AuthorPhoto
    primaryText: PrimaryText
    authorBadges: AuthorBadge[]
    contextMenuEndpoint: ContextMenuEndpoint
    contextMenuAccessibility: ContextMenuAccessibility
    image: Image
  }
  export interface LiveChatBannerHeaderRenderer {
    icon: Icon
    text: Text
  }
  export interface ContextMenuButton {
    buttonRenderer: ButtonRenderer
  }
  export interface MetadataText {
    runs: Run[]
  }
  export interface PollQuestion {
    runs: Run[]
  }
  export interface PollHeaderRenderer {
    pollQuestion: PollQuestion
    thumbnail: {
      thumbnails: Thumbnail[]
    }
    metadataText: MetadataText
    liveChatPollType: string
    contextMenuButton: ContextMenuButton
  }
  export interface Header {
    liveChatSponsorshipsHeaderRenderer?: LiveChatSponsorshipsHeaderRenderer
    liveChatBannerHeaderRenderer?: LiveChatBannerHeaderRenderer
    pollHeaderRenderer?: PollHeaderRenderer
  }

  export interface LiveChatSponsorshipsGiftPurchaseAnnouncementRenderer {
    id: string
    timestampUsec: string
    authorExternalChannelId: string
    header: Header
  }
  export interface UrlEndpoint {
    url: string
    target: string
  }
  export interface NavigationEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata
    urlEndpoint: UrlEndpoint
  }
  export interface ButtonRenderer {
    style: string
    size: string
    isDisabled: boolean
    text: Text
    navigationEndpoint: NavigationEndpoint
    trackingParams: string
    accessibilityData: AccessibilityData
  }
  export interface ActionButton {
    buttonRenderer: ButtonRenderer
  }
  export interface LiveChatViewerEngagementMessageRenderer {
    id: string
    icon: Icon
    message: Message
    timestampUsec?: string
    actionButton?: ActionButton
    trackingParams?: string
  }
  export interface AutoModeratedItem {
    liveChatTextMessageRenderer: LiveChatTextMessageRenderer
  }
  export interface HeaderText {
    runs: Run[]
  }
  export interface LiveChatAutoModMessageRenderer {
    id: string
    timestampUsec: string
    autoModeratedItem: AutoModeratedItem
    headerText: HeaderText
    infoDialogButton: any // 略
    moderationButtons: any[] // 略
    authorExternalChannelId: string
    inlineActionButtons: any[] // 略
    additionalInlineActionButtons: any // 略
  }
  export interface LiveChatSponsorshipsGiftRedemptionAnnouncementRenderer {
    id: string
    timestampUsec: string
    timestampText: TimestampText
    authorExternalChannelId: string
    authorName: AuthorName
    authorPhoto: AuthorPhoto
    message: Message
    contextMenuEndpoint: ContextMenuEndpoint
    contextMenuAccessibility: ContextMenuAccessibility
    trackingParams: string
  }
  export interface Subtext {
    runs: Run[]
  }
  export interface LiveChatModeChangeMessageRenderer {
    id: string
    timestampUsec: string
    icon: Icon
    text: Text
    subtext: Subtext
  }

  export interface addBannerToLiveChatCommand {
    bannerRenderer: BannerRenderer
  }
  export interface PollToUpdate {
    pollRenderer: PollRenderer
  }
  export interface UpdateLiveChatPollAction {
    pollToUpdate: PollToUpdate
  }

  export type ChatRendererType = LiveChatTextMessageRenderer | LiveChatPaidMessageRenderer | LiveChatPaidStickerRenderer
  export interface Item {
    liveChatTextMessageRenderer?: LiveChatTextMessageRenderer
    liveChatPaidMessageRenderer?: LiveChatPaidMessageRenderer
    liveChatPaidStickerRenderer?: LiveChatPaidStickerRenderer
    liveChatMembershipItemRenderer?: LiveChatMembershipItemRenderer
    liveChatPlaceholderItemRenderer?: liveChatPlaceholderItemRenderer
    liveChatSponsorshipsGiftPurchaseAnnouncementRenderer?: LiveChatSponsorshipsGiftPurchaseAnnouncementRenderer
    liveChatViewerEngagementMessageRenderer?: LiveChatViewerEngagementMessageRenderer
    liveChatAutoModMessageRenderer: LiveChatAutoModMessageRenderer
    liveChatSponsorshipsGiftRedemptionAnnouncementRenderer: LiveChatSponsorshipsGiftRedemptionAnnouncementRenderer
    liveChatModeChangeMessageRenderer: LiveChatModeChangeMessageRenderer
  }

  export interface AddChatItemAction {
    item: Item
    clientId: string
  }

  export interface Amount {
    simpleText: string
  }

  export interface Thumbnail4 {
    url: string
    width: number
    height: number
  }

  export interface AccessibilityData4 {
    label: string
  }

  export interface Accessibility2 {
    accessibilityData: AccessibilityData4
  }

  export interface AuthorPhoto3 {
    thumbnails: Thumbnail4[]
    accessibility: Accessibility2
  }

  export interface WebCommandMetadata3 {
    ignoreNavigation: boolean
  }

  export interface CommandMetadata3 {
    webCommandMetadata: WebCommandMetadata3
  }

  export interface AuthorName3 {
    simpleText: string
  }

  export interface Thumbnail5 {
    url: string
    width: number
    height: number
  }

  export interface AuthorPhoto4 {
    thumbnails: Thumbnail5[]
  }

  export interface PurchaseAmountText2 {
    simpleText: string
  }

  export interface Run3 {
    text: string
  }

  export interface Message3 {
    runs: Run3[]
  }

  export interface WebCommandMetadata4 {
    ignoreNavigation: boolean
  }

  export interface CommandMetadata4 {
    webCommandMetadata: WebCommandMetadata4
  }

  export interface LiveChatItemContextMenuEndpoint3 {
    params: string
  }

  export interface ContextMenuEndpoint3 {
    clickTrackingParams: string
    commandMetadata: CommandMetadata4
    liveChatItemContextMenuEndpoint: LiveChatItemContextMenuEndpoint3
  }

  export interface AccessibilityData5 {
    label: string
  }

  export interface ContextMenuAccessibility3 {
    accessibilityData: AccessibilityData5
  }

  export interface LiveChatPaidMessageRenderer2 {
    id: string
    timestampUsec: string
    authorName: AuthorName3
    authorPhoto: AuthorPhoto4
    purchaseAmountText: PurchaseAmountText2
    message: Message3
    headerBackgroundColor: number
    headerTextColor: number
    bodyBackgroundColor: number
    bodyTextColor: number
    authorExternalChannelId: string
    authorNameTextColor: number
    contextMenuEndpoint: ContextMenuEndpoint3
    timestampColor: number
    contextMenuAccessibility: ContextMenuAccessibility3
    trackingParams: string
  }

  export interface LiveChatMembershipItemRenderer {
    id: string
    timestampUsec: string
    timestampText: TimestampText
    authorExternalChannelId: string
    headerPrimaryText?: Message
    headerSubtext?: Message
    message?: Message
    authorName: AuthorName
    authorPhoto: AuthorPhoto
    authorBadges: AuthorBadge[]
    contextMenuEndpoint: ContextMenuEndpoint2
    contextMenuAccessibility: ContextMenuAccessibility2
    trackingParams: string
  }

  export interface Renderer {
    liveChatPaidMessageRenderer?: LiveChatPaidMessageRenderer2
    liveChatMembershipItemRenderer?: LiveChatMembershipItemRenderer
  }

  export interface ShowLiveChatItemEndpoint {
    renderer: Renderer
    trackingParams: string
  }

  export interface ShowItemEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata3
    showLiveChatItemEndpoint: ShowLiveChatItemEndpoint
  }

  export interface LiveChatTickerPaidMessageItemRenderer {
    id: string
    amount: Amount
    amountTextColor: number
    startBackgroundColor: number
    endBackgroundColor: number
    authorPhoto: AuthorPhoto3
    durationSec: number
    showItemEndpoint: ShowItemEndpoint
    authorExternalChannelId: string
    fullDurationSec: number
    trackingParams: string
  }

  export interface Item2 {
    liveChatTickerPaidMessageItemRenderer?: LiveChatTickerPaidMessageItemRenderer
    liveChatTickerSponsorItemRenderer?: LiveChatTickerSponsorItemRenderer
  }

  export interface AddLiveChatTickerItemAction {
    item: Item2
    durationSec: string
  }
  export interface MarkChatItemAsDeletedAction {
    deletedStateMessage: Message
    targetItemId: string
  }
  export interface MarkChatItemsByAuthorAsDeletedAction {
    deletedStateMessage: Message
    externalChannelId: string
  }
  export interface ViewCount2 {
    simpleText: string
  }
  export interface ExtraShortViewCount {
    accessibility: Accessibility
    simpleText: string
  }
  export interface VideoViewCountRenderer {
    viewCount: ViewCount2
    isLive: boolean
    extraShortViewCount: ExtraShortViewCount
  }
  export interface VideoViewerShipRenderer {
    isLive: boolean
  }
  export interface ViewCount {
    videoViewCountRenderer: VideoViewCountRenderer
  }
  export interface ViewerShip {
    videoViewCountRenderer: VideoViewerShipRenderer
  }
  export interface UpdateViewershipAction {
    viewCount?: ViewCount
    viewership?: ViewerShip
  }
  export interface Title {
    runs: Run[]
  }
  export interface UpdateTitleAction {
    title: Title
  }
  export interface UpdateDescriptionAction {
    // todo
  }
  export interface DefaultText {
    simpleText: string
  }
  export interface ToggledText {
    simpleText: string
  }
  export interface UpdateToggleButtonTextAction {
    defaultText: DefaultText
    toggledText: ToggledText
    buttonId: string
  }
  export interface RemoveChatItemAction {
    targetItemId: string
  }
  export interface RemoveChatItemByAuthorAction {
    externalChannelId: string
  }
  export interface SetEntityCommand {
    identifier: string
    entity: string
  }
  export interface QuestionText {
    runs: Run[]
  }
  export interface QuestionLabelText {
    simpleText: string
  }
  export interface LiveChatCreatorAnswersQuestionsRenderer {
    icon: Icon
    questionLabelText: QuestionLabelText
    questionText: QuestionText
    // overflowMenuButton: OverflowMenuButton;
    // askQuestionButton: AskQuestionButton;
    collapsedStateEntityKey: string
  }
  export interface CreatorAvatar {
    thumbnails: Thumbnail[]
  }
  export interface CreatorAuthorName {
    simpleText: string
  }
  export interface QuestionMessage {
    runs: Run3[]
  }
  export interface LiveChatCallForQuestionsRenderer {
    creatorAvatar: CreatorAvatar
    // featureLabel: FeatureLabel
    // contentSeparator: ContentSeparator
    // overflowMenuButton: OverflowMenuButton
    // askQuestionButton: AskQuestionButton
    creatorAuthorName: CreatorAuthorName
    questionMessage: QuestionMessage
  }
  export interface SendLiveChatVoteEndpoint {
    params: string
  }
  export interface SelectServiceEndpoint {
    clickTrackingParams: string
    commandMetadata: CommandMetadata
    sendLiveChatVoteEndpoint: SendLiveChatVoteEndpoint
  }
  export interface VotePercentage {
    simpleText: string
  }
  export interface Choice {
    text: Text
    selected: boolean
    voteRatio: number
    votePercentage: VotePercentage
    selectServiceEndpoint: SelectServiceEndpoint
  }
  export interface PollRenderer {
    choices: Choice[]
    trackingParams: string
    liveChatPollId: string
    header: Header
    displayVoteResults: boolean
    button: any
  }
  export interface Contents {
    liveChatCreatorAnswersQuestionsRenderer: LiveChatCreatorAnswersQuestionsRenderer
    liveChatCallForQuestionsRenderer: LiveChatCallForQuestionsRenderer
    pollRenderer: PollRenderer
  }
  export interface ElementsCommand {
    setEntityCommand: SetEntityCommand
  }
  export interface OnCollapseCommand {
    clickTrackingParams: string
    elementsCommand: ElementsCommand
  }
  export interface OnExpandCommand {
    clickTrackingParams: string
    elementsCommand: ElementsCommand
  }
  export interface LiveChatBannerRenderer {
    contents: Contents
    actionId: string
    viewerIsCreator: boolean
    targetId: string
    onCollapseCommand: OnCollapseCommand
    onExpandCommand: OnExpandCommand
    isStackable: boolean
    header?: Header
    backgroundType?: string
    bannerType?: string
  }
  export interface BannerRenderer {
    liveChatBannerRenderer: LiveChatBannerRenderer
  }
  export interface AddBannerToLiveChatCommand {
    bannerRenderer: BannerRenderer
  }
  export interface Action {
    clickTrackingParams?: string
    addChatItemAction?: AddChatItemAction
    addLiveChatTickerItemAction?: AddLiveChatTickerItemAction
    markChatItemAsDeletedAction?: MarkChatItemAsDeletedAction
    markChatItemsByAuthorAsDeletedAction?: MarkChatItemsByAuthorAsDeletedAction
    updateViewershipAction?: UpdateViewershipAction
    updateTitleAction?: UpdateTitleAction
    updateDescriptionAction?: UpdateDescriptionAction
    updateToggleButtonTextAction?: UpdateToggleButtonTextAction
    removeChatItemAction?: RemoveChatItemAction
    removeChatItemByAuthorAction?: RemoveChatItemByAuthorAction
    addBannerToLiveChatCommand: AddBannerToLiveChatCommand
    updateLiveChatPollAction: UpdateLiveChatPollAction
  }

  export interface LiveChatContinuation {
    continuations: Continuation[]
    actions: Action[]
    trackingParams: string
  }

  export interface ContinuationContents {
    liveChatContinuation: LiveChatContinuation
  }
  export interface Reaction {
    key: string
    src?: string
    value: number
  }
  export interface Duration {
    seconds: string
  }
  export interface ReactionDataStamp {
    emoteId: string
    reactionCount: number
  }
  export interface ReactionData {
    reactionCount: number
    unicodeEmojiId: string
  }
  export interface ReactionBucket {
    totalReactions: number
    duration: Duration
    reactionsData: (ReactionData | ReactionDataStamp)[]
    intensityScore?: number
  }
  export interface EmojiFountainDataEntity {
    key: string
    reactionBuckets: ReactionBucket[]
    updateTimeUsec: string
  }
  export interface LikeCountIfLiked {
    content: string
  }

  export interface LikeCountIfDisliked {
    content: string
  }

  export interface LikeCountIfIndifferent {
    content: string
  }

  export interface ExpandedLikeCountIfLiked {
    content: string
  }

  export interface ExpandedLikeCountIfDisliked {
    content: string
  }

  export interface ExpandedLikeCountIfIndifferent {
    content: string
  }

  export interface LikeCountLabel {
    content: string
  }

  export interface LikeButtonA11yText {
    content: string
  }

  export interface SentimentFactoidA11yTextIfLiked {
    content: string
  }

  export interface SentimentFactoidA11yTextIfDisliked {
    content: string
  }
  export interface LikeCountEntity {
    likeCountIfLiked: LikeCountIfLiked
    likeCountIfDisliked: LikeCountIfDisliked
    likeCountIfIndifferent: LikeCountIfIndifferent
    expandedLikeCountIfLiked: ExpandedLikeCountIfLiked
    expandedLikeCountIfDisliked: ExpandedLikeCountIfDisliked
    expandedLikeCountIfIndifferent: ExpandedLikeCountIfIndifferent
    likeCountLabel: LikeCountLabel
    likeButtonA11yText: LikeButtonA11yText
    likeCountIfLikedNumber: string
    likeCountIfDislikedNumber: string
    likeCountIfIndifferentNumber: string
    shouldExpandLikeCount: boolean
    sentimentFactoidA11yTextIfLiked: SentimentFactoidA11yTextIfLiked
    sentimentFactoidA11yTextIfDisliked: SentimentFactoidA11yTextIfDisliked
  }
  export interface MutationPayload {
    emojiFountainDataEntity?: EmojiFountainDataEntity
    likeCountEntity?: LikeCountEntity
  }
  export interface Mutation {
    entityKey: string
    type: string
    payload: MutationPayload
  }

  export interface Timestamp {
    seconds: string
    nanos: number
  }
  export interface EntityBatchUpdate {
    mutations: Mutation[]
    timestamp: Timestamp
  }
  export interface FrameworkUpdates {
    entityBatchUpdate: EntityBatchUpdate
  }
  export interface ServiceTrackingParams {
    service: string
    params: Param[]
  }
  export interface ChangeEngagementPanelVisibilityAction {
    targetId: string
    visibility: string
  }
  export interface Embed {
    iframeUrl: string
    flashUrl: string
    width: number
    height: number
    flashSecureUrl: string
  }
  export interface LiveBroadcastDetails {
    isLiveNow: boolean
    startTimestamp: Date
  }
  export interface PlayerMicroformatRenderer {
    thumbnail: Thumbnail3
    embed: Embed
    title: Title
    lengthSeconds: string
    ownerProfileUrl: string
    externalChannelId: string
    isFamilySafe: boolean
    availableCountries: string[]
    isUnlisted: boolean
    hasYpcMetadata: boolean
    viewCount: string
    category: string
    publishDate: string
    ownerChannelName: string
    liveBroadcastDetails: LiveBroadcastDetails
    uploadDate: string
  }
  export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer
  }
  export interface VideoResponse {
    responseContext: ResponseContext
    // todo:
    // playabilityStatus: PlayabilityStatus;
    // streamingData: StreamingData;
    // heartbeatParams: HeartbeatParams;
    // playbackTracking: PlaybackTracking;
    // videoDetails: VideoDetails;
    // playerConfig: PlayerConfig;
    // storyboards: Storyboards;
    microformat: Microformat
    // cards: Cards;
    trackingParams: string
    // attestation: Attestation;
    frameworkUpdates: FrameworkUpdates
  }
  export interface MainText {
    runs: Run[]
  }
  export interface SubtitleText {
    simpleText: string
  }
  export interface LiveStreamOfflineSlateRenderer {
    scheduledStartTime: string
    mainText: MainText
    subtitleText: SubtitleText
    thumbnail: Thumbnail
    actionButtons: ActionButton[]
    offlineSlateStyle: string
  }
  export interface OfflineSlate {
    liveStreamOfflineSlateRenderer: LiveStreamOfflineSlateRenderer
  }
  export interface LiveStreamabilityRenderer {
    videoId: string
    offlineSlate: OfflineSlate
    pollDelayMs: string
  }
  export interface LiveStreamability {
    liveStreamabilityRenderer: LiveStreamabilityRenderer
  }
  export interface PlayabilityStatus {
    status: string
    reason: string
    liveStreamability: LiveStreamability
    additionalLoggingData: string
  }
  export interface HeartBeatResponse {
    responseContext: ResponseContext
    playabilityStatus: PlayabilityStatus
    pollDelayMs: string
    adBreakHeartbeatParams: string
  }
  export interface MetaResponse {
    responseContext: ResponseContext
    continuation: Continuation
    actions?: Action[]
    frameworkUpdates?: FrameworkUpdates
  }
  export interface EmojiSrcs {
    emojiId: string
    shortcuts: string[]
    searchTerms: string[]
    image: Image
    isCustomEmoji: boolean
    index: number
  }

  export interface LiveChatMessageInputRenderer {
    authorName: AuthorName
    authorPhoto: AuthorPhoto
  }
  export interface ActionPanel {
    liveChatMessageInputRenderer: LiveChatMessageInputRenderer
  }
  export interface LiveChatRenderer {
    continuations: any[]
    actions: Action[]
    actionPanel: ActionPanel
    // itemList: ItemList;
    header: any
    // ticker: Ticker;
    trackingParams: string
    // participantsList: ParticipantsList;
    emojis?: EmojiSrcs[]
    // clientMessages: ClientMessages;
    viewerName: string
  }
  export interface Text {
    runs: Run[]
  }
  export interface MessageRenderer {
    text: Text
    trackingParams: string
  }
  export interface InitialData {
    contents: { liveChatRenderer: LiveChatRenderer; messageRenderer?: MessageRenderer }
    responseContext: any // todo
    trackingParams: string
  }
  export interface RootResponse {
    responseContext: ResponseContext
    trackingParams: string
    frameworkUpdates: FrameworkUpdates
    continuationContents: ContinuationContents
  }
  export interface ChoiceData {
    label: string
    percentage: string
    ratio: number
  }

  export interface SurveyData {
    id: string
    title: string
    thumbnail: string
    meta: string
    choices: ChoiceData[]
  }
  export interface SurveyResult extends SurveyData {
    message: string
    result: string[]
  }
  export interface MemberShip {
    primary: string
    sub: string
  }
  export type GiftType = 'superchat' | 'supersticker' | 'sponsorgift' | 'giftreceived' | 'milestonechat'
  export interface CommentResponse extends BaseResponse {
    paidText?: string
    price?: number
    unit?: string
    isModerator: boolean
    isMember: boolean
    isSponsorshipGiftSender?: boolean
    isSponsorshipGiftReceiver?: boolean
    giftType?: GiftType
    isQuestion?: boolean
    autoModerated: boolean
    membership?: MemberShip
    colors?: Colors
    tier?: number
  }
}
