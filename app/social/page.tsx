import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Github, Linkedin, Twitter, Globe, Mail, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Connect with Gorilla Workout | Social Media & Links",
  description:
    "Connect with Gorilla Workout on social media. Follow on Instagram @gorillaworkout for updates on web development, React, Next.js projects, and frontend tips.",
  keywords: [
    "gorillaworkout",
    "Gorilla Workout Instagram",
    "Gorilla Workout social media",
    "developer Instagram Indonesia",
    "web developer Instagram",
    "frontend developer Instagram",
    "React developer Instagram",
    "Next.js developer Indonesia",
    "follow gorillaworkout",
    "gorillaworkout links",
    "Gorilla Workout GitHub",
    "Gorilla Workout LinkedIn",
  ],
  openGraph: {
    title: "Connect with Gorilla Workout | Social Media & Links",
    description: "Follow Gorilla Workout on Instagram, GitHub, LinkedIn, and more. Web developer based in Indonesia.",
    type: "profile",
  },
  alternates: {
    canonical: "/social",
  },
}

const socialLinks = [
  {
    name: "Instagram",
    username: "@gorillaworkout",
    url: "https://instagram.com/gorillaworkout",
    icon: Instagram,
    description: "Daily updates, behind the scenes, and web development tips",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    name: "GitHub",
    username: "@gorillaworkout",
    url: "https://github.com/gorillaworkout",
    icon: Github,
    description: "Open source projects and code repositories",
    color: "from-gray-600 to-gray-800",
    featured: false,
  },
  {
    name: "LinkedIn",
    username: "Gorilla Workout",
    url: "https://linkedin.com/in/gorillaworkout",
    icon: Linkedin,
    description: "Professional profile and career updates",
    color: "from-blue-600 to-blue-800",
    featured: false,
  },
  {
    name: "Twitter / X",
    username: "@gorillaworkout",
    url: "https://twitter.com/gorillaworkout",
    icon: Twitter,
    description: "Tech insights, quick tips, and industry news",
    color: "from-sky-500 to-sky-700",
    featured: false,
  },
]

const contactLinks = [
  {
    name: "Email",
    value: "contact@gorillaworkout.id",
    url: "mailto:contact@gorillaworkout.id",
    icon: Mail,
    description: "For business inquiries and collaborations",
  },
  {
    name: "Website",
    value: "gorillaworkout.id",
    url: "https://gorillaworkout.id",
    icon: Globe,
    description: "Portfolio and project showcase",
  },
]

export default function SocialPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Gorilla Workout",
      alternateName: "gorillaworkout",
      description: "Front End Developer based in Indonesia",
      url: "https://gorillaworkout.id",
      sameAs: [
        "https://instagram.com/gorillaworkout",
        "https://github.com/gorillaworkout",
        "https://linkedin.com/in/gorillaworkout",
        "https://twitter.com/gorillaworkout",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Connect With Me</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow my journey as a Front End Developer. I share tips, tutorials, and behind-the-scenes content on web
            development, React, Next.js, and modern frontend technologies.
          </p>
          <p className="text-gray-500 mt-4">
            Search for <span className="text-white font-semibold">gorillaworkout</span> on any platform
          </p>
        </div>

        <section className="mb-12" aria-labelledby="instagram-section">
          <h2 id="instagram-section" className="text-2xl font-bold mb-6 text-center">Follow on Instagram</h2>
          <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">@gorillaworkout</h3>
              <p className="text-gray-400 mb-6">Daily web development content, tutorials, and tips</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
                asChild
              >
                <a href="https://instagram.com/gorillaworkout" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12" aria-labelledby="social-platforms-section">
          <h2 id="social-platforms-section" className="text-2xl font-bold mb-6 text-center">Other Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks
              .filter((link) => !link.featured)
              .map((link) => {
                const Icon = link.icon
                return (
                  <Card
                    key={link.name}
                    className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{link.name}</h3>
                          <p className="text-gray-400 text-sm mb-2">{link.username}</p>
                          <p className="text-gray-500 text-sm mb-4">{link.description}</p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Profile
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </section>

        <section className="mb-12" aria-labelledby="contact-section">
          <h2 id="contact-section" className="text-2xl font-bold mb-6 text-center">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <Card
                  key={link.name}
                  className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{link.name}</h3>
                        <p className="text-gray-400 text-sm">{link.value}</p>
                        <p className="text-gray-500 text-xs mt-1">{link.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="text-center py-8 border-t border-white/10" aria-labelledby="quick-links-section">
          <h2 id="quick-links-section" className="text-xl font-bold mb-4">Quick Links</h2>
          <p className="text-gray-400 mb-4">Search for me using these keywords:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "gorillaworkout",
              "Gorilla Workout",
              "Gorilla Workout Instagram",
              "Gorilla Workout GitHub",
              "Gorilla Workout Developer",
              "frontend developer Indonesia",
            ].map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <div className="text-center mt-12">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
