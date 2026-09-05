import { About } from "@/components/sections/About"
import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutPage() {
  return (
    <div className="pt-32 pb-8 bg-background">
      <div className="container mx-auto px-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-muted/60 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted leading-relaxed">
              We are a collective of engineers, designers, and strategists dedicated to transforming corporate operations through high-performance digital platforms.
            </p>
          </div>

          {/* Team Avatars Visual */}
          <div className="flex items-center justify-start md:justify-end">
            <motion.div
              className="flex items-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  }
                }
              }}
            >
              {[
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className={`relative rounded-full border-[3px] border-background overflow-hidden w-16 h-16 md:w-20 md:h-20 shadow-sm ${i !== 0 ? "-ml-4 md:-ml-6" : ""}`}
                >
                  <img
                    src={src}
                    alt="Principal Engineer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <About compactTopPadding={true} />

      {/* Refined Inline CTA */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface border border-border p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to discuss your architecture?</h2>
          <p className="text-muted text-lg mb-8 max-w-2xl">
            Speak directly with our principal engineers to map out a precise deployment strategy for your enterprise. No sales reps.
          </p>
          <Button asChild size="lg" className="h-12 px-8 text-background rounded-lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
