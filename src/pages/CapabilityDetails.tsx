import { useParams, Link } from "react-router-dom"
import { services } from "@/config/capabilities"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid, Cpu, Rocket } from "lucide-react"

export function CapabilityDetails() {
  const { id } = useParams<{ id: string }>()
  
  const capability = services.find(s => s.id === id)

  if (!capability) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Capability Not Found</h1>
        <p className="text-muted mb-8">The service specification you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex items-center text-sm text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary font-medium">{capability.title}</span>
        </div>
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            {capability.icon}
            <span className="text-xs font-medium text-accent tracking-wide uppercase">Technical Specification</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {capability.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            {capability.longDescription}
          </p>
          <Button size="lg" className="h-14 px-8 text-base bg-accent hover:bg-accent/90 text-white rounded-lg" asChild>
            <Link to="/contact">
              Book Discovery Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Scope & Deliverables */}
      <section className="border-t border-border bg-surface py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Scope & Deliverables</h2>
              </div>
              <p className="text-muted text-lg mb-8">
                {capability.solution}
              </p>
              <ul className="space-y-4">
                {capability.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start bg-background p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Process */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold">Delivery Methodology</h2>
              </div>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {capability.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-background shadow-sm">
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Architecture & Tech Stack</h2>
        <p className="text-muted max-w-2xl mx-auto mb-12">
          We utilize industry-leading, enterprise-grade technologies to guarantee performance, security, and scalability.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {capability.techStack.map((tech, i) => (
            <div key={i} className="px-6 py-3 rounded-full bg-surface border border-border text-sm font-medium hover:border-primary/50 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your enterprise?</h2>
          <p className="text-accent-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Let's discuss how our {capability.title.toLowerCase()} capabilities can solve your operational bottlenecks.
          </p>
          <Button size="lg" className="bg-white text-accent hover:bg-white/90 h-14 px-8 text-base rounded-lg" asChild>
            <Link to="/contact">
              Schedule a Discovery Call
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
