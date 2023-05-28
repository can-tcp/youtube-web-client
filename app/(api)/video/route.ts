import { getVideo } from "@/server/youtube/video/get-video"

export async function POST(req: Request) {
  const { id } = (await req.json()) as { id?: string }

  if (!id)
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400,
    })

  const mediaSources = await getVideo(id)

  return new Response(JSON.stringify({ video: mediaSources }))
}
