import * as cheerio from "cheerio"
import { SearchResult } from "@/server/types/app"
import { VideoRenderer } from "@/server/types/youtube.search"

export function findVariable<T>(html: string, variableName: string): T | null {
  const $ = cheerio.load(html)

  const dataMatch = $(`script:contains("var ${variableName}")`)
    .html()
    ?.match(new RegExp(`var ${variableName} = (\\{.*?\\});`))

  const data = dataMatch ? JSON.parse(dataMatch[1]) : null

  return data as T
}

export function extractVideos(data: any): SearchResult[] {
  const itemSectionRendererIndex = 0

  // streamingData
  const primaryContents =
    data["contents"]["twoColumnSearchResultsRenderer"]["primaryContents"]

  const contents: VideoRenderer[] =
    primaryContents["sectionListRenderer"]["contents"][
      itemSectionRendererIndex
    ]["itemSectionRenderer"]["contents"]

  const videos = [...contents].map((videoRenderer): SearchResult | null => {
    const videoData = videoRenderer["videoRenderer"]

    if (!videoData) return null

    const {
      videoId,
      title,
      thumbnail: {
        thumbnails: [thumbnail],
      },
    } = videoData

    return {
      id: videoId,
      title: title.runs[0].text,
      thumbnail: {
        url: thumbnail.url,
        width: thumbnail.width,
        height: thumbnail.height,
      },
    }
  })

  const result = videos.filter((video) => video !== null) as SearchResult[]

  return result
}
