import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

interface AboutProps {
  compactTopPadding?: boolean;
}

export function About({ compactTopPadding = false }: AboutProps = {}) {
  return (
    <section id="about" className={`relative overflow-hidden bg-background ${compactTopPadding ? "pt-16 pb-24 md:pt-16 md:pb-32" : "py-24 md:py-32"}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Heading & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              We engineer platforms for businesses that cannot afford to fail.
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-xl text-muted leading-relaxed mb-8">
              {siteConfig.name} is an elite engineering agency specializing in high-performance corporate web systems. 
              We bridge the gap between world-class design and rigorous technical architecture.
            </p>
            <p className="text-base text-muted/80 leading-relaxed">
              Unlike traditional agencies that focus solely on aesthetics, our background is in deep-stack enterprise engineering. 
              We believe that a corporate website is not just a brochure—it is a critical revenue engine that demands speed, security, and scalability.
            </p>
          </motion.div>

          {/* Right Column: Leadership / Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <div className="p-8 rounded-2xl bg-surface border border-border group hover:border-accent/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Years of Engineering</p>
              <p className="text-sm text-muted/80">Deep technical experience across fintech, logistics, and enterprise SaaS.</p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="p-8 rounded-2xl bg-surface border border-border group hover:border-accent/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">0</p>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Failed Deployments</p>
              <p className="text-sm text-muted/80">We guarantee flawless handoffs through rigorous CI/CD and QA processes.</p>
            </div>

            {/* Leadership Placeholder */}
            <div className="sm:col-span-2 p-8 rounded-2xl bg-surface border border-border flex flex-col md:flex-row items-center gap-6 group hover:border-accent/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">L</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg font-bold text-primary">Led by Principal Engineers</p>
                <p className="text-sm text-muted mb-4">Our technical leadership directly oversees every project architecture from discovery to deployment.</p>
                <Link to="/team" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                  Meet our technical team <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
