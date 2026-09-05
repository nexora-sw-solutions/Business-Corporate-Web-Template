import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useAnimationFrame, animate, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, ArrowLeft, ArrowRight, X } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Jenkins",
    title: "CTO, Meridian Logistics",
    quote: "Nexora completely restructured our legacy database and built a tracking dashboard that actually works in real-time. The system has scaled effortlessly since launch without a single hour of downtime.",
    metric: "Cut operational load by 40%",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Chen",
    title: "VP of Engineering, FlowPay",
    quote: "Their team doesn't just write code; they understand enterprise architecture. The CI/CD pipelines and security audits they put in place helped us pass our SOC2 certification.",
    metric: "Passed SOC2 Type II",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Emily Robinson",
    title: "Founder, RetailScale",
    quote: "We needed a headless e-commerce solution built from scratch in 6 weeks before Black Friday. Not only did they deliver it on time, but the sub-second page loads doubled our conversion rate.",
    metric: "105% Conversion Lift",
    image: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "David Althaus",
    title: "Director of IT, Apex Automotive",
    quote: "Working with them feels like having an elite internal engineering squad. Communication is direct, sprints are transparent, and the code quality is exceptional.",
    metric: "10,000+ Hours Saved",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Jessica Torres",
    title: "COO, Horizon Health",
    quote: "The patient intake portal they built integrates perfectly with our internal tools. The RBAC implementation was exactly what we needed to maintain HIPAA compliance.",
    metric: "Zero Security Incidents",
    image: "https://i.pravatar.cc/150?u=jessica"
  },
  {
    name: "Michael Chang",
    title: "Product Manager, Synthetix",
    quote: "I've hired many agencies, but none have matched the technical rigor of this team. They treat every edge case seriously and never cut corners on architecture.",
    metric: "99.99% Uptime SLA",
    image: "https://i.pravatar.cc/150?u=michael"
  }
]

export function SocialProof() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)

  const baseX = useMotionValue(0)
  const prefersReducedMotion = useReducedMotion()

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedTestimonial) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedTestimonial])

  // Track responsive measurements
  useEffect(() => {
    const updateMeasurements = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateMeasurements()
    window.addEventListener("resize", updateMeasurements)
    return () => window.removeEventListener("resize", updateMeasurements)
  }, [])

  const gap = 24 // 1.5rem (gap-6)
  const cardWidth = containerWidth > 0 
    ? (containerWidth - (gap * (visibleCards - 1))) / visibleCards 
    : 300
  const singleSetWidth = (cardWidth + gap) * testimonials.length

  // Wrap motion value instantly and seamlessly
  useMotionValueEvent(baseX, "change", (latest: number) => {
    if (singleSetWidth === 0) return
    // If we scroll past the first duplicated set, loop back
    if (latest <= -singleSetWidth) {
      baseX.set(latest + singleSetWidth)
    } 
    // If we drag backwards past 0, loop to the end of the first set
    else if (latest > 0) {
      baseX.set(latest - singleSetWidth)
    }
  })

  // Continuous loop animation
  useAnimationFrame((_, delta: number) => {
    if (prefersReducedMotion || isPaused || isDragging || selectedTestimonial || singleSetWidth === 0) return
    // Adjust 0.04 to control the continuous scrolling speed
    baseX.set(baseX.get() - (delta * 0.04))
  })

  const scrollByAmount = (amount: number) => {
    const targetX = baseX.get() + amount
    animate(baseX, targetX, {
      type: "spring",
      stiffness: 150,
      damping: 25,
      bounce: 0
    })
  }

  const scrollNext = () => scrollByAmount(-(cardWidth + gap))
  const scrollPrev = () => scrollByAmount(cardWidth + gap)

  // Duplicate to allow seamless wrapping
  const loopedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Trusted by Technical Leaders</h2>
            <p className="text-lg text-muted">
              Don't just take our word for it. Hear from the CTOs, Founders, and Engineering VPs who rely on our architecture.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              aria-label="Previous testimonials"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-foreground hover:border-accent/50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              aria-label="Next testimonials"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-foreground hover:border-accent/50 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Continuous Marquee Carousel */}
        <div 
          ref={containerRef}
          className="max-w-7xl mx-auto relative px-4 md:px-0 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
          }}
        >
          <motion.div 
            className="flex gap-6 pb-8 pt-4 cursor-grab active:cursor-grabbing w-max"
            style={{ x: baseX }}
            drag="x"
            dragConstraints={{ left: -singleSetWidth * 2, right: singleSetWidth }} // Permissive bounds, wrapping handles the rest
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ width: cardWidth > 0 ? cardWidth : 'auto' }}
                className="shrink-0"
              >
                <div 
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="bg-surface border border-border rounded-2xl p-6 lg:p-8 hover:border-accent/30 transition-colors h-[340px] flex flex-col cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTestimonial(testimonial) }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full border border-border object-cover"
                      />
                      <div>
                        <p className="font-bold text-sm text-primary">{testimonial.name}</p>
                        <p className="text-xs text-muted">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="text-muted group-hover:text-accent transition-colors" aria-hidden="true">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Truncated Quote */}
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mt-auto inline-flex self-start px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md shrink-0">
                    <span className="text-xs font-bold text-emerald-500 tracking-wide uppercase">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Centered Modal for Full Testimonial Details */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTestimonial(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm touch-none"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain bg-surface rounded-2xl shadow-2xl border border-border z-50 flex flex-col p-8 sm:p-12"
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-background/50 backdrop-blur-sm hover:bg-background rounded-full border border-border text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex flex-col min-h-full pt-4">
                <div className="flex items-center gap-6 mb-8">
                  <img 
                    src={selectedTestimonial.image} 
                    alt={selectedTestimonial.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-border object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">{selectedTestimonial.name}</h3>
                    <p className="text-sm sm:text-base text-muted">{selectedTestimonial.title}</p>
                  </div>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <p className="text-muted leading-relaxed text-lg sm:text-xl font-medium italic">
                      "{selectedTestimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="inline-flex px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <span className="text-sm font-bold text-emerald-500 tracking-wide uppercase">
                      {selectedTestimonial.metric}
                    </span>
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

