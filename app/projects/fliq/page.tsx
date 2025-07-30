"use client"

import { useEffect } from "react" // Explicitly import React
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function FliqProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24 lg:py-32 space-y-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-left space-y-6">
            <Link href="/#projects" passHref>
              <Button asChild variant="ghost" className="text-mint hover:text-mint/80 mb-8">
                <a>
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Projects
                </a>
              </Button>
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Fliq – Learning App UI
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              A clean and modern learning app designed to present educational content in a module-based system.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <span className="font-bold text-mint">Tools:</span> Figma
            </p>
            <Link
              href="https://www.figma.com/design/gDz4CgVsH5R4Dvz17Nfddh/FliQ?node-id=3-1395&t=MD0VJ73FvbSRPXIw-1"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button className="bg-mint text-primary-foreground hover:bg-mint/90 transition-colors">
                View Figma File
              </Button>
            </Link>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-border/60">
            <Image
              src="/images/fliq-app.png"
              alt="Fliq Learning App UI Screenshot"
              layout="fill"
              objectFit="contain"
              className="bg-gray-900" // Added a dark background for the image container
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Project Overview</h2>
            <p>
              Fliq is a conceptual learning application designed to provide an intuitive and engaging educational
              experience. The primary goal was to create a user interface that simplifies complex learning content into
              digestible, module-based units, making it accessible and enjoyable for users of all ages.
            </p>
            <p>
              The design focuses on a clean aesthetic, ensuring that the content remains the star. Key features include
              page-wise structured content, allowing users to progress through lessons seamlessly, and dynamic
              navigation elements that adapt to the user's progress, ensuring a smoother reading and learning flow.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Design Process & Challenges</h2>
            <p>
              My process began with extensive wireframing to map out the user journey and information architecture. The
              main challenge was balancing a rich content display with a minimalist interface to avoid overwhelming the
              learner. Prototyping in Figma allowed for rapid iteration and user testing, ensuring the navigation felt
              natural and the content presentation was clear.
            </p>
            <p>
              Special attention was given to typography and color contrast to ensure readability in a dark-themed
              environment. The mint accent color was strategically used for interactive elements and highlights to guide
              the user's eye without distraction.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                Minimalist & Clean UI: Designed with a sleek, distraction-free layout focusing on content visibility and
                smooth user experience
              </li>
              <li>
                Dark Mode Interface: Visually comfortable dark theme with soft gradients and mint-colored highlights for
                aesthetic contrast
              </li>
              <li>
                Interactive Prototypes: High-fidelity interactive screens built in Figma demonstrating user flow,
                onboarding, and navigation experience
              </li>
              <li>
                Intuitive Navigation: Simple and consistent navigation bar and bottom tab layout for effortless browsing
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="my-12 bg-border/60" />
    </div>
  )
}
