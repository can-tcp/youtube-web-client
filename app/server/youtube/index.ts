export const baseUrl = "https://www.youtube.com"
export const searchPath = "/results"
export const watchPath = "/watch"

export function getWatchUrl(videoId: string): string {
  return `${baseUrl}${watchPath}?v=${videoId}`
}

export function getSearchUrl(searchQuery: string): string {
  return `${baseUrl}${searchPath}?search_query=${searchQuery}`
}