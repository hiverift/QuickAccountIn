import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  Calendar,
  Star,
  Clock,
  User,
  ArrowRight,
  Bookmark
} from "lucide-react"

export function Resources() {
  const blogPosts = [
    {
      title: "Multi-Vendor Accounting Best Practices for 2024",
      excerpt: "Learn how to effectively manage vendor relationships and streamline your accounts payable process.",
      category: "Best Practices",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Sarah Mitchell"
    },
    {
      title: "Understanding Sales Tax Compliance Across States",
      excerpt: "Navigate the complex world of multi-state sales tax with our comprehensive guide.",
      category: "Tax Compliance",
      readTime: "12 min read", 
      date: "Dec 10, 2024",
      author: "David Chen"
    },
    {
      title: "Automating Your Bookkeeping Workflow",
      excerpt: "Discover how automation can save you hours each week and reduce manual errors.",
      category: "Automation",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      author: "Maria Rodriguez"
    }
  ]

  const caseStudies = [
    {
      title: "TechStart Inc: 75% Reduction in Accounting Time",
      industry: "Technology",
      company: "TechStart Inc",
      challenge: "Managing multiple vendor relationships and complex project accounting",
      result: "75% reduction in monthly closing time, 90% fewer errors",
      employees: "150 employees"
    },
    {
      title: "Retail Plus: Streamlined Multi-Location Operations", 
      industry: "Retail",
      company: "Retail Plus",
      challenge: "Consolidating financial data across 25 store locations",
      result: "Real-time visibility across all locations, 50% faster reporting",
      employees: "500+ employees"
    },
    {
      title: "Manufacturing Co: Improved Vendor Management",
      industry: "Manufacturing", 
      company: "Manufacturing Co",
      challenge: "Complex supplier relationships and inventory accounting",
      result: "40% improvement in vendor payment processing efficiency",
      employees: "300 employees"
    }
  ]

  const guides = [
    {
      title: "Getting Started with Quick Accounting",
      description: "Complete setup guide for new users",
      type: "PDF Guide",
      pages: "24 pages",
      icon: FileText
    },
    {
      title: "Multi-Vendor Setup Checklist",
      description: "Step-by-step vendor onboarding process",
      type: "Checklist",
      pages: "8 pages",
      icon: Download
    },
    {
      title: "Tax Compliance Handbook",
      description: "Navigate multi-state tax requirements",
      type: "Handbook",
      pages: "45 pages",
      icon: BookOpen
    },
    {
      title: "API Integration Guide",
      description: "Technical documentation for developers",
      type: "Technical Guide",
      pages: "60 pages",
      icon: FileText
    }
  ]

  const tutorials = [
    {
      title: "Setting Up Your First Vendor",
      duration: "5:32",
      views: "12.5K",
      category: "Getting Started"
    },
    {
      title: "Creating Professional Invoices",
      duration: "8:15",
      views: "8.2K", 
      category: "Invoicing"
    },
    {
      title: "Bank Reconciliation Made Easy",
      duration: "12:48",
      views: "15.1K",
      category: "Banking"
    },
    {
      title: "Advanced Reporting Features",
      duration: "18:22",
      views: "6.8K",
      category: "Reporting"
    },
    {
      title: "Multi-State Tax Setup",
      duration: "14:56",
      views: "9.3K",
      category: "Tax Compliance"
    },
    {
      title: "API Integration Walkthrough",
      duration: "25:14",
      views: "3.2K",
      category: "Development"
    }
  ]

  const webinars = [
    {
      title: "Mastering Multi-Vendor Operations",
      date: "Jan 15, 2025",
      time: "2:00 PM EST",
      speaker: "Sarah Mitchell, CEO",
      registered: 245
    },
    {
      title: "2025 Tax Compliance Updates",
      date: "Jan 22, 2025", 
      time: "1:00 PM EST",
      speaker: "Tax Compliance Team",
      registered: 189
    },
    {
      title: "Advanced Automation Strategies",
      date: "Jan 29, 2025",
      time: "3:00 PM EST", 
      speaker: "David Chen, CTO",
      registered: 156
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            Resources & Learning Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master Quick Accounting and optimize your accounting processes. 
            From beginner guides to advanced strategies.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Latest Blog Posts</h2>
              <p className="text-xl text-gray-600">Insights and tips from our accounting experts</p>
            </div>
            <Button variant="outline">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Customer Success Stories</h2>
            <p className="text-xl text-gray-600">See how businesses like yours achieve success with Quick Accounting</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <Badge variant="outline" className="w-fit mb-2">{study.industry}</Badge>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <p className="text-sm text-gray-600">{study.company} • {study.employees}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
                    <p className="text-sm text-green-700 font-medium">{study.result}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Guides & Downloads</h2>
            <p className="text-xl text-gray-600">Comprehensive guides to help you succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <guide.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg mb-2 text-gray-900">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>{guide.type}</span>
                    <span>{guide.pages}</span>
                  </div>
                  <Button size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
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
            <p className="text-xl text-gray-600">Step-by-step video guides for every feature</p>
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
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{tutorial.duration}</span>
                    <span>{tutorial.views} views</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600">Join our live sessions with accounting experts</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">LIVE WEBINAR</span>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{webinar.date}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{webinar.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Speaker:</span>
                    <span className="font-medium">{webinar.speaker}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Registered:</span>
                    <span className="font-medium">{webinar.registered} attendees</span>
                  </div>
                  <Button className="w-full mt-4">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bookmark className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest accounting tips, product updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 5,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}