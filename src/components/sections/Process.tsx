import { motion } from "framer-motion"
import { Search, PenTool, Braces, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Fixed scope & tech audit",
    icon: <Search className="w-6 h-6" />,
    details: "We start by analyzing your current infrastructure, identifying bottlenecks, and defining a fixed-scope technical roadmap to ensure zero budget overruns."
  },
  {
    number: "02",
    title: "Architecture",
    description: "Schema design & wireframing",
    icon: <PenTool className="w-6 h-6" />,
    details: "Before writing a line of code, we design the database schema, API contracts, and high-fidelity wireframes for your approval."
  },
  {
    number: "03",
    title: "Sprint Build",
    description: "Bi-weekly demo & QA testing",
    icon: <Braces className="w-6 h-6" />,
    details: "Our engineering team executes in strict 2-week sprints. You receive live staging links and QA reports at the end of every cycle."
  },
  {
    number: "04",
    title: "SLA & Deploy",
    description: "Automated CI/CD & live handoff",
    icon: <Rocket className="w-6 h-6" />,
    details: "We configure automated deployment pipelines, perform stress tests, and provide an SLA-backed guarantee for post-launch monitoring."
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Operating Framework</h2>
          <p className="text-lg text-muted">
            We don't do agency fluff. We follow a disciplined, engineering-first methodology that guarantees delivery on time and on budget.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border z-0" />

            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon & Number */}
                <div className="w-24 h-24 rounded-2xl bg-background border border-border flex flex-col items-center justify-center mb-6 shadow-sm group hover:border-accent transition-colors relative">
                  <span className="absolute -top-3 -right-3 text-sm font-bold text-muted bg-surface px-2 py-1 rounded border border-border">
                    {step.number}
                  </span>
                  <div className="text-accent mb-2">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-4">{step.description}</p>
                <p className="text-muted text-sm leading-relaxed">{step.details}</p>
              </motion.div>
            ))}
            
          </div>
        </div>
        
      </div>
    </section>
  )
}
