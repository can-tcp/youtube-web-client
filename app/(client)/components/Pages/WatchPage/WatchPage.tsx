"use client"

import { useEffect, useState } from "react"
import { ComboboxItem } from "@/components/ui/ComboBox/ComboBox"
import PageContainer from "@/components/Pages/PageContainer/PageContainer"
import useFetchVideo from "@/hooks/useFetchVideo"
import { VideoInfo } from "@/server/types/youtube.video"
import { ControlSection } from "./ControlSection/ControlSection"
import { VideoPlayerSection } from "./VideoPlayerSection/VideoPlayerSection"

export default function WatchPage() {
  const [selectedMediaSource, setSelectedMediaSource] =
    useState<ComboboxItem<VideoInfo>>()

  const [videoId, setVideoId] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const v = searchParams.get("v")
    setVideoId(v)
  }, [])

  const video = useFetchVideo(videoId)

  
  useEffect(() => {
    if (selectedMediaSource || !video?.sources) return

    const {
      sources: [firstSource],
    } = video

    setSelectedMediaSource({
      label: `${firstSource.height}p`,
      value: firstSource,
    })
  }, [video?.sources])

  const activeSource = selectedMediaSource?.value

  if (!video || !activeSource) {
    return <div>loading...</div>
  }

  const { title, sources } = video

  return (
    <PageContainer>
      <main className="flex flex-col sm:flex-row">
        <VideoPlayerSection videoTitle={title} source={activeSource} />
        <ControlSection
          selectedMediaSource={selectedMediaSource}
          setSelectedMediaSource={setSelectedMediaSource}
          mediaSources={sources}
        />
      </main>
    </PageContainer>
  )
}
