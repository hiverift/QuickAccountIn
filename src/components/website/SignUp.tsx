import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Calculator, Eye, EyeOff, CheckCircle } from "lucide-react"
import { toast } from "sonner@2.0.3"

interface SignUpProps {
  onLogin: (type: "customer" | "partner") => void
  onNavigate: (page: string) => void
}

export function SignUp({ onLogin, onNavigate }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    phone: "",
    businessType: "",
    employeeCount: ""
  })
  const [partnerData, setPartnerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    phone: "",
    partnerType: "",
    experience: ""
  })

  const handleCustomerSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customerData.firstName || !customerData.lastName || !customerData.email || !customerData.password) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success("Welcome! Your account has been created successfully.")
    onLogin("customer")
  }

  const handlePartnerSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!partnerData.firstName || !partnerData.lastName || !partnerData.email || !partnerData.password) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success("Partner application submitted! We'll review and contact you soon.")
    onLogin("partner")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Calculator className="w-12 h-12 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Quick Accounting</span>
          </div>
          <h2 className="text-3xl text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => onNavigate("login")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in here
            </button>
          </p>
        </div>

        <Card className="w-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Choose Account Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="customer" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer">Business Account</TabsTrigger>
                <TabsTrigger value="partner">Partner Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customer" className="mt-6">
                <form onSubmit={handleCustomerSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={customerData.firstName}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        value={customerData.lastName}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={customerData.email}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Inc."
                      value={customerData.company}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, company: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        value={customerData.phone}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select onValueChange={(value) => setCustomerData(prev => ({ ...prev, businessType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">Company Size</Label>
                    <Select onValueChange={(value) => setCustomerData(prev => ({ ...prev, employeeCount: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={customerData.password}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, password: e.target.value }))}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>14-day free trial included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-600">
                    By creating an account, you agree to our{" "}
                    <button className="text-blue-600 hover:underline">Terms of Service</button>{" "}
                    and{" "}
                    <button className="text-blue-600 hover:underline">Privacy Policy</button>.
                  </div>

                  <Button type="submit" className="w-full">
                    Create Business Account
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="partner" className="mt-6">
                <form onSubmit={handlePartnerSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="partnerFirstName">First Name *</Label>
                      <Input
                        id="partnerFirstName"
                        placeholder="Enter first name"
                        value={partnerData.firstName}
                        onChange={(e) => setPartnerData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnerLastName">Last Name *</Label>
                      <Input
                        id="partnerLastName"
                        placeholder="Enter last name"
                        value={partnerData.lastName}
                        onChange={(e) => setPartnerData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="partnerEmail">Email Address *</Label>
                    <Input
                      id="partnerEmail"
                      type="email"
                      placeholder="you@partnercompany.com"
                      value={partnerData.email}
                      onChange={(e) => setPartnerData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnerCompany">Company/Firm Name *</Label>
                    <Input
                      id="partnerCompany"
                      placeholder="Your Accounting Firm"
                      value={partnerData.company}
                      onChange={(e) => setPartnerData(prev => ({ ...prev, company: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="partnerPhone">Phone Number</Label>
                      <Input
                        id="partnerPhone"
                        placeholder="(555) 123-4567"
                        value={partnerData.phone}
                        onChange={(e) => setPartnerData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnerType">Partner Type</Label>
                      <Select onValueChange={(value) => setPartnerData(prev => ({ ...prev, partnerType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="accounting-firm">Accounting Firm</SelectItem>
                          <SelectItem value="bookkeeper">Bookkeeper</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="reseller">Reseller</SelectItem>
                          <SelectItem value="integrator">System Integrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setPartnerData(prev => ({ ...prev, experience: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnerPassword">Password *</Label>
                    <div className="relative">
                      <Input
                        id="partnerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={partnerData.password}
                        onChange={(e) => setPartnerData(prev => ({ ...prev, password: e.target.value }))}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                    <p className="font-medium mb-2">Partner Benefits:</p>
                    <ul className="space-y-1">
                      <li>• Commission on every referral</li>
                      <li>• Priority technical support</li>
                      <li>• Marketing co-op opportunities</li>
                      <li>• Dedicated partner portal</li>
                    </ul>
                  </div>

                  <div className="text-xs text-gray-600">
                    By applying, you agree to our{" "}
                    <button className="text-blue-600 hover:underline">Partner Agreement</button>{" "}
                    and{" "}
                    <button className="text-blue-600 hover:underline">Privacy Policy</button>.
                  </div>

                  <Button type="submit" className="w-full">
                    Apply for Partner Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center">
          <button
            onClick={() => onNavigate("home")}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  )
}
