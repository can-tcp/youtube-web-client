import Link from "next/link"
import { FC } from "react"
import { SearchResult } from "@/server/types/app"

type Props = {
  videos: SearchResult[]
  query: string
}

const VideoList: FC<Props> = ({ videos, query }) => (
  <div className="overflex flex w-full flex-col gap-4 truncate">
    {videos.length !== 0 &&
      query.length !== 0 && [
        <h1 className="text-2xl" key={"header"}>
          Top Results for &quot;{query}&quot;
        </h1>,
        ...videos.map(({ id, title }) => (
          <div
            key={id}
            className="flex h-8 w-full max-w-xl items-center justify-between text-xl"
          >
            <Link
              href={`/watch?v=${id}`}
              className="text-blue-500 underline underline-offset-2"
            >
              <p className="text-md truncate whitespace-nowrap">{title}</p>
            </Link>
          </div>
        )),
      ]}
  </div>
)

export default VideoList
