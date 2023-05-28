import axios from "axios"
import { getWatchUrl } from "@/server/youtube"
import { Video } from "../../types/app"
import { InitialPlayerResponse } from "../../types/youtube.player"
import { findVariable } from "../html/find-variable"

export async function getVideo(id: string): Promise<Video | undefined> {
  const url = getWatchUrl(id)
  console.log("getVideo", url)

  const { data: responseContent } = await axios.get(url)

  const ytInitialPlayerResponse = findVariable<InitialPlayerResponse>(
    responseContent,
    "ytInitialPlayerResponse"
  )

  if (!ytInitialPlayerResponse)
    return Promise.reject("ytInitialPlayer not found")

  const mediaSources = ytInitialPlayerResponse.streamingData.formats

  if (!mediaSources) return Promise.reject("no mediaSources found")

  const video: Video = {
    id: ytInitialPlayerResponse.videoDetails.videoId,
    title: ytInitialPlayerResponse.videoDetails.title,
    thumbnail: ytInitialPlayerResponse.videoDetails.thumbnail,
    sources: mediaSources,
  }

  return video
}
