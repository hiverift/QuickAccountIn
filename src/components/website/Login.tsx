import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calculator, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface LoginProps {
  onLogin: (type: "customer") => void;
  onNavigate: (page: string) => void;
}

export function Login({ onLogin, onNavigate }: LoginProps) {
  const DASHBOARD_URL = "https://main.drxzkqf5v2a2k.amplifyapp.com/";

  const [showPassword, setShowPassword] = useState(false);
  const [customerLogin, setCustomerLogin] = useState({ email: "", password: "" });

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerLogin.email || !customerLogin.password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Customer login successful!");
    window.location.href = DASHBOARD_URL; // Redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Calculator className="w-12 h-12 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Quick Accounting</span>
          </div>
          <h2 className="text-3xl text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => onNavigate("signup")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up for free
            </button>
          </p>
        </div>

        <Card className="w-full">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Login to Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCustomerLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customer-email">Email Address</Label>
                <Input
                  id="customer-email"
                  type="email"
                  placeholder="Enter your email"
                  value={customerLogin.email}
                  onChange={(e) =>
                    setCustomerLogin((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customer-password">Password</Label>
                <div className="relative">
                  <Input
                    id="customer-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={customerLogin.password}
                    onChange={(e) =>
                      setCustomerLogin((prev) => ({ ...prev, password: e.target.value }))
                    }
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full">
                Sign In to Customer Portal
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Quick Demo Access</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = DASHBOARD_URL)}
                  className="w-full"
                >
                  Demo Customer
                </Button>
              </div>
            </div>
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
  );
}
