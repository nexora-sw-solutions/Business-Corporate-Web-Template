import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, X } from "lucide-react"
import { teamMembers, type TeamMember } from "@/data/team"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedMember) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedMember])

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/about" 
            className="inline-flex items-center text-sm font-medium text-muted/60 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Meet the principal engineers and strategists behind our enterprise architectures. We don't hire junior developers; you will always speak directly with a seasoned expert.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                <p className="text-sm text-muted/80 mb-6 flex-1">{member.shortDescription}</p>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <Quote className="w-5 h-5 text-accent/50 mb-3" />
                  <p className="text-sm italic text-muted leading-relaxed">"{member.quote}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm touch-none"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-background rounded-2xl shadow-2xl border border-border z-50 flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full border border-border text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>

              {/* Image Column */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-muted shrink-0">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent hidden md:block" />
              </div>
              
              {/* Content Column */}
              <div className="p-8 md:p-12 flex-1 flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedMember.name}</h2>
                  <p className="text-lg font-medium text-accent mb-2">{selectedMember.role}</p>
                  <p className="text-sm font-medium text-muted uppercase tracking-wider">{selectedMember.qualification}</p>
                </div>

                <div className="prose prose-invert max-w-none mb-10">
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    {selectedMember.fullDescription}
                  </p>
                </div>

                <div className="mt-auto bg-surface p-6 md:p-8 rounded-xl border border-border">
                  <Quote className="w-6 h-6 text-accent mb-4" />
                  <p className="text-base md:text-lg italic font-medium leading-relaxed">
                    "{selectedMember.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
