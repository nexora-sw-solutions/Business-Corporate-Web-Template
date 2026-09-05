import { siteConfig } from "@/config/site"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showSocialAlert, setShowSocialAlert] = useState(false)

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowSocialAlert(true)
    setTimeout(() => {
      setShowSocialAlert(false)
    }, 4000)
  }

  return (
    <footer className="border-t border-border bg-surface relative">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt={`${siteConfig.name} Logo`} className="w-6 h-6 object-contain grayscale opacity-80" />
              <span className="font-bold text-lg tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Systems Operational
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/capabilities/engineering" className="text-sm text-muted hover:text-accent transition-colors">Custom Engineering</Link></li>
              <li><Link to="/capabilities/turnkey" className="text-sm text-muted hover:text-accent transition-colors">Turnkey Platforms</Link></li>
              <li><Link to="/capabilities/cloud" className="text-sm text-muted hover:text-accent transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/capabilities/automation" className="text-sm text-muted hover:text-accent transition-colors">Digital Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-sm text-muted hover:text-accent transition-colors">Team</Link></li>
              <li><a href="/#showcase" className="text-sm text-muted hover:text-accent transition-colors">Case Studies</a></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/resources" className="text-sm text-muted hover:text-accent transition-colors">Security Whitepaper</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted">
          <p>© {currentYear} {siteConfig.name} Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>UTC+5:30</span>
            <button onClick={handleSocialClick} className="hover:text-primary transition-colors cursor-pointer">GitHub</button>
            <button onClick={handleSocialClick} className="hover:text-primary transition-colors cursor-pointer">Twitter</button>
          </div>
        </div>
      </div>

      {/* Custom Social Notification */}
      <AnimatePresence>
        {showSocialAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-3 px-6 py-3.5 bg-background border border-border shadow-2xl rounded-full text-sm font-medium w-max max-w-[90vw]"
          >
            <Info className="w-4 h-4 text-accent" />
            Social profile is currently unavailable.
            <button
              onClick={() => setShowSocialAlert(false)}
              className="ml-2 text-muted hover:text-primary transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
