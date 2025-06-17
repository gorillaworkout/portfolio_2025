"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    featured?: boolean
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden rounded-2xl group-hover:border-white/20 transition-all duration-300 transform group-hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
          />

          {/* Simple overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/10 text-white"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Project Number */}
          <div className="absolute top-4 left-4">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-white font-medium text-sm">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-colors text-xs px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="bg-white/5 text-white/60 border border-white/10 text-xs px-3 py-1">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function FeaturedProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="relative bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-xl border border-white/20 overflow-hidden rounded-3xl group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-2">
        {/* Featured Badge */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2">
            <span className="text-white text-xs font-semibold">FEATURED</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden h-80">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
          />

          {/* Simple overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black/20 backdrop-blur-md border border-white/30 hover:bg-white/10 text-white px-8"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2 text-white/60">
                <span className="text-sm">Project #{String(index + 1).padStart(2, "0")}</span>
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <span className="text-sm">Featured Work</span>
              </div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/80">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/10 text-white border border-white/20 hover:border-white/30 transition-all duration-300 px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
