import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/archive')({
  component: App,
})
