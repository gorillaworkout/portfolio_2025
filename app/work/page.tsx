"use client"

import { useState, useEffect } from "react"
import { ProjectCard, FeaturedProjectCard } from "@/components/project-card"
import { WorkCTASection } from "@/components/work-cta-section"
import { PremiumBackground } from "@/components/premium-background"
import { ProjectSkeleton } from "@/components/skeleton"
import { Sparkles, Filter, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Work() {
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: "Indonesian Cheer Association",
      description:
       "Indonesian Cheer Association (ICA) is the national governing body for cheerleading in Indonesia, officially recognized by the International Cheer Union (ICU) and KORMI since 2008–2009.",
      image: "/images/ica-rounded.webp",
      technologies: ["Next JS", "Tailwind CSS","Firebase", "Firestore", "Oauth"],
      liveUrl: "https://www.indonesiancheer.org",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    {
      title: "HSSP Law firm",
      description:
       "HSS Partners Law Firm (hssplawfirm.com) is a leading Indonesian legal practice with over 20 years of experience. Established in 1995, the firm delivers a full spectrum of legal services,",
      image: "/images/logo_hssplaw.png",
      technologies: ["Next JS", "Tailwind CSS","Firebase", "Firestore", "Oauth"],
      liveUrl: "https://www.hssplawfirm.com/",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    {
      title: "Shinta VR analytics",
      description:
        "Millealab Analytics is a dashboard that visualizes student engagement and VR learning activity in real time, helping educators monitor and improve digital learning experiences.",
      image: "/images/shinta_vr.jpg",
      technologies: ["Vue.js", "Vuex", "Midtrans", "SCSS", "AXIOS", "Tailwind CSS","Firebase", "Firestore"],
      liveUrl: "https://millealab-analytics.firebaseapp.com/",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    {
      title: "Rumah Siap Kerja",
      description:
        "Rumah Siap Kerja is a career development platform that empowers young Indonesians with skills training, job opportunities, and mentorship to succeed in the workforce.",
      image: "/images/rsk_2.webp",
      technologies: ["Vue.js","Nuxt 3", "Pinia", "AXIOS", "Tailwind CSS",],
      liveUrl: "https://rumahsiapkerja.com/",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    
    {
      title: "Pokecoy",
      description:
        "A simple and interactive Pokédex app showcasing Pokémon data and details using a clean user interface.",
      image: "/images/pokecoy.png",
      technologies: ["React JS", "Redux", "Bootstrap", "Axios", "PokéAPI", "Vercel"],
      liveUrl: "https://pokedexorange.vercel.app",
      githubUrl: "https://github.com/gorillaworkout/pokecoy",
      featured: false,
    },
    {
      title: "Shinta VR License",
      description:
        "Millealab License Portal allows schools and institutions to manage their VR learning licenses, monitor usage, and activate access seamlessly.",
      image: "/images/shinta_vr.jpg",
      technologies: ["Vue.js", "Vuex", "Midtrans", "SCSS", "AXIOS", "Tailwind CSS","Firebase", "Firestore"],
      liveUrl: "https://license.millealab.com/",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    {
      title: "My Digilearn",
      description:
        "MyDigiLearn is an Indonesian e-learning platform offering digital courses and skill development for students and professionals.",
      image: "/images/mydg.png",
      technologies: ["Vue 2", "Vuex", "AXIOS", "Tailwind CSS", "Next JS", "Jest", "SonarCube"],
      liveUrl: "https://mydigilearn.id/",
      githubUrl: "https://github.com/gorillaworkout",
      featured: false,
    },
    {
      title: "Vanwijnen",
      description:
        "Van Wijnen is a Dutch construction and real estate company focused on building sustainable homes, neighborhoods, and communities.",
      image: "/images/Van-Wijnen.svg",
      technologies: ["Next.js", "Storybook","Sitecore", "Tailwind CSS", "Typescript", "Azure Storage",  ],
      liveUrl: "https://www.vanwijnen.nl/",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "GorillaTix",
      description:
        "GorillaTix is an online ticketing platform that allows users to discover, book, and securely pay for events in Indonesia.",
      image: "/images/gtix_red.webp",
      technologies: ["Next.js", "Tailwind CSS", "Typescript", "Firestore", "Firebase Storage", "Firebase Auth", "Upstash Redis", "Google Analytics", "Vercel", "Midtrans", "Zod"],
      liveUrl: "https://www.gorillatix.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <PremiumBackground variant="mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-white/10 rounded-lg mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-full max-w-3xl bg-white/10 rounded mx-auto animate-pulse" />
          </div>

          <div className="mb-20">
            <div className="h-8 w-48 bg-white/10 rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </div>

          <div>
            <div className="h-8 w-40 bg-white/10 rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <PremiumBackground variant="mesh" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <Sparkles className="h-6 w-6 text-white/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A curated collection of projects showcasing my expertise in full-stack development, UI/UX design, and modern
            web technologies. Each project represents a unique challenge and innovative solution.
          </p>

          <div className="flex justify-center mt-12">
            <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-full p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-full px-6 ${viewMode === "grid" ? "bg-white text-black" : "text-white hover:bg-white/10"}`}
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-full px-6 ${viewMode === "list" ? "bg-white text-black" : "text-white hover:bg-white/10"}`}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="flex items-center space-x-2 text-white/60">
              <Filter className="h-5 w-5" />
              <span className="text-sm">Handpicked highlights</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Other Projects</h2>
            <div className="flex items-center space-x-2 text-white/60">
              <span className="text-sm">{otherProjects.length} projects</span>
            </div>
          </div>

          <div
            className={`grid gap-8 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <WorkCTASection />
      </div>
    </div>
  )
}
