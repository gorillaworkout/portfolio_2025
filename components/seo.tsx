import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function SEO({
  title = "Gorilla Workout - Full Stack Developer Portfolio",
  description = "Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.",
  keywords = [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Gorilla Workout",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Design",
    "Modern Web Applications",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "Performance Optimization",
    "SEO Optimization",
  ],
  image = "/og-image.jpg",
  url = "https://gorillaworkout.id",
  type = "website",
  author = "Gorilla Workout",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gorilla Workout",
    jobTitle: "Full Stack Developer",
    description: description,
    url: url,
    image: image,
    sameAs: [
      "https://github.com/gorillaworkout",
      "https://linkedin.com/in/gorillaworkout",
      "https://twitter.com/gorillaworkout",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "REST APIs",
      "Web Development",
      "Full Stack Development",
      "UI/UX Design",
      "Performance Optimization",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "Indonesia",
    },
    email: "contact@gorillaworkout.id",
    telephone: "+62-87700600208",
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Gorilla Workout Portfolio" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@gorillaworkout" />
      <meta name="twitter:site" content="@gorillaworkout" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="Gorilla Workout Portfolio" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
