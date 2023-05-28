import Image from "next/image"
import Link from "next/link"
import { SearchResult } from "@/server/types/app"

export default function VideoCard({ video }: { video: SearchResult }) {
  return (
    <div className="relative h-48 w-full sm:w-1/2">
      <Link href={`/watch?v=${video.id}`}>
        <h1 className="truncate text-lg font-medium capitalize">
          {video.title}
        </h1>
        <Image
          className="width-full height-full absolute bottom-0 left-0 object-cover"
          src={video.thumbnail.url}
          width={video.thumbnail.width}
          height={video.thumbnail.height}
          alt={video.title}
        />
      </Link>
    </div>
  )
}
