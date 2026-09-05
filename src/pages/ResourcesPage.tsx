import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const resourceImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
]

export function ResourcesPage() {
  return (
    <div className="pt-32 min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 pb-12 flex-1">
        
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-muted/60 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Insights</h1>
        <p className="text-xl text-muted max-w-2xl mb-12">
          Technical guides, whitepapers, and architectural insights for scaling engineering teams.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Cards */}
          {resourceImages.map((imgSrc, i) => (
            <div key={i} className="border border-border bg-surface p-6 rounded-2xl hover:border-accent transition-colors cursor-pointer group">
              <div className="w-full aspect-video bg-muted rounded-lg mb-6 overflow-hidden relative">
                <img 
                  src={imgSrc} 
                  alt="Resource Thumbnail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="text-xs font-bold text-accent mb-3 tracking-wide uppercase">Technical Guide</div>
              <h3 className="text-xl font-bold mb-3">Architecting for Global Scale on the Edge</h3>
              <p className="text-sm text-muted mb-4">Learn how we reduced latency by 400% using a distributed edge computing architecture.</p>
              <div className="text-sm font-medium text-primary flex items-center group-hover:text-accent transition-colors">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
