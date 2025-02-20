import { ExternalLink } from 'lucide-react'

export function link() {
  return (
    <p className="text-zinc-500">
      Graduating from
      <a
        href="https://www.unisinos.br/"
        className="text-zinc-800 hover:underline"
      >
        <ExternalLink />
        Unisinos
      </a>
    </p>
  )
}
