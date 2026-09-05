import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, PlayCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = ["All", "Fintech & Audit", "Automotive", "Logistics", "E-Commerce"]

const cases = [
  {
    id: 1,
    title: "How We Reduced Claims Processing Time by 74%",
    category: "Fintech & Audit",
    timeline: "6-Week Delivery",
    impact: ["+340% Conversions", "Zero-Loss Migration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    fullStory: "In the highly regulated fintech space, speed and security are paramount. We architected a custom claims processing portal that integrated directly with legacy mainframes while providing a lightning-fast React frontend for operators. The result was a 74% reduction in manual processing time and a flawless audit trail."
  },
  {
    id: 2,
    title: "Global Logistics Tracking Dashboard Restructure",
    category: "Logistics",
    timeline: "12-Week Delivery",
    impact: ["Real-time Sync", "40% Load Reduction"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    fullStory: "A global logistics provider was struggling with delayed data syncs across their fleet. We rebuilt their entire tracking dashboard using Next.js and WebSockets, enabling real-time mapping for over 10,000 active vehicles with zero noticeable latency."
  },
  {
    id: 3,
    title: "Enterprise Dealership CRM and Inventory System",
    category: "Automotive",
    timeline: "8-Week Delivery",
    impact: ["100k+ Listings", "Sub-second Search"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    fullStory: "We replaced an off-the-shelf CRM with a bespoke Next.js inventory system. Dealerships can now manage over 100,000 active listings with sub-second search filtering, directly increasing sales floor conversion rates."
  },
  {
    id: 4,
    title: "High-Volume E-Commerce Checkout Optimization",
    category: "E-Commerce",
    timeline: "4-Week Sprint",
    impact: ["LKR 2.4M Revenue Lift", "Stripe Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    fullStory: "Cart abandonment was costing the client millions. We audited and rebuilt their checkout flow, removing friction points and integrating advanced Stripe routing. This single sprint resulted in a measured $2.4M revenue lift in Q1."
  }
]

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCase) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedCase])

  const filteredCases = activeFilter === "All"
    ? cases
    : cases.filter(c => c.category === activeFilter)

  return (
    <section id="showcase" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Proven Enterprise Results</h2>
            <p className="text-lg text-muted">
              Explore our recent deployments and see how we solve complex architectural challenges for global brands.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                    ? "bg-primary text-background"
                    : "bg-surface text-muted hover:text-primary hover:bg-border"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((study) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={study.id}
                className="group cursor-pointer flex flex-col h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/50 transition-colors"
                onClick={() => setSelectedCase(study)}
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-muted text-xs font-bold rounded-full">
                      {study.timeline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.impact.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <div className="mt-auto flex items-center text-sm font-bold text-accent">
                    Read Architecture Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Centered Modal for Case Study Details */}
      <AnimatePresence>
        {selectedCase && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm touch-none"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain bg-background rounded-2xl shadow-2xl border border-border z-50 flex flex-col"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-background/50 backdrop-blur-sm hover:bg-background rounded-full border border-border text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex flex-col min-h-full">
                <div className="h-64 sm:h-80 relative bg-muted shrink-0">
                  <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCase.impact.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">{selectedCase.title}</h3>
                    <p className="text-base text-muted font-medium">
                      {selectedCase.timeline} • {selectedCase.category}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4">The Challenge</h4>
                      <p className="text-muted leading-relaxed text-lg">{selectedCase.fullStory}</p>
                    </div>

                    <div className="p-6 sm:p-8 bg-surface border border-border rounded-xl">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                        <PlayCircle className="w-5 h-5 mr-2 text-accent" />
                        Live Demo Request
                      </h4>
                      <p className="text-base text-muted mb-6">Interested in seeing the actual architecture behind this implementation?</p>
                      <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 h-12 text-base" asChild>
                        <Link to="/contact" onClick={() => setSelectedCase(null)}>
                          Request Technical Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
