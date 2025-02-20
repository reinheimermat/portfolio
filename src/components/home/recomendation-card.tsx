interface RecomendationCardProps {
  name: string
  role: string
  description: string
  src: string
  alt: string
  relation: string
}

export function RecomendationCard({
  name,
  role,
  description,
  src,
  alt,
  relation,
}: RecomendationCardProps) {
  return (
    <div className="flex gap-2">
      <img src={src} alt={alt} className="rounded-full size-12" />

      <div className="space-y-3">
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="text-sm text-zinc-700">{role}</p>
          <p className="text-sm text-zinc-500">{relation}</p>
        </div>
        <p className="text-sm w-2/3">{description}</p>
      </div>
    </div>
  )
}
