import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { siteConfig } from "@/config/site"
import { Link, useLocation } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Only perform scrollspy on the homepage
      if (pathname === "/") {
        const scrollPosition = window.scrollY + 100 // offset for sticky header

        // Find all valid sections from the nav config
        const sections = siteConfig.mainNav
          .filter(item => item.href.startsWith("/#"))
          .map(item => item.href.substring(2))
          .map(id => document.getElementById(id))
          .filter((el): el is HTMLElement => el !== null)
          .sort((a, b) => a.offsetTop - b.offsetTop)

        let currentActive = null

        for (const section of sections) {
          if (section.offsetTop <= scrollPosition) {
            currentActive = section.id
          }
        }

        if (currentActive) {
          setActiveSection(currentActive)
        } else if (window.scrollY < 100) {
          setActiveSection(null)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" alt={`${siteConfig.name} Logo`} className="w-8 h-8 object-contain" />
          <span className="font-bold text-xl tracking-tight">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {siteConfig.mainNav.map((item) => {
            const isHashLink = item.href.startsWith("/#")
            const targetId = isHashLink ? item.href.substring(2) : null
            const isActive = isHashLink 
              ? pathname === "/" && activeSection === targetId
              : pathname === item.href
            return (
              <Link
                key={item.title}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-all ${
                  isActive
                    ? "text-accent bg-accent/10 px-4 py-2 rounded-full"
                    : "text-muted hover:text-primary px-4 py-2"
                }`}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white border-0" asChild>
            <Link to="/contact">Book Discovery Call</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-2 mt-8">
                {siteConfig.mainNav.map((item) => {
                  const isHashLink = item.href.startsWith("/#")
                  const targetId = isHashLink ? item.href.substring(2) : null
                  const isActive = isHashLink 
                    ? pathname === "/" && activeSection === targetId
                    : pathname === item.href
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block px-4 py-3 text-lg font-medium transition-all rounded-xl ${
                        isActive
                          ? "text-accent bg-accent/10"
                          : "hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )
                })}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Book Discovery Call</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
