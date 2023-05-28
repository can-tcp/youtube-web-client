import { type HTMLProps, useEffect, useRef } from "react"
import { VideoInfo } from "@/server/types/youtube.video"

interface VideoPlayerProps extends HTMLProps<HTMLVideoElement> {
  source?: VideoInfo
}

export function VideoPlayer({ source, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [source])

  if (!source) return <div>loading...</div>

  return (
    <>
      <video
        ref={videoRef}
        {...props}
        width={source?.width}
        height={source?.height}
        controls
      >
        <source src={source?.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
