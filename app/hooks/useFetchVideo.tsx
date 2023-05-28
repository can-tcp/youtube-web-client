import { useEffect, useState } from "react"
import axios from "axios"
import { Video } from "@/server/types/app"

export default function useFetchVideo(videoId: string | null) {
  const [videoMediaSources, setVideoMediaSources] = useState<Video>()

  useEffect(() => {
    if (!videoId) return

    axios
      .post(
        "/video",
        { id: videoId },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => res.data.video)
      .then((video) => {
        setVideoMediaSources(video)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [videoId])

  return videoMediaSources
}
