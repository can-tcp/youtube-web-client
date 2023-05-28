// components/PaginationButtons.tsx

import Link from "next/link"
import { Button } from "@/components/ui/Button/Button"

interface PaginationProps {
  page: number
  searchQuery: string
}

export default function PaginationButtons({
  page,
  searchQuery,
}: PaginationProps) {
  return (
    <div className="flex w-full justify-between">
      {Number(page) === 1 ? null : (
        <Link
          href={`/results?search_query=${searchQuery}&page=${Number(page) - 1}`}
        >
          <Button hover intent={"secondary"}>
            Previous Page
          </Button>
        </Link>
      )}
      <Link
        className="ml-auto"
        href={`/results?search_query=${searchQuery}&page=${Number(page) + 1}`}
      >
        <Button hover intent={"secondary"}>
          Next Page
        </Button>
      </Link>
    </div>
  )
}
