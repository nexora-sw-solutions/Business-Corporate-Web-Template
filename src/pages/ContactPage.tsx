import { Link } from "react-router-dom"
import { ArrowLeft, Clock, CheckCircle, Video } from "lucide-react"

export function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-muted/60 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Discovery</h1>
        <p className="text-xl text-muted max-w-2xl mb-12">
          Ready to scale your architecture? Book a technical discovery call directly with our engineering team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Enterprise Inquiries</h3>
              <p className="text-muted mb-2">Our technical leadership is available to discuss enterprise-grade architecture and custom deployments.</p>
              <a href="mailto:enterprise@nexora.example.com" className="text-accent font-medium hover:underline">contact@mail.nexorasoftwaresolution.com</a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Local Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-sm text-primary mb-2">Colombo, Sri Lanka</h4>
                  <p className="text-sm text-muted">100 Market Street<br />Suite 300<br />Colombo, SL</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary mb-2">Kandy, Sri Lanka</h4>
                  <p className="text-sm text-muted">20 Fenchurch Street<br />Floor 15<br />Kandy, SL</p>
                </div>
              </div>
            </div>

            {/* What happens next section */}
            <div className="p-6 md:p-8 bg-surface border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-6">What happens next?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded-full h-fit">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">1. Technical Review</h4>
                    <p className="text-sm text-muted">Our principal engineers review your project requirements within 24 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded-full h-fit">
                    <Video className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">2. Discovery Call</h4>
                    <p className="text-sm text-muted">We schedule a 45-minute technical deep-dive to map out feasibility and architecture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-2 rounded-full h-fit">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">3. Proposal & Blueprint</h4>
                    <p className="text-sm text-muted">You receive a detailed technical roadmap, resource allocation, and engagement model.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="bg-surface border border-border p-8 md:p-10 rounded-2xl h-fit sticky top-32">
            <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted uppercase tracking-wider">Work Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted uppercase tracking-wider">Project Details</label>
                <textarea className="w-full bg-background border border-border rounded-lg h-32 p-4 focus:outline-none focus:border-accent resize-none transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg mt-4 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
