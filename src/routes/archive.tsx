import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/archive')({
  component: App,
  head: () => ({
    meta: [
      { title: "Project Archive | Seaum Siddiqui" },
      { name: "description", content: "Explore the complete project archive of Seaum Siddiqui, a Backend Engineer based in Dhaka." },
      { property: "og:title", content: "Project Archive | Seaum Siddiqui" },
      { property: "og:description", content: "Explore the complete project archive of Seaum Siddiqui, a Backend Engineer based in Dhaka." },
    ]
  }),
})
