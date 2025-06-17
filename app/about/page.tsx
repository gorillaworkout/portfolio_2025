"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PremiumBackground } from "@/components/premium-background";
import { AboutSkeleton } from "@/components/skeleton";
import { Instagram, Linkedin, Github } from "lucide-react"

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "React",
    "Next.js",
    "Nuxt",
    "Gatsby",
    "TypeScript",
    "Firebase",
    "Firestore",
    "Firebase Auth",
    "Node.js",
    "AWS",
    "Docker",
    "REST APIs",
    "Tailwind CSS",
    "Three.js",
    "WebGL",
    "Git",
    "CI/CD",
    "SonarCube",
    "Azure",
    "Sitecore",
    "Midtrans",
    "Xendit",
    "K6",
    "Lucide-React",
    "jQuery",
  ];

  const experience = [
    {
      title: "Front End Developer",
      company: "Uxbee - Netherlands",
      period: "Aug 2023 - July 2025",
      description:
        "Developed reusable components using Next.js and Sitecore, built UI libraries with Storybook, and collaborated with UI/UX, Product, and QA teams. Contributed to improving code architecture and quality alongside the team lead.",
    },
    {
      title: "Full Stack Developer",
      company: "Motio Labs - Indonesia",
      period: "Jan 2023 - Aug 2023",
      description:
        "Built dynamic web applications using Vue 3 and Next.js, including a social SEO sharing network. Collaborated closely with UI/UX, Product, and QA teams, and supported the team leader in designing scalable and maintainable code structures.",
    },
    {
      title: "Frontend Developer",
      company: "Rumah Siap Kerja - Indonesia (Freelance)",
      period: "Sept 2022 - Jan 2023",
      description:
        "Developed frontend features using Vue 3, migrated existing projects to Nuxt 3, and worked closely with design and QA teams to ensure high-quality UI/UX and code maintainability.",
    },
    {
      title: "Frontend Developer",
      company: "Asosiasi Pilot Garuda Indonesia (Freelance)",
      period: "Sept 2022 - Dec 2022",
      description:
        "Developed an election website for APG using PHP, ensuring performance, security, and usability for internal organizational voting needs.",
    },
    {
      title: "Frontend Developer",
      company: "Shinta VR - Indonesia",
      period: "March 2022 - Sept 2022",
      description:
        "Created Vue 3-based web applications and integrated Xendit as a payment gateway. Worked with the UI/UX team to ensure clean and maintainable frontend code.",
    },
    {
      title: "Frontend Developer",
      company: "Vantsing International - Indonesia",
      period: "June 2021 - Feb 2022",
      description:
        "Rebuilt an e-commerce site from vanilla JS to React, integrated Accurate API for backend accounting, and collaborated with the UI/UX team to improve frontend architecture.",
    },
    {
      title: "Frontend Developer",
      company: "Moojol Indonesia - Indonesia",
      period: "Feb 2021 - June 2021",
      description:
        "Developed a company profile website using React, with custom UI layouts and responsive design to enhance brand presentation and usability.",
    },
    {
      title: "IT Support",
      company: "Elwilis Mitra Sejahtera - Indonesia",
      period: "Oct 2018 - June 2024",
      description:
        "Installed and maintained FedEx server systems and managed integrations with Indonesian Customs. Handled infrastructure troubleshooting and daily technical support.",
    },
    {
      title: "Customer Support",
      company: "PT EDI Indonesia - Indonesia",
      period: "Dec 2014 - Sept 2018",
      description:
        "Provided customs-related technical support, managed Xtreme and X2 application installations, and ensured accurate data response processing for client operations.",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <PremiumBackground variant="gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AboutSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <PremiumBackground variant="gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi! I’m Bayu Darmawan, a Front-End Developer with a passion for
            crafting fast, responsive, and accessible web experiences. I
            specialize in building modern UIs using Next.js, TypeScript, and
            Tailwind CSS, and I love working with tools like Firebase, and
            Vercel to create scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">My Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I didn’t start my career in tech. Back then, I was just
                curious—wondering how websites worked and how apps were built.
                That curiosity led me to join a coding bootcamp, and it
                completely changed everything.
              </p>
              <p>
                The journey wasn’t easy, but I fell in love with building
                things. I learned fast, worked hard, and started turning ideas
                into real products. Now, I work as a front-end developer using
                tools like React, Next.js, Vue, and Sitecore. I'm focused on
                creating smooth user experiences, optimizing performance, and
                exploring cool stuff like 3D on the web.
              </p>
              <p>
                From someone with zero background in code, I’ve grown into a
                developer who loves what he does every day.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-black/30 backdrop-blur-sm text-white border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Connect with Me
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gorillaworkout"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/gorillaworkout"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.github.com/gorillaworkout"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-400">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Quality First
              </h3>
              <p className="text-gray-400">
                I believe in writing clean, maintainable code and creating
                products that stand the test of time.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-400">
                Technology evolves rapidly, and I'm committed to staying current
                with the latest trends and best practices.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                User-Centric
              </h3>
              <p className="text-gray-400">
                Every decision I make is guided by how it will impact the end
                user's experience.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
