import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Users,
  Building2,
  HeadphonesIcon
} from "lucide-react"
import { toast } from "sonner@2.0.3"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success("Thank you! We'll get back to you within 24 hours.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: ""
    })
  }

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Sales Enquiry",
      description: "Questions about plans, pricing, or features",
      contact: "sales@quickaccounting.com",
      response: "Within 4 hours"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Help with your account or technical issues",
      contact: "support@quickaccounting.com", 
      response: "Within 2 hours"
    },
    {
      icon: Users,
      title: "Partner Program",
      description: "Become a Quick Accounting partner or reseller",
      contact: "partners@quickaccounting.com",
      response: "Within 24 hours"
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Custom solutions for large organizations",
      contact: "enterprise@quickaccounting.com",
      response: "Within 24 hours"
    }
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9 AM - 6 PM PST"
    },
    {
      city: "New York",
      address: "456 Fifth Avenue, Floor 15",
      zipcode: "New York, NY 10018",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 9 AM - 6 PM EST"
    },
    {
      city: "Austin",
      address: "789 Congress Avenue, Suite 200",
      zipcode: "Austin, TX 78701",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri: 9 AM - 6 PM CST"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Quick Accounting? We're here to help. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Inc."
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Options */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Contact Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <option.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{option.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <p className="text-sm text-blue-600">{option.contact}</p>
                      <p className="text-xs text-gray-500">Response: {option.response}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">6 AM - 8 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">8 AM - 5 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-600">
                    Enterprise customers have 24/7 phone support access
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-red-50 border-red-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-800">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 mb-3">
                  For critical system issues affecting your business operations:
                </p>
                <p className="font-medium text-red-800">+1 (800) QUICKACC</p>
                <p className="text-sm text-red-600 mt-2">Available 24/7 for Enterprise customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Office Locations</h2>
            <p className="text-xl text-gray-600">Visit us at one of our offices across the United States</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader className="pb-4">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p>{office.address}</p>
                    <p>{office.zipcode}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
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
              Common questions about getting started with Quick Accounting
            </p>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg mb-3 text-gray-900">How quickly can I get started?</h3>
                <p className="text-gray-600">
                  You can sign up and start using Quick Accounting immediately. Our onboarding process 
                  takes about 15 minutes, and we offer free data migration assistance.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg mb-3 text-gray-900">Do you offer training and support?</h3>
                <p className="text-gray-600">
                  Yes! We provide comprehensive training materials, video tutorials, and live 
                  support. Enterprise customers get dedicated onboarding and training sessions.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg mb-3 text-gray-900">Can I migrate from my current accounting software?</h3>
                <p className="text-gray-600">
                  Absolutely. We support data migration from QuickBooks, Xero, and most other 
                  accounting platforms. Our team will handle the migration process for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}