import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ImageWithFallback } from "../figma/ImageWithFallback"
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  TrendingUp, 
  Shield,
  Heart,
  Lightbulb
} from "lucide-react"

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Your financial data is protected with enterprise-grade security and compliance standards."
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "We put our customers at the center of everything we do, ensuring their success is our priority."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology and user feedback."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with our customers, partners, and the accounting community."
    }
  ]

  const stats = [
    { label: "Founded", value: "2019" },
    { label: "Employees", value: "150+" },
    { label: "Countries", value: "12" },
    { label: "Customers", value: "10K+" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
              About Quick Accounting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing business accounting with intuitive software designed for modern 
              multi-vendor operations. Our mission is to make financial management accessible, 
              accurate, and efficient for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2019 by a team of accounting professionals and software engineers, 
                  Quick Accounting was born from a simple observation: existing accounting solutions 
                  weren't built for the complexity of modern multi-vendor business operations.
                </p>
                <p>
                  After spending years working with businesses struggling to manage their finances 
                  across multiple vendors, locations, and compliance requirements, we knew there had 
                  to be a better way. That's when we decided to build Quick Accounting.
                </p>
                <p>
                  Today, we serve over 10,000 businesses across 12 countries, helping them streamline 
                  their financial operations with our comprehensive, user-friendly platform.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Quick Accounting team collaboration"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600">
                  To empower businesses with intelligent accounting software that simplifies 
                  financial management, ensures compliance, and drives growth through actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600">
                  To become the global standard for multi-vendor business accounting, making 
                  financial excellence accessible to every business, regardless of size or complexity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Quick Accounting by the Numbers</h2>
            <p className="text-xl text-gray-600">Our growth reflects our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Why Choose Quick Accounting?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine deep accounting expertise with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-4">Industry Expertise</h3>
              <p className="text-blue-100">
                Built by accounting professionals who understand the real-world challenges businesses face.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-4">Proven Results</h3>
              <p className="text-blue-100">
                Our customers report 40% time savings and 99.9% accuracy in their financial processes.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-4">Dedicated Support</h3>
              <p className="text-blue-100">
                24/7 customer support with accounting experts ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}