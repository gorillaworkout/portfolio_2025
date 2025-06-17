import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Gorilla Workout</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about creating modern web applications with cutting-edge technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/work" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Work
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@gorillaworkout.id" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Gorilla Workout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
