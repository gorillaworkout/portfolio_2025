"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { PremiumBackground } from "@/components/premium-background"
import { sendToWhatsApp } from "@/lib/whatsapp"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    sendToWhatsApp(data)

    toast({
      title: "Message sent to WhatsApp!",
      description: "Your message has been forwarded to WhatsApp. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "darmawanbayu1@gmail.com",
      href: "mailto:darmawanbayu1@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+62 123 456 7890",
      href: "tel:+621234567890",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+6287700600208",
      href: "https://wa.me/6287700600208",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <PremiumBackground variant="dots" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-black/20 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-6 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    "Sending to WhatsApp..."
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send to WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-white">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-white">{info.title}</h3>
                          {info.href !== "#" ? (
                            <a href={info.href} className="text-gray-400 hover:text-white transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-400">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
                <p className="text-gray-400 mb-4">
                  I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                  specific project in mind or just want to explore possibilities, I'd love to chat.
                </p>
                <p className="text-gray-400">
                  Messages are automatically forwarded to WhatsApp for faster response. I typically respond within 2-4
                  hours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
