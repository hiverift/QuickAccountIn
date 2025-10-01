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
import { Plus, Search, User, Phone, Mail, MapPin } from "lucide-react"
import { toast } from "sonner@2.0.3"

const customers = [
  {
    id: 1,
    name: "Acme Corporation",
    contact: "Jane Doe",
    email: "jane@acmecorp.com",
    phone: "(555) 234-5678",
    address: "123 Business St, New York, NY 10001",
    paymentTerms: "Net 30",
    taxRate: "8.25%",
    totalSales: 125400,
    outstandingInvoices: 8500,
    status: "Active"
  },
  {
    id: 2,
    name: "Global Industries Inc",
    contact: "Robert Brown",
    email: "robert@globalind.com",
    phone: "(555) 345-6789",
    address: "456 Corporate Ave, Los Angeles, CA 90210",
    paymentTerms: "Net 15",
    taxRate: "9.75%",
    totalSales: 89200,
    outstandingInvoices: 3200,
    status: "Active"
  },
  {
    id: 3,
    name: "Tech Innovations LLC",
    contact: "Lisa Chen",
    email: "lisa@techinnovations.com",
    phone: "(555) 456-7890",
    address: "789 Innovation Blvd, Austin, TX 73301",
    paymentTerms: "Due on Receipt",
    taxRate: "0%",
    totalSales: 67800,
    outstandingInvoices: 0,
    status: "Active"
  }
]

const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-001",
    customerName: "Acme Corporation",
    amount: 5500,
    dueDate: "2024-02-20",
    status: "Sent",
    description: "Software development services - January 2024"
  },
  {
    id: 2,
    invoiceNumber: "INV-002",
    customerName: "Global Industries Inc",
    amount: 3200,
    dueDate: "2024-02-15",
    status: "Paid",
    description: "Monthly consulting services"
  },
  {
    id: 3,
    invoiceNumber: "INV-003",
    customerName: "Acme Corporation",
    amount: 3000,
    dueDate: "2024-02-05",
    status: "Overdue",
    description: "Website maintenance and updates"
  }
]

export function Customers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false)
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false)
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    address: "",
    paymentTerms: "",
    taxRate: ""
  })
  const [newInvoice, setNewInvoice] = useState({
    customer: "",
    invoiceDate: "",
    dueDate: "",
    amount: "",
    description: ""
  })

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.contact || !newCustomer.email) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success(`Customer "${newCustomer.name}" has been added successfully`)
    setIsAddCustomerOpen(false)
    setNewCustomer({
      name: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      paymentTerms: "",
      taxRate: ""
    })
  }

  const handleCreateInvoice = () => {
    if (!newInvoice.customer || !newInvoice.amount || !newInvoice.description) {
      toast.error("Please fill in all required fields")
      return
    }
    toast.success(`Invoice created for ${customers.find(c => c.id.toString() === newInvoice.customer)?.name || "customer"}`)
    setIsCreateInvoiceOpen(false)
    setNewInvoice({
      customer: "",
      invoiceDate: "",
      dueDate: "",
      amount: "",
      description: ""
    })
  }

  const handleViewInvoice = (invoiceNumber: string) => {
    toast.success(`Opening invoice ${invoiceNumber}`)
  }

  const handleSendReminder = (invoiceNumber: string, customerName: string) => {
    toast.success(`Payment reminder sent to ${customerName} for invoice ${invoiceNumber}`)
  }

  const handleGenerateReport = (reportType: string) => {
    toast.success(`${reportType} report generated successfully`)
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Customers</h1>
          <p className="text-muted-foreground">Manage your customer relationships and accounts receivable</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isCreateInvoiceOpen} onOpenChange={setIsCreateInvoiceOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Create Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer</Label>
                  <Select onValueChange={(value) => setNewInvoice(prev => ({ ...prev, customer: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map(customer => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoiceDate">Invoice Date</Label>
                  <Input 
                    id="invoiceDate" 
                    type="date"
                    value={newInvoice.invoiceDate}
                    onChange={(e) => setNewInvoice(prev => ({ ...prev, invoiceDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input 
                    id="dueDate" 
                    type="date"
                    value={newInvoice.dueDate}
                    onChange={(e) => setNewInvoice(prev => ({ ...prev, dueDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="0.00"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice(prev => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Enter invoice description" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateInvoiceOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateInvoiceOpen(false)}>
                  Create Invoice
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isAddCustomerOpen} onOpenChange={setIsAddCustomerOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Customer Name</Label>
                  <Input id="customerName" placeholder="Enter customer name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person</Label>
                  <Input id="contact" placeholder="Enter contact name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="customer@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter full address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentTerms">Payment Terms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select terms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net-15">Net 15</SelectItem>
                      <SelectItem value="net-30">Net 30</SelectItem>
                      <SelectItem value="net-60">Net 60</SelectItem>
                      <SelectItem value="due-on-receipt">Due on Receipt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tax Rate</Label>
                  <Input id="taxRate" placeholder="8.25%" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddCustomerOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddCustomerOpen(false)}>
                  Add Customer
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="customers" className="w-full">
        <TabsList>
          <TabsTrigger value="customers">All Customers</TabsTrigger>
          <TabsTrigger value="invoices">Invoices & Payments</TabsTrigger>
          <TabsTrigger value="reports">Customer Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search customers..."
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
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Payment Terms</TableHead>
                    <TableHead>Total Sales</TableHead>
                    <TableHead>Outstanding</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-muted-foreground">Tax Rate: {customer.taxRate}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{customer.contact}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            {customer.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="max-w-xs truncate">{customer.address}</span>
                        </div>
                      </TableCell>
                      <TableCell>{customer.paymentTerms}</TableCell>
                      <TableCell>${customer.totalSales.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={customer.outstandingInvoices > 0 ? "text-red-600" : "text-green-600"}>
                          ${customer.outstandingInvoices.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={customer.status === "Active" ? "default" : "secondary"}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Invoices & Payments</h3>
            <Button className="gap-2" onClick={() => setIsCreateInvoiceOpen(true)}>
              <Plus className="w-4 h-4" />
              Create Invoice
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                      <TableCell>{invoice.customerName}</TableCell>
                      <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant={
                          invoice.status === "Paid" ? "default" :
                          invoice.status === "Overdue" ? "destructive" : "secondary"
                        }>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{invoice.description}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          {invoice.status === "Sent" && (
                            <Button size="sm" variant="outline">
                              Send Reminder
                            </Button>
                          )}
                        </div>
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
                <CardTitle>Customer Aging Report</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">Generate Report</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sales by Customer</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">Generate Report</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">Generate Report</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}