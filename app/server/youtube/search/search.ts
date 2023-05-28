import axios from "axios"
import { InitialPlayerResponse } from "@/server/types/youtube.player"
import { getSearchUrl } from "@/server/youtube"
import { SearchResult } from "../../types/app"
import { extractVideos, findVariable } from "../html/find-variable"

const CACHE_EXPIRY_MS = 60 * 60 * 1000 // 1 hour in milliseconds
const cache: {
  [key: string]: {
    videos: SearchResult[]
    timestamp: number
  }
} = {}

export async function searchByQuery(
  searchQuery: string
): Promise<SearchResult[]> {
  const url = getSearchUrl(searchQuery)

  if (
    cache[searchQuery] &&
    Date.now() - cache[searchQuery].timestamp < CACHE_EXPIRY_MS
  ) {
    console.log(`Returning cached results for query: '${searchQuery}'`)
    return cache[searchQuery].videos
  }

  console.log("Fetching new results for query: ", searchQuery)
  const markdownData = await axios.get(url).then((res) => res.data)

  const ytInitialData = findVariable<InitialPlayerResponse>(
    markdownData,
    "ytInitialData"
  )

  const foundVideos = extractVideos(ytInitialData)

  // Filter out null videos and store in the cache with the current timestamp
  const videos = foundVideos.filter((video) => video !== null)
  cache[searchQuery] = {
    videos,
    timestamp: Date.now(),
  }

  return videos
}
