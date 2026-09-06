import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "@/components/layout/MainLayout"
import { Home } from "@/pages/Home"
import { AboutPage } from "@/pages/AboutPage"
import { ResourcesPage } from "@/pages/ResourcesPage"
import { ContactPage } from "@/pages/ContactPage"
import { CapabilityDetails } from "@/pages/CapabilityDetails"
import { TeamPage } from "@/pages/TeamPage"
import { LegalPage } from "@/pages/LegalPage"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/capabilities/:id" element={<CapabilityDetails />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
