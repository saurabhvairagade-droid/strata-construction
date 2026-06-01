import { Navbar } from '@/components/layout/Navbar'
import { Marquee } from '@/components/ui/Marquee'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { WhyStrata } from '@/components/sections/WhyStrata'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { Team } from '@/components/sections/Team'
import { ContactForm } from '@/components/sections/ContactForm'
import { Footer } from '@/components/layout/Footer'
import { client, urlFor } from '@/sanity/client'

export const dynamic = 'force-dynamic'; // Server-Side Rendering

export default async function Home() {
  const query = `*[_type == "landingPage"][0]`
  const landingPageData = await client.fetch(query, {}, { cache: 'no-store' })

  // Resolve strings for the Hero component
  const heroTitle = landingPageData?.heroTitle || null;
  const heroSubtitle = landingPageData?.heroSubtitle || null;
  const heroImageUrl = landingPageData?.heroImage ? urlFor(landingPageData.heroImage).url() : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Marquee />
      <main className="flex-1">
        <Hero 
          title={heroTitle} 
          subtitle={heroSubtitle} 
          imageUrl={heroImageUrl} 
        />
        <StatsBar />
        <FeaturedProjects />
        <WhyStrata />
        <HowItWorks />
        <Testimonials />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
