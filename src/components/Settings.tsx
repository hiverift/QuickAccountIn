import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Switch } from "./ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { 
  Building2, 
  CreditCard, 
  Users, 
  Bell, 
  Shield, 
  Database,
  Globe,
  Calculator,
  Save
} from "lucide-react"

const businessInfo = {
  name: "Quick Accounting Solutions",
  type: "LLC",
  ein: "12-3456789",
  industry: "Software Development",
  address: "123 Tech Street, San Francisco, CA 94105",
  phone: "(555) 123-4567",
  email: "contact@quickaccounting.com",
  website: "www.quickaccounting.com"
}

const users = [
  {
    id: 1,
    name: "John Admin",
    email: "john@quickaccounting.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15"
  },
  {
    id: 2,
    name: "Sarah Accountant",
    email: "sarah@quickaccounting.com",
    role: "Accountant",
    status: "Active",
    lastLogin: "2024-01-14"
  },
  {
    id: 3,
    name: "Mike Sales",
    email: "mike@quickaccounting.com",
    role: "Sales",
    status: "Inactive",
    lastLogin: "2024-01-10"
  }
]

export function Settings() {
  const [notifications, setNotifications] = useState({
    emailInvoices: true,
    emailBills: true,
    emailReports: false,
    pushNotifications: true,
    taxReminders: true,
    overdueReminders: true
  })

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your business settings and preferences</p>
      </div>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="accounting">Accounting</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" defaultValue={businessInfo.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select defaultValue={businessInfo.type}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LLC">LLC</SelectItem>
                      <SelectItem value="Corporation">Corporation</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Sole Proprietor">Sole Proprietor</SelectItem>
                      <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ein">EIN / Tax ID</Label>
                  <Input id="ein" defaultValue={businessInfo.ein} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="software">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="wholesale">Wholesale</SelectItem>
                      <SelectItem value="services">Professional Services</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Input id="address" defaultValue={businessInfo.address} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={businessInfo.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={businessInfo.email} />
                </div>
              </div>
              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Accounting Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accountingMethod">Accounting Method</Label>
                  <Select defaultValue="accrual">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash Basis</SelectItem>
                      <SelectItem value="accrual">Accrual Basis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fiscalYear">Fiscal Year</Label>
                  <Select defaultValue="jan-dec">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jan-dec">January - December</SelectItem>
                      <SelectItem value="apr-mar">April - March</SelectItem>
                      <SelectItem value="jul-jun">July - June</SelectItem>
                      <SelectItem value="oct-sep">October - September</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                      <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h4 className="font-medium">Automation Settings</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-categorize transactions</p>
                    <p className="text-sm text-muted-foreground">Automatically categorize similar transactions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-match receipts</p>
                    <p className="text-sm text-muted-foreground">Match uploaded receipts to transactions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-reconcile bank accounts</p>
                    <p className="text-sm text-muted-foreground">Automatically reconcile cleared transactions</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Accounting Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Tax Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stateTax">State Tax ID</Label>
                  <Input id="stateTax" placeholder="Enter state tax ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salesTaxRate">Default Sales Tax Rate</Label>
                  <Input id="salesTaxRate" placeholder="8.25%" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxFilingFreq">Tax Filing Frequency</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxYearEnd">Tax Year End</Label>
                  <Select defaultValue="december">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="december">December 31</SelectItem>
                      <SelectItem value="march">March 31</SelectItem>
                      <SelectItem value="june">June 30</SelectItem>
                      <SelectItem value="september">September 30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h4 className="font-medium">Multi-State Operations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">California</p>
                      <p className="text-sm text-muted-foreground">Sales Tax: 7.25% + Local</p>
                    </div>
                    <Badge variant="default">Primary</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add Additional State
                  </Button>
                </div>
              </div>
              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Tax Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Users className="w-4 h-4" />
                  Invite User
                </Button>
              </div>
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                      <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                        {user.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Bank & Payment Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Plaid Banking</p>
                      <p className="text-sm text-muted-foreground">Connect bank accounts for automatic sync</p>
                    </div>
                  </div>
                  <Badge variant="default">Connected</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Stripe Payments</p>
                      <p className="text-sm text-muted-foreground">Accept online payments from customers</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Connect</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">PayPal</p>
                      <p className="text-sm text-muted-foreground">Accept PayPal payments</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Import/Export
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">QuickBooks Import</p>
                    <p className="text-sm text-muted-foreground">Import data from QuickBooks</p>
                  </div>
                  <Button size="sm" variant="outline">Import</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">CSV Export</p>
                    <p className="text-sm text-muted-foreground">Export your data to CSV format</p>
                  </div>
                  <Button size="sm" variant="outline">Export</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Invoice Notifications</p>
                    <p className="text-sm text-muted-foreground">Get notified when invoices are sent or paid</p>
                  </div>
                  <Switch 
                    checked={notifications.emailInvoices}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailInvoices: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Bill Notifications</p>
                    <p className="text-sm text-muted-foreground">Get notified about incoming bills and payment due dates</p>
                  </div>
                  <Switch 
                    checked={notifications.emailBills}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailBills: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-muted-foreground">Receive weekly financial summary reports</p>
                  </div>
                  <Switch 
                    checked={notifications.emailReports}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailReports: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Tax Reminders</p>
                    <p className="text-sm text-muted-foreground">Get reminders for tax filing deadlines</p>
                  </div>
                  <Switch 
                    checked={notifications.taxReminders}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, taxReminders: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Overdue Reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified about overdue invoices and bills</p>
                  </div>
                  <Switch 
                    checked={notifications.overdueReminders}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, overdueReminders: checked }))
                    }
                  />
                </div>
              </div>
              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
