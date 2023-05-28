"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"
import { Button } from "@/components/ui/Button/Button"

type Props = {
  searchQuery: string
}

const SearchButton: FC<Props> = ({ searchQuery }) => {
  const router = useRouter()

  return (
    <Button
      className="mb-4 h-min w-full"
      size={"lg"}
      onClick={() => router.push(`/results?search_query=${searchQuery}&page=1`)}
    >
      Search
    </Button>
  )
}

export default SearchButton
