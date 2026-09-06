import type { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SmoothScroll } from "@/components/layout/SmoothScroll"
import { BackToTop } from "@/components/ui/BackToTop"

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  )
}
