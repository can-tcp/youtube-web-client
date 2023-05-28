import { VideoInfo } from "./youtube.video"

export interface InitialPlayerResponse {
  responseContext: ResponseContext
  playabilityStatus: PlayabilityStatus
  streamingData: StreamingData
  playerAds: PlayerAd[]
  playbackTracking: PlaybackTracking
  captions: Captions
  videoDetails: VideoDetails
  playerConfig: PlayerConfig
  storyboards: Storyboards
  microformat: Microformat
  cards: Cards
  trackingParams: string
  attestation: Attestation
  adPlacements: AdPlacement[]
  frameworkUpdates: FrameworkUpdates
}

interface ResponseContext {
  serviceTrackingParams: any[]
  mainAppWebResponseContext: any
  webResponseContextExtensionData: any
}

interface PlayabilityStatus {
  status: string
  playableInEmbed: boolean
  miniplayer: any
  contextParams: string
}

interface StreamingData {
  expiresInSeconds: string
  formats: VideoInfo[]
  adaptiveFormats: any[]
  probeUrl: string
}

interface PlayerAd {
  playerLegacyDesktopWatchAdsRenderer: any
}

interface PlaybackTracking {
  videostatsPlaybackUrl: any
  videostatsDelayplayUrl: any
  videostatsWatchtimeUrl: any
  ptrackingUrl: any
  qoeUrl: any
  atrUrl: any
  videostatsScheduledFlushWalltimeSeconds: number[]
  videostatsDefaultFlushIntervalSeconds: number
}

interface Captions {
  playerCaptionsTracklistRenderer: any
}

interface VideoDetails {
  videoId: string
  title: string
  lengthSeconds: string
  keywords: string[]
  channelId: string
  isOwnerViewing: boolean
  shortDescription: string
  isCrawlable: boolean
  thumbnail: any
  allowRatings: boolean
  viewCount: string
  author: string
  isPrivate: boolean
  isUnpluggedCorpus: boolean
  isLiveContent: boolean
}

interface PlayerConfig {
  audioConfig: any
  streamSelectionConfig: any
  mediaCommonConfig: any
  webPlayerConfig: any
}

interface Storyboards {
  playerStoryboardSpecRenderer: any
}

interface Microformat {
  playerMicroformatRenderer: any
}

interface Cards {
  cardCollectionRenderer: any
}

interface Attestation {
  playerAttestationRenderer: any
}

interface AdPlacement {
  adPlacementRenderer: any
}

interface FrameworkUpdates {
  entityBatchUpdate: any
}
