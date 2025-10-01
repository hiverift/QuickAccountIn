import { useState } from "react"
import { Header } from "./website/Header"
import { Footer } from "./website/Footer"
import { Homepage } from "./website/Homepage"
import { About } from "./website/About"
import { Solutions } from "./website/Solutions"
import { Features } from "./website/Features"
import { Pricing } from "./website/Pricing"
import { Resources } from "./website/Resources"
import { Support } from "./website/Support"
import { Contact } from "./website/Contact"
import { Login } from "./website/Login"
import { SignUp } from "./website/SignUp"
import { TrialSignup } from "./website/TrialSignup"

interface PublicWebsiteProps {
  onLogin: (type: "customer" | "partner") => void
}

export function PublicWebsite({ onLogin }: PublicWebsiteProps) {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage onNavigate={setCurrentPage} />
      case "about":
        return <About />
      case "solutions":
        return <Solutions />
      case "features":
        return <Features />
      case "pricing":
        return <Pricing onNavigate={setCurrentPage} />
      case "resources":
        return <Resources />
      case "support":
        return <Support />
      case "contact":
        return <Contact />
      case "login":
        return <Login onLogin={onLogin} onNavigate={setCurrentPage} />
      case "signup":
        return <SignUp onLogin={onLogin} onNavigate={setCurrentPage} />
      case "trial-signup":
        return <TrialSignup onLogin={onLogin} onNavigate={setCurrentPage} />
      default:
        return <Homepage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}