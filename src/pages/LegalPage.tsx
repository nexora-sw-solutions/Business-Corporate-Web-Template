import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function LegalPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-12 p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-accent mb-1">Template Placeholder Content</h3>
            <p className="text-sm text-muted">
              This is a generic legal placeholder page provided for structural demonstration purposes. Before deploying this website to production, you must replace this content with your company's actual, legally reviewed Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Legal & Privacy</h1>
          
          <div className="space-y-16">
            <section id="privacy" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-6 text-primary">Privacy Policy</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p><strong>Last Updated: [Date]</strong></p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identifiers (Name, Email, etc.)</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                </ul>
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">2. How We Use Your Data</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section id="terms" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-6 text-primary">Terms of Service</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p><strong>Last Updated: [Date]</strong></p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">1. Acceptance of Terms</h3>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
                <h3 className="text-xl font-semibold text-primary mt-8 mb-4">2. Limitation of Liability</h3>
                <p>
                  Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
