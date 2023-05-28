export interface Thumbnail {
  url: string
  width: number
  height: number
}

interface TitleRun {
  text: string
}

interface AccessibilityData {
  label: string
}

interface Accessibility {
  accessibilityData: AccessibilityData
}

interface Title {
  runs: TitleRun[]
  accessibility: Accessibility
}

export interface VideoRenderer {
  videoRenderer?: {
    videoId: string
    thumbnail: {
      thumbnails: Thumbnail[]
    }
    title: Title
    longBylineText: {
      runs: TitleRun[]
    }
    publishedTimeText: {
      simpleText: string
    }
    lengthText: {
      accessibility: Accessibility
      simpleText: string
    }
    viewCountText: {
      simpleText: string
    }
    navigationEndpoint: {
      clickTrackingParams: string
      commandMetadata: {
        webCommandMetadata: any // Replace 'any' with appropriate type if available
      }
      watchEndpoint: {
        videoId: string
        params: string
        playerParams: string
        watchEndpointSupportedOnesieConfig: any // Replace 'any' with appropriate type if available
      }
    }
    badges: {
      metadataBadgeRenderer: any // Replace 'any' with appropriate type if available
    }[]
    ownerBadges: {
      metadataBadgeRenderer: any // Replace 'any' with appropriate type if available
    }[]
    ownerText: {
      runs: TitleRun[]
    }
    shortBylineText: {
      runs: TitleRun[]
    }
    trackingParams: string
    showActionMenu: boolean
    shortViewCountText: {
      accessibility: Accessibility
      simpleText: string
    }
    menu: {
      menuRenderer: {
        items: any[] // Replace 'any' with appropriate type if available
        trackingParams: string
        accessibility: any // Replace 'any' with appropriate type if available
      }
    }
    channelThumbnailSupportedRenderers: {
      channelThumbnailWithLinkRenderer: {
        thumbnail: Thumbnail
        navigationEndpoint: any // Replace 'any' with appropriate type if available
        accessibility: any // Replace 'any' with appropriate type if available
      }
    }
    thumbnailOverlays: {
      thumbnailOverlayTimeStatusRenderer: any // Replace 'any' with appropriate type if available
    }[]
    detailedMetadataSnippets: {
      snippetText: any // Replace 'any' with appropriate type if available
      snippetHoverText: any // Replace 'any' with appropriate type if available
      maxOneLine: boolean
    }[]
    inlinePlaybackEndpoint: {
      clickTrackingParams: string
      commandMetadata: {
        webCommandMetadata: any // Replace 'any' with appropriate type if available
      }
      watchEndpoint: {
        videoId: string
        playerParams: string
        playerExtraUrlParams: any[] // Replace 'any' with appropriate type if available
        watchEndpointSupportedOnesieConfig: any // Replace 'any' with appropriate type if available
      }
    }
    searchVideoResultEntityKey: string
  }
}
