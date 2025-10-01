import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Badge } from "../ui/badge"
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Book,
  Video,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Headphones,
  Users
} from "lucide-react"

export function Support() {
  const [searchQuery, setSearchQuery] = useState("")

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Enterprise",
      response: "< 2 minutes",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Speak directly with our experts",
      availability: "Mon-Fri 6AM-8PM PST",
      response: "< 5 minutes", 
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions or issues",
      availability: "24/7",
      response: "< 4 hours",
      action: "Send Email"
    },
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Browse our comprehensive help articles",
      availability: "Always available",
      response: "Instant",
      action: "Browse Articles"
    }
  ]

  const faqCategories = [
    {
      title: "Getting Started",
      count: 24,
      questions: [
        "How do I set up my first vendor?",
        "What information do I need to get started?",
        "How do I import data from QuickBooks?",
        "How do I invite team members?"
      ]
    },
    {
      title: "Billing & Payments",
      count: 18,
      questions: [
        "How do I create and send invoices?",
        "What payment methods are supported?",
        "How do I set up recurring billing?",
        "Can I customize invoice templates?"
      ]
    },
    {
      title: "Reporting",
      count: 15,
      questions: [
        "How do I generate financial reports?",
        "Can I customize report layouts?",
        "How do I export reports to Excel?",
        "What reports are available?"
      ]
    },
    {
      title: "Integrations",
      count: 12,
      questions: [
        "How do I connect my bank account?",
        "What third-party apps integrate with Quick Accounting?",
        "How do I use the API?",
        "Can I connect multiple payment processors?"
      ]
    }
  ]

  const systemStatus = [
    { service: "Core Platform", status: "operational", uptime: "99.98%" },
    { service: "API Services", status: "operational", uptime: "99.95%" },
    { service: "Banking Connections", status: "operational", uptime: "99.92%" },
    { service: "Payment Processing", status: "operational", uptime: "99.97%" },
    { service: "Email Notifications", status: "maintenance", uptime: "99.89%" }
  ]

  const tutorials = [
    {
      title: "Setting Up Your Account",
      duration: "5:32",
      category: "Getting Started"
    },
    {
      title: "Adding Your First Vendor",
      duration: "3:45",
      category: "Vendor Management"
    },
    {
      title: "Creating Professional Invoices",
      duration: "8:15",
      category: "Invoicing"
    },
    {
      title: "Bank Reconciliation Basics",
      duration: "12:30",
      category: "Banking"
    },
    {
      title: "Understanding Financial Reports",
      duration: "15:20",
      category: "Reporting"
    },
    {
      title: "Multi-State Tax Setup",
      duration: "10:45",
      category: "Tax Compliance"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "maintenance":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600"
      case "maintenance":
        return "text-yellow-600"
      default:
        return "text-red-600"
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get the support you need to succeed with Quick Accounting. From quick answers 
            to detailed guidance, we're here to help.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for help articles, guides, or tutorials..."
              className="pl-10 pr-4 py-3 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Choose Your Support Option</h2>
            <p className="text-xl text-gray-600">Multiple ways to get the help you need, when you need it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <option.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available:</span>
                      <span className="font-medium">{option.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response:</span>
                      <span className="font-medium">{option.response}</span>
                    </div>
                  </div>
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">System Status</h2>
            <p className="text-xl text-gray-600">Real-time status of all Quick Accounting services</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-lg font-medium text-green-600">All Systems Operational</span>
              </div>
              <p className="text-gray-600">Last updated: 2 minutes ago</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.map((system, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(system.status)}
                      <span className="font-medium">{system.service}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">{system.uptime} uptime</span>
                      <span className={`text-sm font-medium capitalize ${getStatusColor(system.status)}`}>
                        {system.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View Detailed Status</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <button
                      key={qIndex}
                      className="text-left text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                    >
                      {question}
                    </button>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Questions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Video Tutorials</h2>
            <p className="text-xl text-gray-600">Learn at your own pace with our step-by-step guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Video className="w-16 h-16 text-white" />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{tutorial.category}</Badge>
                  <h3 className="text-lg mb-2 text-gray-900">{tutorial.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tutorial.duration}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              View All Tutorials
              <Video className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Headphones className="w-16 h-16 mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">Still Need Help?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our expert support team is ready to help you succeed. Get personalized 
                assistance with any questions or challenges you're facing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Expert accounting professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Average response time under 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>24/7 support for Enterprise customers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-700 p-6 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl mb-1">10K+</div>
                <p className="text-blue-100 text-sm">Happy Customers</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg text-center">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl mb-1">&lt; 2hrs</div>
                <p className="text-blue-100 text-sm">Avg Response Time</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl mb-1">99.5%</div>
                <p className="text-blue-100 text-sm">Resolution Rate</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg text-center">
                <HelpCircle className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl mb-1">24/7</div>
                <p className="text-blue-100 text-sm">Enterprise Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}