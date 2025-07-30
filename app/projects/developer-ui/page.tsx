"use client"

import { useEffect } from "react" // Explicitly import React
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DeveloperUIPage() {
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
              Developer UI – One-page Interface Concept
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              A minimal homepage design tailored for developers — clean layout, easy navigation, and focused on
              structure over style. Built to highlight essential info without distractions.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <span className="font-bold text-mint">Tools:</span> Figma
            </p>
            <Link
              href="https://www.figma.com/design/9IBQP3COUxTClEWcqayLX7/freeCodeCamp-Website-Ui?t=FNbVhaY7IERRxk0W-1"
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
              src="/images/developer-ui.png"
              alt="Developer UI Interface Concept Screenshot"
              layout="fill"
              objectFit="contain"
              className="bg-gray-900" // Added a dark background for the image container
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Key Design Points</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Simple, grid-based layout</li>
              <li>Clean typography and spacing</li>
              <li>Developer-friendly visual hierarchy</li>
              <li>Dark theme with subtle accent color</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="my-12 bg-border/60" />
    </div>
  )
}
