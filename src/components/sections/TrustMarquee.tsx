import { motion } from "framer-motion"
import { ShieldCheck, Server, Globe2, Activity, HardDrive, Database } from "lucide-react"

const metrics = [
  { label: "Core system uptime", value: "99.99%" },
  { label: "Average edge API latency", value: "< 120ms" },
  { label: "Client revenue processed", value: "$42M+" },
  { label: "Turnkey deployment window", value: "48 Hours" },
]

export function TrustMarquee() {
  return (
    <section className="py-12 md:py-16 bg-surface border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-border/50 pb-12">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-primary">
                {metric.value}
              </p>
              <p className="text-sm font-medium text-muted uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface to-transparent" />
          
          {/* Scrolling Content */}
          <motion.div 
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicated for infinite scroll effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24">
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-bold text-lg">SOC2 Type II</span>
                </div>
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <Server className="w-6 h-6" />
                  <span className="font-bold text-lg">ISO 27001</span>
                </div>
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <Globe2 className="w-6 h-6" />
                  <span className="font-bold text-lg">GlobalEdge CDN</span>
                </div>
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <Activity className="w-6 h-6" />
                  <span className="font-bold text-lg">Datadog Monitored</span>
                </div>
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <HardDrive className="w-6 h-6" />
                  <span className="font-bold text-lg">AWS Enterprise</span>
                </div>
                <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                  <Database className="w-6 h-6" />
                  <span className="font-bold text-lg">Vercel Partner</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
