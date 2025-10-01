import { Button } from "../ui/button"
import { Calculator, Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", key: "home" },
    { name: "About", key: "about" },
    { name: "Solutions", key: "solutions" },
    { name: "Features", key: "features" },
    { name: "Pricing", key: "pricing" },
    { name: "Resources", key: "resources" },
    { name: "Support", key: "support" },
    { name: "Contact", key: "contact" }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <Calculator className="w-8 h-8 text-blue-600" />
            <span className="text-xl text-gray-900 font-semibold">Quick Accounting</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm transition-colors ${
                  currentPage === item.key
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => onNavigate("login")}>
              Login
            </Button>
            <Button onClick={() => onNavigate("trial-signup")}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left px-4 py-2 text-sm transition-colors ${
                    currentPage === item.key
                      ? "text-blue-600 font-medium bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    onNavigate("login")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    onNavigate("trial-signup")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
