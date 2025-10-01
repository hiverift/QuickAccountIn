import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { 
  Building2, 
  Users, 
  Store, 
  Factory, 
  Shield, 
  Globe,
  Calculator,
  TrendingUp,
  ArrowRight
} from "lucide-react"

export function Solutions() {
  const solutions = [
    {
      title: "Small Business Accounting",
      icon: Users,
      description: "Perfect for startups and small businesses looking to streamline their financial operations",
      features: [
        "Simple bookkeeping and invoicing",
        "Expense tracking and categorization",
        "Basic reporting and analytics",
        "Single-user access",
        "Email support"
      ],
      targetAudience: "1-10 employees",
      pricing: "Starting at $29/month"
    },
    {
      title: "Enterprise Accounting",
      icon: Building2,
      description: "Comprehensive solution for large organizations with complex financial requirements",
      features: [
        "Advanced multi-entity accounting",
        "Custom workflow automation",
        "Real-time financial consolidation",
        "Unlimited users and locations",
        "24/7 dedicated support"
      ],
      targetAudience: "500+ employees",
      pricing: "Custom pricing"
    },
    {
      title: "Multi-Vendor Support",
      icon: Store,
      description: "Specialized tools for businesses managing multiple vendors and supplier relationships",
      features: [
        "Vendor onboarding and management",
        "Purchase order automation",
        "Supplier performance tracking",
        "Payment processing integration",
        "Vendor portal access"
      ],
      targetAudience: "Retail & Distribution",
      pricing: "Included in Business plan"
    },
    {
      title: "Multi-Branch Operations",
      icon: Factory,
      description: "Centralized financial management for businesses with multiple locations",
      features: [
        "Consolidated reporting across locations",
        "Branch-specific P&L tracking",
        "Inter-branch transaction management",
        "Location-based user permissions",
        "Regional compliance support"
      ],
      targetAudience: "Multi-location businesses",
      pricing: "Enterprise add-on"
    }
  ]

  const industries = [
    {
      name: "Retail & E-commerce",
      icon: Store,
      description: "Inventory management, point-of-sale integration, and multi-channel accounting"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Cost accounting, work-in-progress tracking, and supply chain financial management"
    },
    {
      name: "Professional Services",
      icon: Users,
      description: "Project-based accounting, time tracking, and client billing management"
    },
    {
      name: "Technology",
      icon: Calculator,
      description: "Subscription billing, revenue recognition, and equity management"
    }
  ]

  const compliance = [
    {
      title: "Tax Compliance (GST, VAT, USA-specific)",
      description: "Automated tax calculations and filing for multiple jurisdictions",
      features: ["Multi-state sales tax", "Federal income tax support", "State-specific compliance", "Audit trail management"]
    },
    {
      title: "Payroll & HR Integration",
      description: "Seamless integration with payroll systems and HR platforms",
      features: ["Employee data sync", "Payroll expense allocation", "Benefits tracking", "Compliance reporting"]
    },
    {
      title: "Expense & Budget Management",
      description: "Comprehensive expense tracking and budget planning tools",
      features: ["Receipt capture", "Approval workflows", "Budget vs actual reporting", "Forecasting tools"]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            Solutions for Every Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprise organizations, Quick Accounting provides tailored 
            accounting solutions that grow with your business needs.
          </p>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Comprehensive Accounting Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choose the solution that best fits your business size and requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <solution.icon className="w-10 h-10 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{solution.targetAudience}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{solution.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm font-medium text-gray-900">{solution.pricing}</span>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored features and workflows designed for your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <industry.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg mb-3 text-gray-900">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Compliance & Integration Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Stay compliant and connected with our comprehensive integration suite
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-gray-600">{item.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-State Operations */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Globe className="w-16 h-16 mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">
                Multi-State Operations Made Simple
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Handle business operations across multiple states with automatic sales tax 
                calculations based on ZIP codes and seamless compliance management.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl mb-2">50</div>
                  <p className="text-blue-100">States Supported</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">10K+</div>
                  <p className="text-blue-100">Tax Jurisdictions</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Multi-State Features
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-700 p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 mb-3" />
                <h3 className="text-lg mb-2">Automatic Tax Calculations</h3>
                <p className="text-blue-100 text-sm">Real-time tax rates based on location and product type</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <Shield className="w-8 h-8 mb-3" />
                <h3 className="text-lg mb-2">Compliance Monitoring</h3>
                <p className="text-blue-100 text-sm">Automated alerts for changing tax regulations</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <Calculator className="w-8 h-8 mb-3" />
                <h3 className="text-lg mb-2">Nexus Management</h3>
                <p className="text-blue-100 text-sm">Track economic nexus thresholds across states</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <Building2 className="w-8 h-8 mb-3" />
                <h3 className="text-lg mb-2">Filing Assistance</h3>
                <p className="text-blue-100 text-sm">Streamlined tax filing and remittance process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your specific business needs 
            and find the ideal Quick Accounting solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View All Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}