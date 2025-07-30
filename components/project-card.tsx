import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link" // Import Link

interface ProjectCardProps {
  name: string
  description: string
  tools: string
  imageSrc: string
  href?: string // Make href optional
}

export function ProjectCard({ name, description, tools, imageSrc, href }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Image for ${name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          quality={80}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-mint">{name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-medium text-foreground/70">
          <span className="font-bold">Tools:</span> {tools}
        </p>
      </CardContent>
    </>
  )

  return href ? (
    <Link href={href} passHref>
      <Card className="group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
        {content}
      </Card>
    </Link>
  ) : (
    <Card className="group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      {content}
    </Card>
  )
}
