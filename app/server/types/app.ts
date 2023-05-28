import { Thumbnail } from "./youtube.search"
import { VideoInfo } from "./youtube.video"

export interface Video extends SearchResult {
  sources: VideoMediaSources
}

export interface SearchResult {
  id: string
  title: string
  thumbnail: Thumbnail
}

export type VideoMediaSources = VideoInfo[]
