import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { ImageWithFallback } from "../figma/ImageWithFallback"
import { 
  Calculator, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  FileText,
  CreditCard,
  BarChart3,
  Building2
} from "lucide-react"

interface HomepageProps {
  onNavigate: (page: string) => void
}

export function Homepage({ onNavigate }: HomepageProps) {
  const features = [
    {
      icon: FileText,
      title: "Comprehensive Bookkeeping",
      description: "Complete double-entry bookkeeping with automated reconciliation and real-time financial tracking."
    },
    {
      icon: CreditCard,
      title: "Invoicing & Payments",
      description: "Professional invoicing, automated payment reminders, and multiple payment gateway integrations."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Real-time P&L, Balance Sheet, Cash Flow, and custom reports with visual analytics."
    },
    {
      icon: Building2,
      title: "Multi-Vendor Support",
      description: "Manage multiple vendors, locations, and business entities from a single dashboard."
    },
    {
      icon: Shield,
      title: "Tax Compliance",
      description: "Automated tax calculations, compliance reporting, and seamless integration with tax authorities."
    },
    {
      icon: Globe,
      title: "Multi-State Operations",
      description: "Handle business operations across multiple states with automatic sales tax calculations."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO, TechStart Inc",
      content: "Quick Accounting transformed our accounting processes. The multi-vendor support is exactly what we needed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Seamless integration and fantastic support. Our accountant loves the detailed reporting features.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Controller, Retail Plus",
      content: "The best accounting software for multi-location businesses. Highly recommend!",
      rating: 5
    }
  ]

  const trustedLogos = [
    "Microsoft", "Amazon", "Google", "IBM", "Oracle", "Salesforce"
  ]

  const howItWorks = [
    {
      step: "01",
      title: "Quick Setup",
      description: "Create your account and connect your bank accounts in under 5 minutes with our guided onboarding process."
    },
    {
      step: "02", 
      title: "Import Data",
      description: "Seamlessly import your existing financial data from QuickBooks, Excel, or any other accounting system."
    },
    {
      step: "03",
      title: "Start Managing",
      description: "Begin managing vendors, customers, invoices, and reports with our intuitive dashboard interface."
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Add team members, integrate with other tools, and leverage advanced features as your business grows."
    }
  ]

  const complianceFeatures = [
    {
      title: "US GAAP Compliance",
      description: "Built-in compliance with Generally Accepted Accounting Principles for accurate financial reporting."
    },
    {
      title: "IRS Audit Trail",
      description: "Complete audit trail documentation that meets IRS requirements for tax compliance and audits."
    },
    {
      title: "Multi-State Tax Support",
      description: "Automatic sales tax calculations across all 50 states with real-time rate updates."
    },
    {
      title: "SOX Compliance Ready",
      description: "Internal controls and documentation features to support Sarbanes-Oxley compliance requirements."
    }
  ]

  const industryStats = [
    {
      industry: "Retail & E-commerce",
      savings: "45%",
      description: "Average time savings on financial processes"
    },
    {
      industry: "Manufacturing",
      savings: "60%",
      description: "Reduction in accounting errors"
    },
    {
      industry: "Professional Services",
      savings: "35%",
      description: "Faster month-end closing"
    },
    {
      industry: "Technology",
      savings: "50%",
      description: "Improvement in cash flow visibility"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
                🚀 Trusted by 10,000+ Businesses
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900 leading-tight">
                Accounting Software 
                <span className="text-blue-600"> Built for Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive accounting solution designed for multi-vendor operations in the USA. 
                Streamline your finances with our QuickBooks-style interface and advanced features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4" onClick={() => onNavigate("trial-signup")}>
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4" onClick={() => onNavigate("contact")}>
                  Request Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU5MDc5ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern accounting office workspace"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {trustedLogos.map((logo) => (
              <div key={logo} className="text-center">
                <p className="font-semibold text-gray-500">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Everything You Need to Manage Your Finances
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bookkeeping to tax compliance, our comprehensive platform handles all aspects 
              of your business accounting with ease and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of companies that trust Quick Accounting for their accounting needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2">10K+</div>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2">$2B+</div>
              <p className="text-blue-100">Transactions Processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2">99.9%</div>
              <p className="text-blue-100">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl mb-2">24/7</div>
              <p className="text-blue-100">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined onboarding process gets you up and running quickly, 
              so you can focus on growing your business instead of wrestling with accounting software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-blue-200"></div>
                  )}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Built for Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet all regulatory requirements with confidence. Our platform is designed 
              from the ground up to ensure compliance with US accounting standards and tax regulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-green-50 rounded-xl">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-green-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Performance Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See how Quick Accounting has transformed financial operations for businesses 
              across different industries with measurable improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg mb-3">{stat.industry}</h3>
                <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.savings}</div>
                <p className="text-blue-100 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with your existing business tools and financial institutions. 
            Quick Accounting integrates with 500+ banks and popular business applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["Bank of America", "Wells Fargo", "Chase", "PayPal", "Stripe", "Square", "Shopify", "WooCommerce", "Slack", "Zapier", "Microsoft 365", "Google Workspace"].map((integration) => (
              <div key={integration} className="text-center">
                <p className="text-sm font-medium text-gray-500">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Quick Accounting
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does it take to set up Quick Accounting?
              </h3>
              <p className="text-gray-600">
                Most businesses are up and running within 24 hours. Our guided onboarding process 
                walks you through connecting bank accounts, importing data, and configuring your settings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I import data from my existing accounting software?
              </h3>
              <p className="text-gray-600">
                Yes! Quick Accounting supports data import from QuickBooks, Excel, CSV files, and most major 
                accounting platforms. Our migration specialists can help ensure a smooth transition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is my financial data secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use bank-level encryption, multi-factor authentication, and regular 
                security audits. Your data is stored in SOC 2 compliant data centers with 99.9% uptime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide training and support?
              </h3>
              <p className="text-gray-600">
                Yes! We offer comprehensive training resources, live webinars, and 24/7 customer support. 
                Premium plans include dedicated account managers and phone support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Quick Accounting to streamline their financial operations. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" onClick={() => onNavigate("trial-signup")}>
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-600 text-white hover:bg-gray-800" onClick={() => onNavigate("pricing")}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}