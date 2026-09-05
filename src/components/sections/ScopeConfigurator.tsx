import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Layers, Clock, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type ProjectType = "marketing" | "ecommerce" | "saas"
type Timeline = "standard" | "accelerated"
type Infra = "edge" | "dedicated"

export function ScopeConfigurator() {
  const [projectType, setProjectType] = useState<ProjectType>("marketing")
  const [timeline, setTimeline] = useState<Timeline>("standard")
  const [infra, setInfra] = useState<Infra>("edge")

  // Dynamic calculations based on state
  const getComplexityScore = () => {
    let score = 0
    if (projectType === "marketing") score += 20
    if (projectType === "ecommerce") score += 60
    if (projectType === "saas") score += 100

    if (timeline === "accelerated") score += 30
    if (infra === "dedicated") score += 40
    return score
  }

  const getEstimatedWeeks = () => {
    if (projectType === "marketing") return timeline === "accelerated" ? "2-3 Weeks" : "4-6 Weeks"
    if (projectType === "ecommerce") return timeline === "accelerated" ? "6-8 Weeks" : "10-12 Weeks"
    return timeline === "accelerated" ? "8-12 Weeks" : "16-20 Weeks"
  }

  const getTeamSize = () => {
    if (projectType === "saas" || infra === "dedicated") return "4 Engineers + 1 Tech Lead"
    if (projectType === "ecommerce") return "2 Engineers + 1 UI Dev"
    return "1 Full-Stack Engineer"
  }

  const complexityScore = getComplexityScore()

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Interactive Scope Configurator</h2>
          <p className="text-lg text-muted">
            Define your technical requirements below to instantly generate a custom architecture profile and delivery timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Controls - Left Side */}
          <div className="lg:col-span-7 space-y-8 p-6 md:p-8 bg-surface border border-border rounded-2xl">

            {/* Project Type */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">1. Project Architecture</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setProjectType("marketing")}
                  className={`p-4 rounded-xl text-left border transition-all ${projectType === "marketing" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Corporate Site</div>
                  <div className="text-xs text-muted">High-performance marketing</div>
                </button>
                <button
                  onClick={() => setProjectType("ecommerce")}
                  className={`p-4 rounded-xl text-left border transition-all ${projectType === "ecommerce" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">E-Commerce</div>
                  <div className="text-xs text-muted">Headless storefronts</div>
                </button>
                <button
                  onClick={() => setProjectType("saas")}
                  className={`p-4 rounded-xl text-left border transition-all ${projectType === "saas" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Custom SaaS</div>
                  <div className="text-xs text-muted">Complex web applications</div>
                </button>
              </div>
            </div>

            {/* Infrastructure */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">2. Target Infrastructure</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setInfra("edge")}
                  className={`p-4 rounded-xl text-left border transition-all ${infra === "edge" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Managed Edge (Vercel)</div>
                  <div className="text-xs text-muted">Zero DevOps, global distribution</div>
                </button>
                <button
                  onClick={() => setInfra("dedicated")}
                  className={`p-4 rounded-xl text-left border transition-all ${infra === "dedicated" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Dedicated Cloud (AWS)</div>
                  <div className="text-xs text-muted">Custom VPC, specific compliance</div>
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold">3. Delivery Velocity</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setTimeline("standard")}
                  className={`p-4 rounded-xl text-left border transition-all ${timeline === "standard" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Standard Sprint</div>
                  <div className="text-xs text-muted">Optimized for cost & quality</div>
                </button>
                <button
                  onClick={() => setTimeline("accelerated")}
                  className={`p-4 rounded-xl text-left border transition-all ${timeline === "accelerated" ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/50"
                    }`}
                >
                  <div className="font-bold mb-1">Accelerated Timeline</div>
                  <div className="text-xs text-muted">Dedicated rapid deployment squad</div>
                </button>
              </div>
            </div>

          </div>

          {/* Results Output - Right Side */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 p-8 bg-surface border border-border rounded-2xl h-full flex flex-col shadow-2xl">

              <h3 className="text-2xl font-bold mb-6 pb-6 border-b border-border">Scope Analysis</h3>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Estimated Timeline</p>
                  <p className="text-2xl font-bold text-primary">{getEstimatedWeeks()}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Required Team Composition</p>
                  <p className="text-lg font-medium">{getTeamSize()}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Architectural Complexity Score</p>
                  <div className="w-full bg-background rounded-full h-3 border border-border overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${(complexityScore / 170) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="text-xs text-muted mt-2 text-right">{complexityScore} / 170 pts</p>
                </div>

                <div className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-muted">Dedicated Technical Project Manager</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-muted">Automated QA & CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-muted">60-Day Post-Launch SLA Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button asChild className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold text-base">
                  <Link to="/contact">
                    Forward Specs to Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
