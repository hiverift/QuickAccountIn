import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  CreditCard, 
  FileText, 
  Calculator, 
  Settings, 
  Building2,
  Receipt,
  TrendingUp,
  Banknote,
  UserCheck,
  ShoppingBag
} from "lucide-react"
import { Button } from "./ui/button"

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vendors', label: 'Vendors', icon: Building2 },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'purchases', label: 'Purchase Orders', icon: ShoppingBag },
    { id: 'sales', label: 'Sales & Invoices', icon: Receipt },
    { id: 'banking', label: 'Banking', icon: CreditCard },
    { id: 'expenses', label: 'Expenses', icon: Banknote },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'taxes', label: 'Taxes', icon: Calculator },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-full flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Quick Accounting</h1>
            <p className="text-sm text-muted-foreground">Accounting Software</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start gap-3 h-10"
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-accent p-3 rounded-lg">
          <p className="text-sm">Need help?</p>
          <p className="text-xs text-muted-foreground">Contact support</p>
        </div>
      </div>
    </div>
  )
}
