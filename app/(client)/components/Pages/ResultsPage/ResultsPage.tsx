// pages/ResultsPage.tsx

import axios from "axios"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button/Button"
import PaginationButtons from "@/components/Pages/ResultsPage/PaginationButtons/PaginationButtons"
import VideoCard from "@/components/Pages/ResultsPage/VideoCard/VideoCard"
import { SearchResult } from "@/server/types/app"

export default function ResultsPage({}) {
  const [videos, setVideos] = useState<SearchResult[]>([])
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get("search_query")
  const page = searchParams?.get("page")
  const [cache, setCache] = useState<{ [key: string]: SearchResult[] }>({})

  useEffect(() => {
    if (searchQuery) {
      const key = `${searchQuery}-${page}` // cache key

      if (cache[key]) {
        // If results are cached, use them
        setVideos(cache[key])
      } else {
        // If results are not cached, fetch them
        axios
          .post(`/search`, {
            query: searchQuery,
            page: page,
          })
          .then((res) => {
            const { videos } = res.data
            setVideos(videos ?? [])

            // Store results in cache
            setCache((prevCache) => ({
              ...prevCache,
              [key]: videos,
            }))
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }, [searchQuery, page])

  if (!searchQuery || videos.length === 0) {
    return <div>loading...</div>
  }

  return (
    <main
      className={
        "h-content flex min-h-screen w-full justify-center bg-white dark:bg-gray-900"
      }
    >
      <div
        className="flex w-full max-w-xl flex-col items-center justify-center
            gap-4 p-4 dark:text-gray-100"
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-semibold">Youtube Results</h1>
          <Link href={"/"}>
            <Button>Back</Button>
          </Link>
        </div>
        <div className="flex w-full flex-wrap">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <PaginationButtons page={Number(page)} searchQuery={searchQuery} />
      </div>
    </main>
  )
}
