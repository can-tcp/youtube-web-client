import { searchByQuery } from "@/server/youtube/search/search"

interface SearchRequestPayload {
  query?: string
  page?: number
}

const pageSizes = [5, 10, 15, 20]

export async function POST(req: Request) {
  const { query, page = 1 } = (await req.json()) as SearchRequestPayload

  if (!query)
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400,
    })

  const videos = await searchByQuery(query).then((videos) => {
    const start = (page - 1) * pageSizes[0]
    const end = start + pageSizes[0]

    return videos.slice(start, end)
  })

  return new Response(JSON.stringify({ videos }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      Location: "/search",
    },
  })
}
