import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { 
  FileText, 
  CreditCard, 
  BarChart3, 
  Banknote,
  Shield,
  Globe,
  Smartphone,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Star
} from "lucide-react"

export function Features() {
  const coreFeatures = [
    {
      icon: FileText,
      title: "Comprehensive Bookkeeping",
      description: "Double-entry bookkeeping with automated reconciliation",
      details: [
        "Automated transaction categorization",
        "Real-time financial tracking", 
        "Multi-currency support",
        "Customizable chart of accounts"
      ]
    },
    {
      icon: CreditCard,
      title: "Invoicing & Billing",
      description: "Professional invoicing with automated payment reminders",
      details: [
        "Customizable invoice templates",
        "Recurring billing automation",
        "Online payment processing",
        "Client portal access"
      ]
    },
    {
      icon: Banknote,
      title: "Bank Reconciliation",
      description: "Automated bank feeds and reconciliation tools",
      details: [
        "Direct bank connections",
        "Automatic transaction matching",
        "Variance detection",
        "Multi-account management"
      ]
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Real-time financial reporting and business insights",
      details: [
        "P&L and Balance Sheet",
        "Cash flow statements",
        "Custom report builder",
        "Visual dashboards"
      ]
    }
  ]

  const advancedFeatures = [
    {
      category: "Security & Compliance",
      icon: Shield,
      features: [
        "Bank-level encryption (256-bit SSL)",
        "Two-factor authentication",
        "Role-based user permissions",
        "Audit trail compliance",
        "SOC 2 Type II certified",
        "GDPR compliant"
      ]
    },
    {
      category: "Multi-Currency Support",
      icon: Globe,
      features: [
        "100+ currencies supported",
        "Real-time exchange rates",
        "Multi-currency reporting",
        "Foreign exchange tracking",
        "Currency gain/loss calculations",
        "International tax compliance"
      ]
    },
    {
      category: "Cloud & Mobile",
      icon: Smartphone,
      features: [
        "Cloud-based accessibility",
        "Mobile app (iOS & Android)",
        "Offline data sync",
        "Real-time collaboration",
        "Automatic backups",
        "99.9% uptime guarantee"
      ]
    },
    {
      category: "Integrations",
      icon: Zap,
      features: [
        "CRM system connections",
        "E-commerce platforms",
        "Payment processors",
        "Banking institutions",
        "Payroll systems",
        "Custom API access"
      ]
    }
  ]

  const workflowFeatures = [
    {
      title: "Automated Workflows",
      description: "Streamline repetitive tasks with intelligent automation",
      benefits: [
        "Save 10+ hours per week",
        "Reduce manual errors by 95%",
        "Improve processing speed by 3x"
      ]
    },
    {
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team and accountant",
      benefits: [
        "Multiple user access levels",
        "Comment and note system",
        "Version control tracking"
      ]
    },
    {
      title: "Smart Categorization",
      description: "AI-powered transaction categorization and matching",
      benefits: [
        "Learn from your patterns",
        "Suggest optimal categories",
        "Detect anomalies automatically"
      ]
    }
  ]

  const integrationLogos = [
    "QuickBooks", "Xero", "Salesforce", "Shopify", "WooCommerce", "Stripe",
    "PayPal", "Square", "Zapier", "Microsoft", "Google", "Slack"
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            Powerful Features for Modern Accounting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your business finances efficiently, 
            from basic bookkeeping to advanced compliance and reporting.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Core Accounting Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for complete financial management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className="w-10 h-10 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade features that scale with your business
            </p>
          </div>
          
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="currency">Multi-Currency</TabsTrigger>
              <TabsTrigger value="mobile">Cloud & Mobile</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            
            {advancedFeatures.map((category, index) => (
              <TabsContent key={index} value={category.category.toLowerCase().split(' ')[0]} className="mt-6">
                <Card className="p-8">
                  <CardHeader className="text-center pb-6">
                    <category.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Workflow Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Intelligent Workflow Automation
            </h2>
            <p className="text-xl text-gray-600">
              Let AI and automation handle the routine work while you focus on growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workflowFeatures.map((workflow, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader className="pb-6">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{workflow.title}</CardTitle>
                  <p className="text-gray-600">{workflow.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {workflow.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with the tools you already use
            </p>
            <Badge className="mb-8">100+ Integrations Available</Badge>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-gray-500">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Performance You Can Count On
            </h2>
            <p className="text-xl text-blue-100">
              Built for reliability, speed, and scalability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl mb-2">99.9%</div>
              <p className="text-blue-100">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl mb-2">&lt;2s</div>
              <p className="text-blue-100">Average Response Time</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl mb-2">256-bit</div>
              <p className="text-blue-100">SSL Encryption</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl mb-2">24/7</div>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Why Choose Quick Accounting Features?
            </h2>
            <p className="text-xl text-gray-600">
              See how we compare to other accounting solutions
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-6">Quick Accounting</th>
                  <th className="text-center py-4 px-6">Competitor A</th>
                  <th className="text-center py-4 px-6">Competitor B</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-4 px-6">Multi-vendor Support</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6 text-gray-400">Limited</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Real-time Collaboration</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6 text-gray-400">Limited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Multi-state Tax Compliance</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6 text-gray-400">Add-on</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Custom API Access</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6 text-gray-400">Enterprise Only</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}