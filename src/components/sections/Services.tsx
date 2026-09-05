import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { services } from "@/config/capabilities"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Capabilities & Solutions</h2>
          <p className="text-lg text-muted">
            We don't just write code. We architect solutions that solve specific business bottlenecks.
          </p>
        </div>

        <Tabs defaultValue="engineering" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-background border border-border">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="px-6 py-3 data-[state=active]:bg-accent data-[state=active]:text-white">
                  {service.icon}
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0 outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden bg-background shadow-xl"
              >
                {/* Left side content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <div className="mb-6 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-destructive uppercase tracking-wider mb-1 block">The Problem</span>
                      <p className="text-muted">{service.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1 block">The Solution</span>
                      <p className="text-primary">{service.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider mb-3 block">Deliverables</span>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-lg px-6 h-12" asChild>
                      <Link to={`/capabilities/${service.id}`}>
                        View Scope & Specs
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right side code preview */}
                <div className="bg-[#0D1117] border-t lg:border-t-0 lg:border-l border-border p-6 md:p-8 flex items-center justify-center">
                  <div className="w-full h-full min-h-[300px] rounded-lg border border-white/10 bg-black/40 overflow-hidden flex flex-col">
                    <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <span className="ml-2 text-xs font-mono text-white/50">preview.ts</span>
                    </div>
                    <div className="p-4 overflow-x-auto text-sm font-mono text-emerald-400/90 whitespace-pre">
                      {service.codePreview}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
