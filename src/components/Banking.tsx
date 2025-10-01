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
import { Plus, Search, CreditCard, Building, Download, Upload } from "lucide-react"

const accounts = [
  {
    id: 1,
    name: "Business Checking",
    bankName: "First National Bank",
    accountNumber: "****1234",
    balance: 125430.50,
    type: "Checking",
    status: "Active"
  },
  {
    id: 2,
    name: "Business Savings",
    bankName: "First National Bank",
    accountNumber: "****5678",
    balance: 45200.00,
    type: "Savings",
    status: "Active"
  },
  {
    id: 3,
    name: "Business Credit Card",
    bankName: "Business Credit Union",
    accountNumber: "****9012",
    balance: -8750.25,
    type: "Credit Card",
    status: "Active"
  }
]

const transactions = [
  {
    id: 1,
    date: "2024-01-15",
    description: "ACH CREDIT - Acme Corporation",
    category: "Revenue",
    amount: 5500.00,
    account: "Business Checking",
    status: "Cleared",
    type: "Income"
  },
  {
    id: 2,
    date: "2024-01-14",
    description: "Office Supplies Purchase",
    category: "Office Expenses",
    amount: -245.67,
    account: "Business Credit Card",
    status: "Pending",
    type: "Expense"
  },
  {
    id: 3,
    date: "2024-01-14",
    description: "Utility Payment - Electric Company",
    category: "Utilities",
    amount: -342.18,
    account: "Business Checking",
    status: "Cleared",
    type: "Expense"
  },
  {
    id: 4,
    date: "2024-01-13",
    description: "Wire Transfer - Global Industries",
    category: "Revenue",
    amount: 3200.00,
    account: "Business Checking",
    status: "Cleared",
    type: "Income"
  },
  {
    id: 5,
    date: "2024-01-12",
    description: "Software Subscription",
    category: "Software",
    amount: -99.00,
    account: "Business Credit Card",
    status: "Cleared",
    type: "Expense"
  }
]

const categories = [
  "Revenue", "Cost of Goods Sold", "Office Expenses", "Utilities", "Software", 
  "Marketing", "Travel", "Professional Services", "Insurance", "Rent", "Equipment"
]

export function Banking() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAccount, setSelectedAccount] = useState("all")
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false)

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAccount = selectedAccount === "all" || transaction.account === selectedAccount
    return matchesSearch && matchesAccount
  })

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Banking</h1>
          <p className="text-muted-foreground">Manage your bank accounts and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Import Transactions
          </Button>
          <Dialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="account">Account</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map(account => (
                        <SelectItem key={account.id} value={account.name}>
                          {account.name} ({account.accountNumber})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Enter transaction description" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                      <SelectItem value="transfer">Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddTransactionOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddTransactionOpen(false)}>
                  Add Transaction
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="accounts" className="w-full">
        <TabsList>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-semibold ${totalBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(totalBalance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-sm text-muted-foreground">
                  {totalBalance >= 0 ? 'Positive' : 'Negative'} balance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.map((account) => (
              <Card key={account.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {account.type === "Credit Card" ? (
                        <CreditCard className="w-4 h-4 text-blue-500" />
                      ) : (
                        <Building className="w-4 h-4 text-green-500" />
                      )}
                      <CardTitle className="text-base">{account.name}</CardTitle>
                    </div>
                    <Badge variant={account.status === "Active" ? "default" : "secondary"}>
                      {account.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-sm text-muted-foreground">{account.bankName}</p>
                    <p className="text-sm text-muted-foreground mb-2">{account.accountNumber}</p>
                    <div className={`text-xl font-semibold ${
                      account.balance >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <p className="text-xs text-muted-foreground">{account.type}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Sync
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All accounts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Accounts</SelectItem>
                {accounts.map(account => (
                  <SelectItem key={account.id} value={account.name}>
                    {account.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="max-w-xs">
                        <div>
                          <p className="font-medium truncate">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${
                          transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={transaction.status === "Cleared" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reconciliation" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Reconciliation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reconcileAccount">Select Account</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account to reconcile" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map(account => (
                        <SelectItem key={account.id} value={account.name}>
                          {account.name} ({account.accountNumber})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="statementDate">Statement Date</Label>
                  <Input id="statementDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="statementBalance">Statement Balance</Label>
                  <Input id="statementBalance" type="number" step="0.01" placeholder="0.00" />
                </div>
                <Button className="w-full">Start Reconciliation</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Reconciliations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Business Checking</p>
                      <p className="text-sm text-muted-foreground">December 2024</p>
                    </div>
                    <Badge variant="default">Reconciled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Business Credit Card</p>
                      <p className="text-sm text-muted-foreground">December 2024</p>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}