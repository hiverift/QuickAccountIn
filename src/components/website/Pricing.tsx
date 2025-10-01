import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { CheckCircle, Star, Users, Building2, Building, Heart } from "lucide-react"

interface PricingProps {
  onNavigate: (page: string) => void
}

export function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: "Free",
      icon: Heart,
      price: 0,
      billing: "forever",
      description: "Perfect for single business owners just getting started",
      popular: false,
      isFree: true,
      features: [
        "1 business/entity only",
        "Basic bookkeeping (single-entry)",
        "Simple invoice generation",
        "Expense tracking",
        "Basic financial reports",
        "Bank account connection (1 account)",
        "Email support",
        "Mobile app access",
        "Data export to Excel/CSV"
      ],
      limitations: [
        "Limited to 50 transactions/month",
        "Standard templates only",
        "Community support only",
        "No multi-user access"
      ]
    },
    {
      name: "Starter",
      icon: Users,
      price: 29,
      billing: "per month",
      description: "Perfect for small businesses and freelancers",
      popular: false,
      features: [
        "Up to 3 vendors",
        "Double-entry bookkeeping",
        "Professional invoicing",
        "Advanced expense tracking",
        "Comprehensive reporting",
        "Multiple bank connections",
        "Email support",
        "Mobile app access",
        "Data export & import"
      ],
      limitations: [
        "Limited to 500 transactions/month",
        "Standard templates only"
      ]
    },
    {
      name: "Business",
      icon: Building2,
      price: 79,
      billing: "per month",
      description: "Ideal for growing businesses with multiple vendors",
      popular: true,
      features: [
        "Unlimited vendors",
        "Advanced bookkeeping",
        "Custom invoicing",
        "Purchase orders",
        "Advanced reporting",
        "Bank reconciliation",
        "Multi-user access (5 users)",
        "Priority email support",
        "API access",
        "Custom fields",
        "Automated workflows"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      icon: Building,
      price: 199,
      billing: "per month",
      description: "Complete solution for large organizations",
      popular: false,
      features: [
        "Everything in Business",
        "Unlimited users",
        "Multi-location support",
        "Advanced tax compliance",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security features",
        "Custom reporting",
        "Data migration assistance",
        "Training sessions",
        "SLA guarantee"
      ],
      limitations: []
    }
  ]

  const addOns = [
    {
      name: "Payroll Integration",
      price: 25,
      description: "Complete payroll management with tax calculations"
    },
    {
      name: "Advanced Tax Module",
      price: 35,
      description: "Multi-state tax compliance and automated filing"
    },
    {
      name: "Custom Integrations",
      price: 50,
      description: "Connect with your existing CRM, POS, or ERP systems"
    },
    {
      name: "Additional User Seats",
      price: 15,
      description: "Per user per month for Business plan"
    }
  ]

  const faqItems = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with no credit card required. You'll have access to all Business plan features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise customers."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption and security measures. All data is backed up and stored in secure, compliant data centers."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include core accounting 
            features with no hidden fees or setup costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("signup")}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-6 ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <plan.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{plan.billing}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => onNavigate("signup")}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-start gap-3 text-gray-500">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0">•</span>
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Add-ons & Extensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your accounting software with specialized modules
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">{addon.name}</h3>
                    <p className="text-gray-600 text-sm">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-gray-900">${addon.price}</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Feature Comparison</h2>
            <p className="text-xl text-gray-600">See what's included in each plan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Features</th>
                  <th className="text-center py-4 px-6">Starter</th>
                  <th className="text-center py-4 px-6">Business</th>
                  <th className="text-center py-4 px-6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-4 px-6">Number of Vendors</td>
                  <td className="text-center py-4 px-6">Up to 3</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Users Included</td>
                  <td className="text-center py-4 px-6">1</td>
                  <td className="text-center py-4 px-6">5</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">API Access</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Phone Support</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Custom Integrations</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="text-lg mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Quick Accounting for their accounting needs. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => onNavigate("signup")}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => onNavigate("contact")}>
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}