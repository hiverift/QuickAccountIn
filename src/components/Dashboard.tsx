import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ArrowUpIcon, ArrowDownIcon, DollarSign, Users, ShoppingCart, AlertTriangle } from "lucide-react"
import { Badge } from "./ui/badge"

const monthlyData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 31000 },
  { month: 'Apr', revenue: 61000, expenses: 42000 },
  { month: 'May', revenue: 55000, expenses: 38000 },
  { month: 'Jun', revenue: 67000, expenses: 45000 },
]

const vendorData = [
  { name: 'Tech Supplies Co', value: 35, color: '#8884d8' },
  { name: 'Office Materials Inc', value: 25, color: '#82ca9d' },
  { name: 'Equipment Rental LLC', value: 20, color: '#ffc658' },
  { name: 'Marketing Agency', value: 15, color: '#ff7c7c' },
  { name: 'Others', value: 5, color: '#8dd1e1' },
]

const recentTransactions = [
  { id: 1, type: 'Invoice', customer: 'Acme Corp', amount: 5500, status: 'Paid', date: '2024-01-15' },
  { id: 2, type: 'Bill', vendor: 'Tech Supplies Co', amount: -2200, status: 'Pending', date: '2024-01-14' },
  { id: 3, type: 'Invoice', customer: 'Global Inc', amount: 3200, status: 'Overdue', date: '2024-01-10' },
  { id: 4, type: 'Bill', vendor: 'Office Materials Inc', amount: -890, status: 'Paid', date: '2024-01-12' },
]

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$328,000</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Outstanding Invoices</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$45,200</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownIcon className="h-3 w-3 text-green-500 mr-1" />
              -8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Outstanding Bills</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$23,800</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpIcon className="h-3 w-3 text-red-500 mr-1" />
              +5.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Tax Due</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$8,420</div>
            <p className="text-xs text-muted-foreground">Due: March 15, 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vendor Spending Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vendorData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {vendorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {vendorData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.type === 'Invoice' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="font-medium">
                      {transaction.type === 'Invoice' ? transaction.customer : transaction.vendor}
                    </p>
                    <p className="text-sm text-muted-foreground">{transaction.type} • {transaction.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-medium ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ${Math.abs(transaction.amount).toLocaleString()}
                  </span>
                  <Badge variant={
                    transaction.status === 'Paid' ? 'default' : 
                    transaction.status === 'Overdue' ? 'destructive' : 'secondary'
                  }>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}