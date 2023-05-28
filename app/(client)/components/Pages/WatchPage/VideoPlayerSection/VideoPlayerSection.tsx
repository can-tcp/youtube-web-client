import { HTMLProps } from "react"
import { VideoInfo } from "@/server/types/youtube.video"
import { VideoPlayer } from "./videoPlayer"

interface VideoPlayerSectionProps extends HTMLProps<HTMLDivElement> {
  videoTitle: string
  source: VideoInfo
}

export const VideoPlayerSection: React.FC<VideoPlayerSectionProps> = ({
  videoTitle,
  source,
}) => {
  const lastMofified = new Date(parseInt(source?.lastModified || "") / 1000)

  return (
    <div className="flex flex-col gap-2 border-b p-4">
      <div className="w-[500px] max-w-full border-b">
        <VideoPlayer className="w-full" source={source} />
        <h1 className="w-full py-2 text-xl font-medium">{videoTitle}</h1>
      </div>

      <span>
        Last Modified:{" "}
        {lastMofified.toLocaleDateString() +
          " " +
          lastMofified.toLocaleTimeString()}
      </span>
      <span>quality: {source?.quality}</span>
      <span>height: {source?.height}</span>
      <span>fps: {source?.fps}</span>
      <span>audioChannels: {source?.audioChannels}</span>
    </div>
  )
}
