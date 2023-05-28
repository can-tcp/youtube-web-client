import { useEffect, useState } from "react"
import axios from "axios"
import PageContainer from "@/components/Pages/PageContainer/PageContainer"
import { useDebounce } from "@/hooks/useDebounce"
import { SearchResult } from "@/server/types/app"
import SearchButton from "./SearchButton/SearchButton"
import SearchInput from "./SearchInput/SearchInput"
import VideoList from "./VideoList/VideoList"

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [videos, setVideos] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const DEBOUNCE_DELAY = 500

  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_DELAY)

  useEffect(() => {
    if (debouncedSearchQuery) {
      setIsLoading(true)
      axios({
        method: "post",
        url: "/search",
        headers: {
          "Content-Type": "application/json",
        },
        data: { query: debouncedSearchQuery },
      })
        .then((res) => setVideos(res.data.videos ?? []))
        .finally(() => setIsLoading(false))
    }
  }, [debouncedSearchQuery])

  return (
    <PageContainer>
      <main className="mx-auto flex w-full max-w-lg flex-col items-center px-4 pt-16">
        <h1 className="pb-8 text-3xl font-semibold">Youtube Search</h1>
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton searchQuery={searchQuery} />
        {isLoading && <p className="text-center">Loading...</p>}
        <VideoList query={debouncedSearchQuery} videos={videos} />
      </main>
    </PageContainer>
  )
}
