import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const models = [
  {
    title: "Turnkey Deployment",
    description: "Fast commercial launches for businesses that need immediate market presence without compromising quality.",
    bestFor: "Marketing sites, portfolio showcases, lead-gen landing pages.",
    delivery: "48–72 hours",
    features: [
      "Pre-built premium templates",
      "Custom brand token mapping",
      "Standard Cloudflare edge setup",
      "Basic SEO optimization"
    ],
    cta: "Choose Turnkey",
    highlight: false
  },
  {
    title: "Custom Web Platform",
    description: "Bespoke engineering for scaling businesses that require specific logic and third-party integrations.",
    bestFor: "E-commerce, B2B SaaS marketing, highly interactive platforms.",
    delivery: "3–6 weeks",
    features: [
      "Tailor-made React/Next.js UI",
      "Custom API integrations (Stripe, CRM)",
      "Dedicated AWS/Vercel configuration",
      "Advanced animations & micro-interactions",
      "Headless CMS integration"
    ],
    cta: "Schedule Scoping Call",
    highlight: true // The middle card is usually highlighted
  },
  {
    title: "Enterprise Dedicated",
    description: "Mission-critical system architecture and long-term retainer support for complex corporate workflows.",
    bestFor: "Regulated industries (Fintech/Health), large-scale data platforms.",
    delivery: "Sprint-based Retainer",
    features: [
      "Custom cloud architecture & DB design",
      "Role-Based Access Control (RBAC)",
      "Automated CI/CD deployment pipelines",
      "24/7 monitored SLA & maintenance",
      "Dedicated Technical Lead"
    ],
    cta: "Inquire for Enterprise",
    highlight: false
  }
]

export function EngagementModels() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Engagement Models</h2>
          <p className="text-lg text-muted">
            We don't do rigid pricing tiers. We offer structured engagement models designed to align with your exact business maturity and technical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                model.highlight 
                  ? "bg-accent/10 border-2 border-accent shadow-2xl shadow-accent/20 z-10 md:-my-4" 
                  : "bg-background border border-border"
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
              <p className="text-muted text-sm mb-6 pb-6 border-b border-border">{model.description}</p>
              
              <div className="mb-6 space-y-4">
                <div>
                  <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Best For</span>
                  <p className="text-sm font-medium">{model.bestFor}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Estimated Delivery</span>
                  <p className="text-sm font-medium">{model.delivery}</p>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-4">Included in Scope</span>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${model.highlight ? 'text-accent' : 'text-emerald-500'}`} />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                asChild
                className={`w-full h-12 text-sm font-bold mt-auto ${
                  model.highlight 
                    ? "bg-accent hover:bg-accent/90 text-white" 
                    : "bg-surface hover:bg-border text-primary border border-border"
                }`}
              >
                <Link to="/contact">
                  {model.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
