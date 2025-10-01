import { useState } from "react"
import { PublicWebsite } from "./components/PublicWebsite"
import { AccountingDashboard } from "./components/AccountingDashboard"
import { Toaster } from "./components/ui/sonner"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<"customer" | "partner" | null>(null)

  const handleLogin = (type: "customer" | "partner") => {
    setIsLoggedIn(true)
    setUserType(type)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType(null)
  }

  if (isLoggedIn) {
    return (
      <>
        <AccountingDashboard onLogout={handleLogout} userType={userType} />
        <Toaster />
      </>
    )
  }

  return (
    <>
      <PublicWebsite onLogin={handleLogin} />
      <Toaster />
    </>
  )
}