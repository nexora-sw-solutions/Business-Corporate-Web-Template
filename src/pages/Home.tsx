import { Hero } from "@/components/sections/Hero"
import { TrustMarquee } from "@/components/sections/TrustMarquee"
import { Process } from "@/components/sections/Process"
import { SocialProof } from "@/components/sections/SocialProof"
import { EngagementModels } from "@/components/sections/EngagementModels"
import { ScopeConfigurator } from "@/components/sections/ScopeConfigurator"
import { CTA } from "@/components/sections/CTA"
import { Services } from "@/components/sections/Services"
import { CaseStudies } from "@/components/sections/CaseStudies"

export function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Services />
      <CaseStudies />
      <Process />
      <SocialProof />
      <EngagementModels />
      <ScopeConfigurator />
      <CTA />
    </>
  )
}
