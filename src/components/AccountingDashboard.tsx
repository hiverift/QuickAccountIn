import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Dashboard } from "./Dashboard"
import { Vendors } from "./Vendors"
import { Customers } from "./Customers"
import { Banking } from "./Banking"
import { Reports } from "./Reports"
import { Settings } from "./Settings"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

interface AccountingDashboardProps {
  onLogout: () => void
  userType: "customer" | "partner" | null
}

export function AccountingDashboard({ onLogout, userType }: AccountingDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "vendors":
        return <Vendors />
      case "customers":
        return <Customers />
      case "purchases":
        return (
          <div className="p-6">
            <h1 className="text-2xl mb-4">Purchase Orders</h1>
            <p className="text-muted-foreground">Purchase order management coming soon...</p>
          </div>
        )
      case "sales":
        return (
          <div className="p-6">
            <h1 className="text-2xl mb-4">Sales & Invoices</h1>
            <p className="text-muted-foreground">Advanced sales management coming soon...</p>
          </div>
        )
      case "banking":
        return <Banking />
      case "expenses":
        return (
          <div className="p-6">
            <h1 className="text-2xl mb-4">Expense Tracking</h1>
            <p className="text-muted-foreground">Expense tracking and receipt management coming soon...</p>
          </div>
        )
      case "reports":
        return <Reports />
      case "taxes":
        return (
          <div className="p-6">
            <h1 className="text-2xl mb-4">Tax Management</h1>
            <p className="text-muted-foreground">Tax calculations and compliance tools coming soon...</p>
          </div>
        )
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="h-screen flex bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl">Quick Accounting</h1>
            {userType && (
              <span className="text-sm text-muted-foreground capitalize">
                {userType} Account
              </span>
            )}
          </div>
          <Button variant="outline" onClick={onLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
        {renderContent()}
      </main>
    </div>
  )
}
