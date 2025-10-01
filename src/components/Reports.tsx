import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Download, FileText, TrendingUp, TrendingDown, Calendar } from "lucide-react"

const profitLossData = [
  { category: 'Revenue', amount: 328000, type: 'income' },
  { category: 'Cost of Goods Sold', amount: -125000, type: 'expense' },
  { category: 'Gross Profit', amount: 203000, type: 'income' },
  { category: 'Operating Expenses', amount: -89000, type: 'expense' },
  { category: 'Office Expenses', amount: -12000, type: 'expense' },
  { category: 'Utilities', amount: -8500, type: 'expense' },
  { category: 'Software', amount: -4200, type: 'expense' },
  { category: 'Marketing', amount: -15000, type: 'expense' },
  { category: 'Net Income', amount: 74300, type: 'income' }
]

const balanceSheetData = {
  assets: [
    { category: 'Current Assets', items: [
      { name: 'Cash and Cash Equivalents', amount: 170630 },
      { name: 'Accounts Receivable', amount: 45200 },
      { name: 'Inventory', amount: 32000 },
    ]},
    { category: 'Fixed Assets', items: [
      { name: 'Equipment', amount: 85000 },
      { name: 'Accumulated Depreciation', amount: -15000 },
    ]}
  ],
  liabilities: [
    { category: 'Current Liabilities', items: [
      { name: 'Accounts Payable', amount: 23800 },
      { name: 'Accrued Expenses', amount: 8500 },
      { name: 'Short-term Debt', amount: 15000 },
    ]},
    { category: 'Long-term Liabilities', items: [
      { name: 'Long-term Debt', amount: 45000 },
    ]}
  ],
  equity: [
    { category: 'Owner\'s Equity', items: [
      { name: 'Owner\'s Capital', amount: 150000 },
      { name: 'Retained Earnings', amount: 75530 },
    ]}
  ]
}

const monthlyTrends = [
  { month: 'Jul', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Aug', revenue: 52000, expenses: 35000, profit: 17000 },
  { month: 'Sep', revenue: 48000, expenses: 31000, profit: 17000 },
  { month: 'Oct', revenue: 61000, expenses: 42000, profit: 19000 },
  { month: 'Nov', revenue: 55000, expenses: 38000, profit: 17000 },
  { month: 'Dec', revenue: 67000, expenses: 45000, profit: 22000 },
]

const reportTemplates = [
  { id: 1, name: 'Profit & Loss Statement', description: 'Income and expenses for a specific period', icon: TrendingUp },
  { id: 2, name: 'Balance Sheet', description: 'Assets, liabilities, and equity at a point in time', icon: FileText },
  { id: 3, name: 'Cash Flow Statement', description: 'Cash inflows and outflows', icon: TrendingDown },
  { id: 4, name: 'Vendor Aging Report', description: 'Outstanding bills by age', icon: Calendar },
  { id: 5, name: 'Customer Aging Report', description: 'Outstanding invoices by age', icon: Calendar },
  { id: 6, name: 'Tax Summary Report', description: 'Tax liability and payments', icon: FileText },
  { id: 7, name: 'General Ledger', description: 'All account transactions', icon: FileText },
  { id: 8, name: 'Trial Balance', description: 'Account balances verification', icon: FileText },
]

export function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Reports</h1>
          <p className="text-muted-foreground">Generate financial reports and analyze your business performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export All Reports
          </Button>
        </div>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
          <TabsTrigger value="profit-loss">Profit & Loss</TabsTrigger>
          <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reportTemplates.map((template) => {
              const Icon = template.icon
              return (
                <Card key={template.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Period</Label>
                          <Select defaultValue="current-month">
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="current-month">Current Month</SelectItem>
                              <SelectItem value="last-month">Last Month</SelectItem>
                              <SelectItem value="quarter">This Quarter</SelectItem>
                              <SelectItem value="year">This Year</SelectItem>
                              <SelectItem value="custom">Custom Range</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Format</Label>
                          <Select defaultValue="pdf">
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pdf">PDF</SelectItem>
                              <SelectItem value="excel">Excel</SelectItem>
                              <SelectItem value="csv">CSV</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button className="w-full" size="sm">
                        Generate Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="profit-loss" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Profit & Loss Statement</h3>
            <div className="flex gap-2">
              <Select defaultValue="current-month">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Profit & Loss Statement - January 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profitLossData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                    <span className={`${item.category === 'Gross Profit' || item.category === 'Net Income' ? 'font-semibold' : ''}`}>
                      {item.category}
                    </span>
                    <span className={`font-medium ${
                      item.type === 'income' ? 'text-green-600' : 'text-red-600'
                    } ${item.category === 'Gross Profit' || item.category === 'Net Income' ? 'text-lg' : ''}`}>
                      {item.amount >= 0 ? '' : '-'}${Math.abs(item.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance-sheet" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Balance Sheet</h3>
            <div className="flex gap-2">
              <Input type="date" className="w-[150px]" defaultValue="2024-01-31" />
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Assets */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Assets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {balanceSheetData.assets.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 className="font-medium mb-2">{section.category}</h4>
                    <div className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>${item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total Assets</span>
                    <span>$317,830</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liabilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Liabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {balanceSheetData.liabilities.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 className="font-medium mb-2">{section.category}</h4>
                    <div className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>${item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total Liabilities</span>
                    <span>$92,300</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Equity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {balanceSheetData.equity.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 className="font-medium mb-2">{section.category}</h4>
                    <div className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>${item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total Equity</span>
                    <span>$225,530</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Balance Check</p>
                <p className="font-semibold">Assets = Liabilities + Equity</p>
                <p className="text-sm">$317,830 = $92,300 + $225,530 ✓</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Financial Trends</h3>
            <Select defaultValue="6-months">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-months">3 Months</SelectItem>
                <SelectItem value="6-months">6 Months</SelectItem>
                <SelectItem value="12-months">12 Months</SelectItem>
                <SelectItem value="24-months">24 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue, Expenses & Profit Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} name="Revenue" />
                  <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} name="Expenses" />
                  <Line type="monotone" dataKey="profit" stroke="#ffc658" strokeWidth={2} name="Profit" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Monthly Revenue</p>
                    <p className="text-2xl font-semibold">$54,667</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm text-green-600 mt-2">↗ +15.3% vs last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Monthly Expenses</p>
                    <p className="text-2xl font-semibold">$37,167</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-sm text-red-600 mt-2">↗ +8.7% vs last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Monthly Profit</p>
                    <p className="text-2xl font-semibold">$17,500</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm text-green-600 mt-2">↗ +28.2% vs last period</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}