import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Plus, Search, Building2, Phone, Mail } from "lucide-react"
import { toast } from "sonner@2.0.3"

const vendors = [
  {
    id: 1,
    name: "Tech Supplies Co",
    contact: "John Smith",
    email: "john@techsupplies.com",
    phone: "(555) 123-4567",
    ein: "12-3456789",
    paymentTerms: "Net 30",
    category: "Technology",
    totalSpent: 45200,
    outstandingBills: 3200,
    status: "Active"
  },
  {
    id: 2,
    name: "Office Materials Inc",
    contact: "Sarah Johnson",
    email: "sarah@officematerials.com",
    phone: "(555) 987-6543",
    ein: "98-7654321",
    paymentTerms: "Net 15",
    category: "Office Supplies",
    totalSpent: 23800,
    outstandingBills: 0,
    status: "Active"
  },
  {
    id: 3,
    name: "Marketing Agency LLC",
    contact: "Mike Wilson",
    email: "mike@marketingagency.com",
    phone: "(555) 456-7890",
    ein: "45-6789012",
    paymentTerms: "Due on Receipt",
    category: "Marketing",
    totalSpent: 18900,
    outstandingBills: 5500,
    status: "Active"
  }
]

const bills = [
  {
    id: 1,
    vendorName: "Tech Supplies Co",
    billNumber: "BILL-001",
    amount: 3200,
    dueDate: "2024-02-15",
    status: "Pending",
    description: "Computer hardware and software licenses"
  },
  {
    id: 2,
    vendorName: "Marketing Agency LLC",
    billNumber: "BILL-002",
    amount: 5500,
    dueDate: "2024-02-10",
    status: "Overdue",
    description: "Q1 Marketing campaign services"
  },
  {
    id: 3,
    vendorName: "Office Materials Inc",
    billNumber: "BILL-003",
    amount: 890,
    dueDate: "2024-01-30",
    status: "Paid",
    description: "Office supplies and stationery"
  }
]

export function Vendors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false)
  const [newVendor, setNewVendor] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    ein: "",
    category: "",
    paymentTerms: ""
  })

  const handleAddVendor = () => {
    if (!newVendor.name || !newVendor.contact || !newVendor.email) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success(`Vendor "${newVendor.name}" has been added successfully`)
    setIsAddVendorOpen(false)
    setNewVendor({
      name: "",
      contact: "",
      email: "",
      phone: "",
      ein: "",
      category: "",
      paymentTerms: ""
    })
  }

  const handlePayBill = (billNumber: string, vendorName: string) => {
    toast.success(`Payment processed for ${billNumber} from ${vendorName}`)
  }

  const handleGenerateReport = (reportType: string) => {
    toast.success(`${reportType} report generated successfully`)
  }

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Vendors</h1>
          <p className="text-muted-foreground">Manage your vendor relationships and accounts payable</p>
        </div>
        <Dialog open={isAddVendorOpen} onOpenChange={setIsAddVendorOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Vendor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Vendor</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="vendorName">Vendor Name</Label>
                <Input 
                  id="vendorName" 
                  placeholder="Enter vendor name"
                  value={newVendor.name}
                  onChange={(e) => setNewVendor(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Person</Label>
                <Input 
                  id="contact" 
                  placeholder="Enter contact name"
                  value={newVendor.contact}
                  onChange={(e) => setNewVendor(prev => ({ ...prev, contact: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="vendor@company.com"
                  value={newVendor.email}
                  onChange={(e) => setNewVendor(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  placeholder="(555) 123-4567"
                  value={newVendor.phone}
                  onChange={(e) => setNewVendor(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ein">EIN/Tax ID</Label>
                <Input 
                  id="ein" 
                  placeholder="12-3456789"
                  value={newVendor.ein}
                  onChange={(e) => setNewVendor(prev => ({ ...prev, ein: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => setNewVendor(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="office-supplies">Office Supplies</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="professional-services">Professional Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select onValueChange={(value) => setNewVendor(prev => ({ ...prev, paymentTerms: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="net-15">Net 15</SelectItem>
                    <SelectItem value="net-30">Net 30</SelectItem>
                    <SelectItem value="net-60">Net 60</SelectItem>
                    <SelectItem value="due-on-receipt">Due on Receipt</SelectItem>
                    <SelectItem value="cod">COD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddVendorOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddVendor}>
                Add Vendor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="vendors" className="w-full">
        <TabsList>
          <TabsTrigger value="vendors">All Vendors</TabsTrigger>
          <TabsTrigger value="bills">Bills & Payments</TabsTrigger>
          <TabsTrigger value="reports">Vendor Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="vendors" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Payment Terms</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Outstanding</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{vendor.name}</p>
                            <p className="text-sm text-muted-foreground">EIN: {vendor.ein}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{vendor.contact}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            {vendor.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            {vendor.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.category}</TableCell>
                      <TableCell>{vendor.paymentTerms}</TableCell>
                      <TableCell>${vendor.totalSpent.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={vendor.outstandingBills > 0 ? "text-red-600" : "text-green-600"}>
                          ${vendor.outstandingBills.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={vendor.status === "Active" ? "default" : "secondary"}>
                          {vendor.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bills" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Bills & Payments</h3>
            <Button className="gap-2" onClick={() => toast.success("Bill recording form opened")}>
              <Plus className="w-4 h-4" />
              Record Bill
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bill #</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bills.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-medium">{bill.billNumber}</TableCell>
                      <TableCell>{bill.vendorName}</TableCell>
                      <TableCell>${bill.amount.toLocaleString()}</TableCell>
                      <TableCell>{bill.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant={
                          bill.status === "Paid" ? "default" :
                          bill.status === "Overdue" ? "destructive" : "secondary"
                        }>
                          {bill.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{bill.description}</TableCell>
                      <TableCell>
                        {bill.status !== "Paid" && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handlePayBill(bill.billNumber, bill.vendorName)}
                          >
                            Pay Now
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Vendor Aging Report</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleGenerateReport("Vendor Aging Report")}
                >
                  Generate Report
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Purchase Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleGenerateReport("Purchase Summary")}
                >
                  Generate Report
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Payables</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleGenerateReport("Outstanding Payables")}
                >
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}