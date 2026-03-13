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
  breadcrumbs?: { name: string; url: string }[]
  article?: {
    headline?: string
    description?: string
    image?: string
    datePublished?: string
    dateModified?: string
    author?: string
  }
}

export function SEO({
  title = "Gorilla Workout - Front End Developer Portfolio | Indonesia",
  description = "Gorilla Workout - Professional Front End Developer in Indonesia specializing in React, Next.js, Node.js, and modern web technologies. Hire me for your next project!",
  keywords = [
    "Gorilla Workout",
    "gorillaworkout",
    "Gorilla Workout Portfolio",
    "Gorilla Workout Indonesia",
    "Gorilla Workout Developer",
    "Front End Developer Indonesia",
    "React Developer Indonesia",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio Developer",
    "Full Stack Developer",
    "Web Developer Jakarta",
    "jasa website",
    "pembuat website",
    "developer Indonesia",
    "frontend specialist",
    "react specialist",
    "nextjs expert",
  ],
  image = "/images/gorillalogops.png",
  url = "https://gorillaworkout.id",
  type = "website",
  author = "Gorilla Workout",
  publishedTime,
  modifiedTime,
  breadcrumbs,
  article,
}: SEOProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gorilla Workout",
    alternateName: "gorillaworkout",
    jobTitle: "Front End Developer",
    description: description,
    url: url,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    },
    sameAs: [
      "https://instagram.com/gorillaworkout",
      "https://github.com/gorillaworkout",
      "https://linkedin.com/in/gorillaworkout",
      "https://twitter.com/gorillaworkout",
      "https://gorillaworkout.id",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "GraphQL",
      "REST APIs",
      "Web Development",
      "Front End Development",
      "Full Stack Development",
      "UI/UX Design",
      "Performance Optimization",
      "SEO",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Gorilla Workout",
      url: "https://gorillaworkout.id",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "Indonesia",
    },
    email: "contact@gorillaworkout.id",
    telephone: "+62-877-0060-0208",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gorilla Workout Portfolio",
    alternateName: "gorillaworkout",
    url: "https://gorillaworkout.id",
    description: description,
    publisher: {
      "@type": "Person",
      name: "Gorilla Workout",
      url: "https://gorillaworkout.id",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gorillaworkout.id/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
    copyrightHolder: {
      "@type": "Person",
      name: "Gorilla Workout",
    },
    copyrightYear: new Date().getFullYear(),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gorilla Workout - Web Development Services",
    alternateName: "gorillaworkout",
    image: image,
    url: url,
    telephone: "+62-877-0060-0208",
    email: "contact@gorillaworkout.id",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jakarta",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "Web Development",
      "Front End Development",
      "React Development",
      "Next.js Development",
      "UI/UX Design",
      "Website Optimization",
      "E-commerce Development",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  }

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : null

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline || title,
        description: article.description || description,
        image: article.image || image,
        datePublished: article.datePublished || publishedTime,
        dateModified: article.dateModified || modifiedTime || article.datePublished || publishedTime,
        author: {
          "@type": "Person",
          name: article.author || author,
          url: "https://gorillaworkout.id",
        },
        publisher: {
          "@type": "Person",
          name: "Gorilla Workout",
          logo: {
            "@type": "ImageObject",
            url: image,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }
    : null

  const socialProfileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Gorilla Workout",
      alternateName: "gorillaworkout",
      description: description,
      url: url,
      image: image,
      sameAs: [
        "https://instagram.com/gorillaworkout",
        "https://github.com/gorillaworkout",
        "https://linkedin.com/in/gorillaworkout",
        "https://twitter.com/gorillaworkout",
      ],
    },
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
      <meta name="application-name" content="Gorilla Workout Portfolio" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

      <link rel="icon" href="/images/gorillalogops.png" />
      <link rel="shortcut icon" href="/images/gorillalogops.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/gorillalogops.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/gorillalogops.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/gorillalogops.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProfileSchema) }} />
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
    </Head>
  )
}
