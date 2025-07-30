import Image from "next/image"
import { ArrowDown, LayoutDashboard, Smartphone, MousePointer2, Mail, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const projects = [
    {
      name: "Fliq – Learning App UI",
      description:
        "A clean and modern learning app designed to present educational content in a module-based system. Includes page-wise structured content and dynamic navigation for smoother reading.",
      tools: "Figma",
      imageSrc: "/images/fliq-app.png",
      href: "/projects/fliq", // Added href for Fliq project
    },
    {
      name: "Surplus Connect – Donation Platform UI",
      description:
        "Homepage and login design for a food surplus donation platform connecting donors and NGOs through an admin-managed flow.",
      tools: "Figma",
      imageSrc: "/images/surplus-connect.png",
      href: "/projects/surplus-connect", // Added href for Surplus Connect project
    },
    {
      name: "Developer UI (Interface Concept)",
      description:
        "A minimal, one-page UI design created for developers. Clean layout with developer-friendly structure and aesthetics.",
      tools: "Figma",
      imageSrc: "/images/developer-ui.png",
      href: "/projects/developer-ui", // Added href for Developer UI project
    },
  ]

  const services = [
    {
      title: "UI Design for Websites",
      description:
        "Crafting clean, intuitive, and visually appealing interfaces for web platforms that enhance user engagement and experience.",
      icon: LayoutDashboard,
    },
    {
      title: "Mobile App UI",
      description:
        "Designing sleek and user-friendly mobile application experiences, from wireframing to high-fidelity prototyping.",
      icon: Smartphone,
    },
    {
      title: "Figma Prototyping",
      description:
        "Creating interactive and clickable UI demos in Figma for client presentations, user testing, and development hand-off.",
      icon: MousePointer2,
    },
  ]

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="relative flex min-h-[calc(100vh-64px)] items-center justify-center py-16 md:py-24 lg:py-32 text-center"
      >
        <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
          <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl animate-fade-in">
            {'"Good design is as little design as possible — I follow that."'}
          </blockquote>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in animation-delay-200">
              Hi, I&apos;m <span className="text-mint">Rashi</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium animate-fade-in animation-delay-400">
              I design intuitive, user-first digital experiences.
            </p>
          </div>
          <Link href="#projects" passHref>
            <Button className="mt-8 bg-mint text-primary-foreground hover:bg-mint/90 transition-colors animate-fade-in animation-delay-600">
              Explore My Work
            </Button>
          </Link>
          <div className="absolute bottom-8 animate-bounce-y">
            <ArrowDown className="h-8 w-8 text-mint" />
            <span className="sr-only">Scroll down</span>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-border/60" />

      {/* About Section */}
      <section id="about" className="container py-16 md:py-24 lg:py-32 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my journey and what drives my passion for design.
          </p>
        </div>

        <Card className="p-6 md:p-10 bg-card border-border/60 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Profile Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <div className="relative h-40 w-40 rounded-full overflow-hidden border-2 border-mint shadow-lg">
                <Image
                  src="/images/rashi-profile-new.jpg" // Updated image source
                  alt="Rashi Pawar's Profile Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Rashi Pawar</h2>
                <p className="text-xl text-mint font-medium">UI Designer</p>
                <p className="text-muted-foreground text-base">B.Sc. IT • Usha Pravin Gandhi College (2025)</p>
              </div>
            </div>

            {/* Right Column: About & Skills */}
            <div className="space-y-8">
              {/* About (Bio) */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">About</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  I&apos;m a passionate UI designer and recent B.Sc. IT graduate with a strong focus on creating
                  intuitive, user-centered digital experiences. I believe in the power of minimal design that
                  prioritizes functionality while maintaining aesthetic appeal. My approach combines technical
                  understanding with creative vision to deliver designs that truly serve users.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    Figma
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    Wireframing
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    Prototyping
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    UI Design
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    Mobile App Interface Design
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    Responsive Design
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">
                    HTML
                  </span>
                  <span className="text-sm px-4 py-2 text-muted-foreground border border-border rounded-full">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Education and Experience (kept separate for now, can be integrated into card if desired) */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Education</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-mint">BSc in Information Technology</h3>
              <p className="text-muted-foreground">Usha Pravin Gandhi College, 2025</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-mint">Freelance UI Designer</h3>
              <p className="text-muted-foreground">Project-based, 2024 – Present</p>
              <p className="text-sm text-muted-foreground/80">
                Working on various UI design projects for web and mobile applications, focusing on user-centric
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-border/60" />

      {/* Projects Section */}
      <section id="projects" className="container py-16 md:py-24 lg:py-32 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">My Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent UI design projects, showcasing my approach to user-centric interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              tools={project.tools}
              imageSrc={project.imageSrc}
              href={project.href} // Pass href to ProjectCard
            />
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-border/60" />

      {/* Services Section */}
      <section id="services" className="container py-16 md:py-24 lg:py-32 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">What I Do</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise lies in creating thoughtful and effective digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md border border-border/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mint/20 text-mint mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">{service.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-border/60" />

      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-24 lg:py-32 space-y-12">
        <div className="text-left space-y-4">
          {" "}
          {/* Changed to text-left */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            {" "}
            {/* Removed mx-auto */}
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in
            mind or just want to connect!
          </p>
        </div>

        <div className="flex justify-start">
          {" "}
          {/* Changed to justify-start */}
          <div className="p-0 md:p-0 max-w-md w-full text-left space-y-6">
            {" "}
            {/* Removed padding, changed to text-left */}
            <h2 className="text-2xl font-semibold text-foreground">Contact Details</h2>
            <div className="flex items-center gap-3 text-muted-foreground">
              {" "}
              {/* Removed justify-center */}
              <Mail className="h-6 w-6 text-mint" />
              <Link href="mailto:rashipawar501@gmail.com" className="hover:text-mint transition-colors text-base">
                rashipawar501@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              {" "}
              {/* Removed justify-center */}
              <Linkedin className="h-6 w-6 text-mint" />
              <Link
                href="https://www.linkedin.com/in/rashi-pawar-62936428b" // Updated LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mint transition-colors text-base"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
