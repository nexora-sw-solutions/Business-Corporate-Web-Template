import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Terminal, BarChart, Users } from "lucide-react"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg-split.jpg"
        alt="Corporate Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Primary Directional Mask (Protects Text) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            className="w-full lg:w-[55%] xl:w-[50%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/*<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent tracking-wide uppercase">Available for Q4 Projects</span>
            </div>
            */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Engineered Digital Platforms That Turn Complex Operations into <span className="text-accent">Revenue.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-10 max-w-xl leading-relaxed">
              We design and build high-performance web systems with architectural reliability, unmatched speed, and flawless execution. Scale your enterprise without the technical debt.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button size="lg" className="h-14 px-8 text-base bg-accent hover:bg-accent/90 text-white rounded-lg" asChild>
                <Link to="/contact">
                  Schedule Technical Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <a
                href="#showcase"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('showcase');
                  if (element) {
                    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
                  }
                }}
                className="text-sm font-medium hover:text-accent transition-colors flex items-center"
              >
                Explore Interactive Showcase <span className="ml-2">↓</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Interactive UI Mockup */}
          <motion.div
            className="w-full lg:w-[45%] xl:w-[50%]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
              {/* Glow effect behind the container */}
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />

              {/* Glass container */}
              <div className="relative w-full h-full rounded-2xl border border-border bg-surface/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Browser Header */}
                <div className="h-12 border-b border-border bg-background/50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto w-1/2 h-6 rounded-md bg-background border border-border flex items-center justify-center">
                    <span className="text-[10px] text-muted font-mono">dashboard.nexora.app</span>
                  </div>
                </div>

                {/* Interactive UI Mockup */}
                <div className="p-4 flex-1">
                  <Tabs defaultValue="analytics" className="w-full h-full flex flex-col">
                    <TabsList className="grid w-full grid-cols-3 mb-6 bg-background/50">
                      <TabsTrigger value="analytics" className="text-xs">
                        <BarChart className="w-3 h-3 mr-2" /> Analytics
                      </TabsTrigger>
                      <TabsTrigger value="intake" className="text-xs">
                        <Users className="w-3 h-3 mr-2" /> Client Intake
                      </TabsTrigger>
                      <TabsTrigger value="architecture" className="text-xs">
                        <Terminal className="w-3 h-3 mr-2" /> System Map
                      </TabsTrigger>
                    </TabsList>

                    <div className="relative flex-1 bg-background rounded-lg border border-border p-4">
                      {/* Analytics Tab */}
                      <TabsContent value="analytics" className="h-full m-0 data-[state=active]:animate-in data-[state=active]:fade-in-50">
                        <div className="flex justify-between items-end mb-6">
                          <div>
                            <p className="text-xs text-muted mb-1">Total Revenue Processed</p>
                            <p className="text-3xl font-bold">LKR 42,104,890</p>
                          </div>
                          <div className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                            +14.2% YoY
                          </div>
                        </div>
                        {/* Mock Chart */}
                        <div className="w-full h-32 flex items-end justify-between gap-2">
                          {[40, 70, 45, 90, 65, 110, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-full bg-accent/20 rounded-t-sm flex flex-col justify-end"
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            >
                              <div className="w-full bg-accent rounded-t-sm" style={{ height: `${h * 0.7}%` }} />
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>

                      {/* Intake Tab */}
                      <TabsContent value="intake" className="h-full m-0 data-[state=active]:animate-in data-[state=active]:fade-in-50 space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium">JD</div>
                            <div>
                              <p className="text-sm font-medium">John Doe</p>
                              <p className="text-xs text-muted">john@enterprise.com</p>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded">Pending Review</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-surface rounded" />
                          <div className="h-2 w-4/5 bg-surface rounded" />
                          <div className="h-2 w-full bg-surface rounded" />
                          <div className="h-2 w-2/3 bg-surface rounded" />
                        </div>
                      </TabsContent>

                      {/* Architecture Tab */}
                      <TabsContent value="architecture" className="h-full m-0 data-[state=active]:animate-in data-[state=active]:fade-in-50 font-mono text-[10px]">
                        <div className="text-muted mb-2"># System Architecture Diagram</div>
                        <div className="space-y-1">
                          <div className="text-blue-400">[Client] <span className="text-muted">--&gt;</span> [Edge CDN]</div>
                          <div className="pl-4 text-muted">|</div>
                          <div className="pl-4 text-emerald-400">└─&gt; [Next.js App Server]</div>
                          <div className="pl-12 text-muted">|</div>
                          <div className="pl-12 text-yellow-400">├─&gt; [Redis Cache]</div>
                          <div className="pl-12 text-purple-400">└─&gt; [PostgreSQL Cluster]</div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
