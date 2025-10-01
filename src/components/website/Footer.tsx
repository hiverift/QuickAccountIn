import { Calculator, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", key: "features" },
        { name: "Solutions", key: "solutions" },
        { name: "Pricing", key: "pricing" },
        { name: "What's New", key: "resources" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", key: "about" },
        { name: "Careers", key: "contact" },
        { name: "Press", key: "resources" },
        { name: "Partners", key: "contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", key: "support" },
        { name: "Blog", key: "resources" },
        { name: "Case Studies", key: "resources" },
        { name: "Guides", key: "resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", key: "contact" },
        { name: "Knowledge Base", key: "support" },
        { name: "Video Tutorials", key: "support" },
        { name: "API Docs", key: "support" }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-semibold">Quick Accounting</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive accounting software solution designed for multi-vendor operations 
              in the USA. Streamline your business accounting with our QuickBooks-style interface.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.key)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Security
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Quick Accounting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
