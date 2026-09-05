import { motion } from "framer-motion"
import { ArrowRight, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-accent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white mb-8">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wide uppercase">Ready to Initialize</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
              Stop fighting with legacy code. Start scaling your enterprise.
            </h2>

            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Book a 30-minute discovery call with our principal engineers. We'll audit your current architecture and map out a precise deployment strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-white text-accent hover:bg-white/90 rounded-lg font-bold">
                <Link to="/contact">
                  Schedule Technical Discovery
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white/30 text-primary hover:bg-white/10 rounded-lg">
                <Link to="/resources">
                  View Documentation
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/60 mt-8">
              No sales reps. You will speak directly with an engineer.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
