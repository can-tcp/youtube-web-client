import Link from "next/link"
import { Button } from "@/components/ui/Button/Button"
import { Combobox, ComboboxItem } from "@/components/ui/ComboBox/ComboBox"
import { VideoInfo } from "@/server/types/youtube.video"

interface ControlSectionProps {
  selectedMediaSource: ComboboxItem<VideoInfo>
  setSelectedMediaSource: React.Dispatch<
    React.SetStateAction<ComboboxItem<VideoInfo> | undefined>
  >
  mediaSources: VideoInfo[]
}

export const ControlSection: React.FC<ControlSectionProps> = ({
  selectedMediaSource,
  setSelectedMediaSource,
  mediaSources,
}) => {
  const source = selectedMediaSource?.value

  return (
    <div className="flex flex-1 items-start justify-between gap-4 border-b p-4 sm:flex-col sm:justify-start sm:border-l">
      <Link href={"/"} className="h-min">
        <Button size={"lg"}>Back</Button>
      </Link>

      <Combobox
        label={source?.qualityLabel}
        buttonSize={"lg"}
        items={
          mediaSources
            ?.filter((mediaSource) => mediaSource.quality !== source?.quality)
            .map((source) => ({
              label: `${source.height}p`,
              value: source,
            })) || []
        }
        onChange={(e) => {
          setSelectedMediaSource(e)
        }}
      />
    </div>
  )
}
