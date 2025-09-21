import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardContent } from "./components/ui/card";

import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import {
  Leaf,
  Users,
  Building2,
  Shield,
  Calendar,
  MapPin,
  TrendingUp,
  Recycle,
  MessageCircle,
  X,
  Send,
  Upload,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
  Truck,
  Store,
  BarChart3,
  Home,
  UserCheck,
  Package,
  LogIn,
  Eye,
  EyeOff,
  ArrowLeft,
  FileText,
  Lock,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [currentView, setCurrentView] = useState("homepage");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Eco Link Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Login state
  const [selectedRole, setSelectedRole] = useState("");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    govId: "",
    companyRegNo: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setChatMessages([...chatMessages, userMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          text: "Thank you for your message! I'll help you with that right away. For immediate assistance, please visit our FAQ section or contact our support team.",
          sender: "bot",
          timestamp: new Date(),
        };
        setChatMessages((prev) => [...prev, botResponse]);
      }, 1000);

      setNewMessage("");
    }
  };

  const quickReplies = [
    "Schedule a Pickup",
    "Waste Sorting Guidelines",
    "Ragmen Registration",
    "Marketplace Information",
    "Government Programs",
  ];

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - in real app, this would call an API
    if (loginForm.email && loginForm.password) {
      // Navigate to the appropriate dashboard based on role
      if (selectedRole === "common-people") {
        setCurrentView("common-people");
      } else if (selectedRole === "ragmen") {
        setCurrentView("ragmen");
      } else if (selectedRole === "recycling-company") {
        setCurrentView("recycling-company");
      } else if (selectedRole === "government-admin") {
        setCurrentView("government-admin");
      }

      // Reset form
      setLoginForm({
        email: "",
        password: "",
        govId: "",
        companyRegNo: "",
      });
      setSelectedRole("");
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setLoginForm({
      email: "",
      password: "",
      govId: "",
      companyRegNo: "",
    });
  };

  if (currentView === "homepage") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl text-green-800">Eco Link</h1>
                  <p className="text-xs text-green-600">Government Supported</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8 items-center">
                <a href="#" className="text-green-700 hover:text-green-900">
                  About
                </a>
                <a href="#" className="text-green-700 hover:text-green-900">
                  FAQ
                </a>
                <a href="#" className="text-green-700 hover:text-green-900">
                  Contact
                </a>
                <a href="#" className="text-green-700 hover:text-green-900">
                  Privacy Policy
                </a>
              </nav>

              {/* Mobile Login Button */}
              <div className="md:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentView("login")}
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  <LogIn className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: "url('/bg1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-green-800">
                  Government Supported Platform
                </span>
              </div>
            </div>

            <div className="mb-6 bg-white/50 rounded-full inline-block"
            >
              <h1 className="text-5xl  text-green-950 mb-6 max-w-4xl mx-auto font-bold font-style-poppins"
              >
                Connecting Communities for Sustainable Waste Management
              </h1>
            </div>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
              Eco Link brings together citizens, ragmen, recycling companies,
              and government oversight to create a transparent, sustainable
              waste management ecosystem that supports livelihoods and protects
              our environment.
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedRole("common-people");
                  setCurrentView("login");
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-green-800">Common People</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule Pickup
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedRole("ragmen");
                  setCurrentView("login");
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Truck className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-green-800">Ragmen</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Join/Register
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedRole("recycling-company");
                  setCurrentView("login");
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Building2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-green-800">Recycling Companies</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Partner/Login
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedRole("government-admin");
                  setCurrentView("login");
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-green-800">Government Admin</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Admin Login
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Awareness Video Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-red-900 mb-4">
                The Urgent Need for Action
              </h2>
              <p className="text-red-700 max-w-2xl mx-auto">
                Every minute, tons of waste pollute our environment. See the
                impact and be part of the solution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="bg-black rounded-lg overflow-hidden aspect-video relative group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1749805339958-4b1d0f16423d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwcG9sbHV0aW9uJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NTgzOTE5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Environmental impact of waste pollution"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-3">
                      <h4 className="text-red-800 mb-1">
                        Impact of Plastic Pollution
                      </h4>
                      <p className="text-red-600 text-sm">
                        See how waste affects our environment • 3:45
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-red-800 mb-2">Critical Statistics</h4>
                      <ul className="text-red-600 space-y-1 text-sm">
                        <li>
                          • 62 million tons of waste generated annually in India
                        </li>
                        <li>• Only 43% of waste is properly collected</li>
                        <li>• 92% of organic waste goes to landfills</li>
                        <li>• 2.3 million ragmen work in informal sector</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-orange-800 mb-2">Health Impact</h4>
                      <p className="text-orange-600 text-sm">
                        Improper waste management affects 1.5 million people
                        daily, causing respiratory issues and contaminating
                        water sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Impact Gallery */}
        <section className="py-16 bg-gradient-to-b from-gray-100 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-green-900 mb-4">
                Transformation Through Action
              </h2>
              <p className="text-green-700 max-w-2xl mx-auto">
                Witness the incredible transformation when communities come
                together for sustainable waste management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Before/After Cards */}
              <Card className="overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1734524874669-4116efcc8b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMG1hbmFnZW1lbnQlMjBhd2FyZW5lc3MlMjBpbmRpYXxlbnwxfHx8fDE3NTgzOTE5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community waste management awareness"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Before</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-green-800 mb-2">
                    Unorganized Waste Collection
                  </h4>
                  <p className="text-green-600 text-sm">
                    Scattered waste, health hazards, and no livelihood security
                    for ragmen
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdWNjZXNzJTIwc3RvcnklMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NTgzOTE5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Recycling success transformation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">After</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-green-800 mb-2">
                    Organized Collection Network
                  </h4>
                  <p className="text-green-600 text-sm">
                    Systematic pickup, verified workers, and transparent
                    tracking
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1668458278788-276731ebac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGVudmlyb25tZW50JTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzU4MzkxOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Clean environment nature green"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Result</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-green-800 mb-2">
                    Environmental Restoration
                  </h4>
                  <p className="text-green-600 text-sm">
                    Cleaner communities, reduced pollution, and sustainable
                    future
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waste Segregation Education */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-blue-900 mb-4">
                Learn Proper Waste Segregation
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                Simple steps that make a huge difference. Learn how to segregate
                waste correctly for maximum environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHNlZ3JlZ2F0aW9uJTIwYmlucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1ODM5MTk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Colorful waste segregation bins"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="mb-2">Interactive Segregation Guide</h4>
                  <p className="text-sm opacity-90">
                    Click to learn about each waste type
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      type: "Organic",
                      icon: "🍃",
                      color: "bg-green-500",
                      items: "Food waste, Garden waste",
                    },
                    {
                      type: "Plastic",
                      icon: "♻️",
                      color: "bg-blue-500",
                      items: "Bottles, Containers",
                    },
                    {
                      type: "Paper",
                      icon: "📄",
                      color: "bg-yellow-500",
                      items: "Newspapers, Cardboard",
                    },
                    {
                      type: "E-waste",
                      icon: "📱",
                      color: "bg-red-500",
                      items: "Electronics, Batteries",
                    },
                  ].map((waste, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div
                        className={`${waste.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3`}
                      >
                        {waste.icon}
                      </div>
                      <h5 className="text-blue-800 mb-1">{waste.type}</h5>
                      <p className="text-blue-600 text-xs">{waste.items}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-blue-800 mb-3">
                    Why Segregation Matters
                  </h4>
                  <ul className="text-blue-600 space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Increases recycling efficiency by 85%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduces landfill waste by 60%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Creates better income for ragmen</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Protects environment and public health</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-green-900 mb-4">
                Real Stories, Real Impact
              </h2>
              <p className="text-green-700 max-w-2xl mx-auto">
                Meet the heroes of our platform - citizens, ragmen, and
                companies creating positive change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616680214429-d79397e56688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbnVwJTIwdm9sdW50ZWVycyUyMHRlYW13b3JrfGVufDF8fHx8MTc1ODMwNzcxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community cleanup volunteers teamwork"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      Success Story
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-green-800 mb-2">
                    Community Transformation
                  </h4>
                  <p className="text-green-600 text-sm mb-4">
                    "Our neighborhood went from 40% waste collection to 95% in
                    just 6 months with Eco Link."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-800 text-sm">Priya Sharma</p>
                      <p className="text-green-600 text-xs">
                        Resident, Sector 21
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                    alt="Ragman success story"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">
                      Ragman Story
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-orange-800 mb-2">
                    Livelihood Transformation
                  </h4>
                  <p className="text-orange-600 text-sm mb-4">
                    "From ₹200/day to ₹800/day with government benefits. My
                    family's future is secure now."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Truck className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-orange-800 text-sm">Ram Kumar</p>
                      <p className="text-orange-600 text-xs">
                        Verified Ragman, ID: RG001245
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
                    alt="Recycling company success"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white">
                      Company Impact
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-purple-800 mb-2">Business Growth</h4>
                  <p className="text-purple-600 text-sm mb-4">
                    "300% increase in recycled material supply. Our eco-products
                    now reach 50,000+ families."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-purple-800 text-sm">
                        EcoRecycle Industries
                      </p>
                      <p className="text-purple-600 text-xs">Partner Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-green-900 mb-4">How It Works</h2>
              <p className="text-green-700 max-w-2xl mx-auto">
                Simple 3-step process for transparent and sustainable waste
                management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-green-800 mb-2">Schedule & Sort</h3>
                <p className="text-green-600">
                  Citizens schedule waste pickup and sort materials according to
                  guidelines
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-green-800 mb-2">Collect & Transport</h3>
                <p className="text-green-600">
                  Verified ragmen collect sorted waste with government oversight
                  and support
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-green-800 mb-2">Recycle & Reuse</h3>
                <p className="text-green-600">
                  Partner companies process materials into eco-friendly products
                  for marketplace
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl text-green-900 mb-6">
                  Ragmen Organization & Government Supervision
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-green-800">
                        Government Verification
                      </h4>
                      <p className="text-green-600">
                        All ragmen are verified and registered through
                        government oversight
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-green-800">Livelihood Support</h4>
                      <p className="text-green-600">
                        Steady income and government benefits for registered
                        waste collectors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-green-800">Transparent Operations</h4>
                      <p className="text-green-600">
                        Real-time tracking and monitoring of all waste
                        collection activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 p-8 rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                  alt="Waste management team"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Preview */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-green-900 mb-4">
                E-commerce Marketplace
              </h2>
              <p className="text-green-700 max-w-2xl mx-auto">
                Discover eco-friendly products made from recycled materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Recycled Paper Products",
                  price: "₹299",
                  image:
                    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop",
                },
                {
                  name: "Eco-Friendly Bags",
                  price: "₹199",
                  image:
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
                },
                {
                  name: "Recycled Plastic Furniture",
                  price: "₹2,499",
                  image:
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
                },
                {
                  name: "Organic Compost",
                  price: "₹149",
                  image:
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
                },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="text-green-800 mb-2">{product.name}</h4>
                    <p className="text-green-600">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-green-900 mb-4">
                Community Impact & Sustainability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">50,000+</div>
                <p className="text-green-700">Tons Recycled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">1,200+</div>
                <p className="text-green-700">Registered Ragmen</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">85%</div>
                <p className="text-green-700">Waste Diverted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">25,000+</div>
                <p className="text-green-700">Happy Families</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-6 w-6" />
                  <span>Eco Link</span>
                </div>
                <p className="text-green-200 mb-4">
                  Government supported platform for sustainable waste management
                </p>
                <div className="flex space-x-4">
                  <Facebook className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
                  <Twitter className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
                  <Instagram className="h-5 w-5 text-green-200 hover:text-white cursor-pointer" />
                </div>
              </div>

              <div>
                <h4 className="mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-green-200 hover:text-white">
                    About Us
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    How It Works
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    Marketplace
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    Impact
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Support</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-green-200 hover:text-white">
                    FAQ
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    Contact
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="block text-green-200 hover:text-white">
                    Terms of Service
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-green-200">1800-ECO-LINK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-green-200">
                      support@ecolink.gov.in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8 bg-green-600" />

            <div className="text-center text-green-200">
              <p>
                &copy; 2025 Eco Link - Government of India Initiative. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Chatbot */}
        {chatOpen && (
          <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-green-200 flex flex-col z-50">
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3>Eco Link Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-green-700 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg max-w-xs ${
                      message.sender === "user"
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-2 space-y-2">
              <div className="flex flex-wrap gap-1">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs"
                  >
                    {reply}
                  </Button>
                ))}
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about waste pickup, ragmen, recycling..."
                  className="flex-1 p-2 border border-green-200 rounded-md text-sm"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="bg-green-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-4 right-4 rounded-full p-4 bg-green-600 hover:bg-green-700 shadow-lg z-40"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  // Login Page
  if (currentView === "login") {
    const roleConfig = {
      "common-people": {
        name: "Common People",
        icon: Users,
        color: "blue",
        description:
          "Schedule waste pickup and track your environmental impact",
      },
      ragmen: {
        name: "Ragmen",
        icon: Truck,
        color: "orange",
        description: "Government-verified waste collection professionals",
      },
      "recycling-company": {
        name: "Recycling Company",
        icon: Building2,
        color: "purple",
        description:
          "Partner companies processing waste into eco-friendly products",
      },
      "government-admin": {
        name: "Government Admin",
        icon: Shield,
        color: "green",
        description: "Platform oversight and regulatory management",
      },
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCurrentView("homepage");
                    setSelectedRole("");
                    setLoginForm({
                      email: "",
                      password: "",
                      govId: "",
                      companyRegNo: "",
                    });
                  }}
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Button>
                <div className="bg-green-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl text-green-800">Eco Link</h1>
                  <p className="text-xs text-green-600">Government Supported</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!selectedRole ? (
            // Role Selection
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-green-800">Secure Government Login</span>
              </div>
              <h1 className="text-4xl text-green-900 mb-4">Choose Your Role</h1>
              <p className="text-xl text-green-700 mb-8">
                Select your user type to access the appropriate dashboard
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {Object.entries(roleConfig).map(([key, config]) => {
                  const IconComponent = config.icon;
                  return (
                    <Card
                      key={key}
                      className={`p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-${config.color}-200`}
                      onClick={() => handleRoleSelect(key)}
                    >
                      <CardContent className="text-center p-0">
                        <div
                          className={`bg-${config.color}-100 p-4 rounded-full w-fit mx-auto mb-4`}
                        >
                          <IconComponent
                            className={`h-8 w-8 text-${config.color}-600`}
                          />
                        </div>
                        <h3 className="text-lg text-green-800 mb-2">
                          {config.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          {config.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-2">
                  <Lock className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800">Security Notice</span>
                </div>
                <p className="text-sm text-yellow-700">
                  This platform is protected by government-grade security. All
                  user data is encrypted and monitored for compliance with data
                  protection regulations.
                </p>
              </div>
            </div>
          ) : (
            // Login Form
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div
                  className={`bg-${roleConfig[selectedRole].color}-100 p-4 rounded-full w-fit mx-auto mb-4`}
                >
                  {React.createElement(roleConfig[selectedRole].icon, {
                    className: `h-12 w-12 text-${roleConfig[selectedRole].color}-600`,
                  })}
                </div>
                <h2 className="text-2xl text-green-900 mb-2">
                  {isSignUp ? "Register as" : "Login as"}{" "}
                  {roleConfig[selectedRole].name}
                </h2>
                <p className="text-green-600">
                  {roleConfig[selectedRole].description}
                </p>
              </div>

              <Card className="p-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Email/Phone */}
                  <div>
                    <label className="block text-sm text-green-800 mb-2">
                      Email or Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={loginForm.email}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, email: e.target.value })
                      }
                      placeholder="Enter your email or phone number"
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {/* Government ID for Ragmen and Admin */}
                  {(selectedRole === "ragmen" ||
                    selectedRole === "government-admin") && (
                    <div>
                      <label className="block text-sm text-green-800 mb-2">
                        Government ID Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={loginForm.govId}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, govId: e.target.value })
                        }
                        placeholder="Enter your Aadhaar or Government ID"
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  )}

                  {/* Company Registration for Recycling Companies */}
                  {selectedRole === "recycling-company" && (
                    <div>
                      <label className="block text-sm text-green-800 mb-2">
                        Company Registration Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={loginForm.companyRegNo}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            companyRegNo: e.target.value,
                          })
                        }
                        placeholder="Enter your company registration number"
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  )}

                  {/* Password */}
                  <div>
                    <label className="block text-sm text-green-800 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                        placeholder="Enter your password"
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className={`w-full bg-${roleConfig[selectedRole].color}-600 hover:bg-${roleConfig[selectedRole].color}-700 text-white py-3`}
                  >
                    {isSignUp ? "Create Account" : "Login"}
                  </Button>

                  {/* Toggle Sign Up / Login */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      {isSignUp
                        ? "Already have an account? Login here"
                        : "Don't have an account? Sign up here"}
                    </button>
                  </div>

                  {/* Forgot Password */}
                  {!isSignUp && (
                    <div className="text-center">
                      <button
                        type="button"
                        className="text-green-600 hover:text-green-800 text-sm"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  )}

                  {/* Back to Role Selection */}
                  <div className="text-center pt-4 border-t border-green-100">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("")}
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      Change user role
                    </button>
                  </div>
                </form>
              </Card>

              {/* Security Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Government-grade security protocols</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>GDPR compliant data protection</span>
                </div>
              </div>

              {/* Government Partnership Notice */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800">Government Partnership</span>
                </div>
                <p className="text-sm text-blue-700 text-center">
                  This platform is an official initiative of the Government of
                  India, ensuring transparency and accountability in waste
                  management operations.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Common People Dashboard
  if (currentView === "common-people") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("homepage")}
                >
                  <Home className="h-5 w-5" />
                </Button>
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl text-blue-800">
                  Common People Dashboard
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Waste Pickup Scheduling */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl text-blue-800">
                    Schedule Waste Pickup
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      {
                        type: "Organic",
                        icon: "🍃",
                        color: "bg-green-100 text-green-800",
                      },
                      {
                        type: "Plastic",
                        icon: "♻️",
                        color: "bg-blue-100 text-blue-800",
                      },
                      {
                        type: "Paper & Cardboard",
                        icon: "📄",
                        color: "bg-yellow-100 text-yellow-800",
                      },
                      {
                        type: "Glass",
                        icon: "🧊",
                        color: "bg-purple-100 text-purple-800",
                      },
                      {
                        type: "Electronic (E-waste)",
                        icon: "📱",
                        color: "bg-red-100 text-red-800",
                      },
                      {
                        type: "Hazardous",
                        icon: "⚠️",
                        color: "bg-orange-100 text-orange-800",
                      },
                      {
                        type: "Metal",
                        icon: "🔧",
                        color: "bg-gray-100 text-gray-800",
                      },
                      {
                        type: "Others",
                        icon: "📦",
                        color: "bg-indigo-100 text-indigo-800",
                      },
                    ].map((waste) => (
                      <div
                        key={waste.type}
                        className={`p-3 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${waste.color}`}
                      >
                        <div className="text-2xl mb-1">{waste.icon}</div>
                        <p className="text-sm">{waste.type}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                      defaultValue={new Date().toISOString().split("T")[0]}
                    />
                    <select className="w-full p-3 border border-gray-200 rounded-lg">
                      <option>Select Time Slot</option>
                      <option>Morning (8:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 4:00 PM)</option>
                      <option>Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                    <textarea
                      placeholder="Additional instructions or special requirements..."
                      className="w-full p-3 border border-gray-200 rounded-lg h-20"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Schedule Pickup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sorting Guidelines & Profile */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg text-blue-800">Sorting Guidelines</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <div className="mb-2">
                      <span className="text-green-600">🍃 Organic:</span> Food
                      waste, garden waste
                    </div>
                    <div className="mb-2">
                      <span className="text-blue-600">♻️ Plastic:</span> Clean
                      bottles, containers
                    </div>
                    <div className="mb-2">
                      <span className="text-yellow-600">📄 Paper:</span>{" "}
                      Newspapers, cardboard
                    </div>
                    <div className="mb-2">
                      <span className="text-red-600">📱 E-waste:</span>{" "}
                      Electronics, batteries
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg text-blue-800">Profile</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Name:</strong> John Doe
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Green Street, Eco City
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <Button variant="outline" className="w-full mt-3">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pickup History */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg text-blue-800">Recent Pickup History</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    date: "2024-01-15",
                    types: ["Organic", "Plastic"],
                    status: "Completed",
                    ragman: "Ram Kumar",
                  },
                  {
                    date: "2024-01-10",
                    types: ["Paper", "Glass"],
                    status: "Completed",
                    ragman: "Sita Devi",
                  },
                  {
                    date: "2024-01-08",
                    types: ["E-waste"],
                    status: "In Progress",
                    ragman: "Mohan Singh",
                  },
                ].map((pickup, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm">{pickup.date}</p>
                      <p className="text-xs text-gray-600">
                        Types: {pickup.types.join(", ")}
                      </p>
                      <p className="text-xs text-gray-600">
                        Ragman: {pickup.ragman}
                      </p>
                    </div>
                    <Badge
                      variant={
                        pickup.status === "Completed" ? "default" : "secondary"
                      }
                      className={
                        pickup.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {pickup.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Ragmen Dashboard
  if (currentView === "ragmen") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("homepage")}
                >
                  <Home className="h-5 w-5" />
                </Button>
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl text-orange-800">Ragmen Dashboard</h1>
              </div>
              <Badge className="bg-green-100 text-green-800">
                <UserCheck className="h-4 w-4 mr-1" />
                Government Verified
              </Badge>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Scheduled Pickups */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl text-orange-800">
                    Today's Scheduled Pickups
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "P001",
                        address: "123 Green Street, Sector 15",
                        time: "10:00 AM",
                        types: ["Organic", "Plastic"],
                        priority: "High",
                        distance: "2.5 km",
                        contact: "+91 98765 43210",
                      },
                      {
                        id: "P002",
                        address: "456 Eco Avenue, Sector 22",
                        time: "2:00 PM",
                        types: ["Paper", "Glass"],
                        priority: "Medium",
                        distance: "1.8 km",
                        contact: "+91 87654 32109",
                      },
                      {
                        id: "P003",
                        address: "789 Recycle Road, Sector 8",
                        time: "4:30 PM",
                        types: ["E-waste"],
                        priority: "High",
                        distance: "3.2 km",
                        contact: "+91 76543 21098",
                      },
                    ].map((pickup, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-orange-800">
                              Pickup #{pickup.id}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {pickup.address}
                            </p>
                          </div>
                          <Badge
                            variant={
                              pickup.priority === "High"
                                ? "destructive"
                                : "secondary"
                            }
                            className={
                              pickup.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {pickup.priority}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          <p>
                            Time: {pickup.time} | Distance: {pickup.distance}
                          </p>
                          <p>Types: {pickup.types.join(", ")}</p>
                          <p>Contact: {pickup.contact}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-orange-600 hover:bg-orange-700"
                          >
                            <MapPin className="h-4 w-4 mr-1" />
                            Navigate
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            Mark Complete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile & Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg text-orange-800">Profile</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UserCheck className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="text-orange-800">Ram Kumar</h4>
                    <p className="text-sm text-gray-600">ID: RG001245</p>
                    <Badge className="bg-green-100 text-green-800 mt-2">
                      Verified
                    </Badge>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p>
                      <strong>Area:</strong> Central District
                    </p>
                    <p>
                      <strong>Experience:</strong> 3 years
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg text-orange-800">This Month</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Pickups Completed:
                    </span>
                    <span className="text-orange-600">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Earnings:</span>
                    <span className="text-orange-600">₹8,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Government Benefits:
                    </span>
                    <span className="text-green-600">₹2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Rating:</span>
                    <span className="text-orange-600">4.8/5</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg text-orange-800">
                    Route Optimization
                  </h3>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Optimize Today's Route
                  </Button>
                  <p className="text-xs text-gray-600 mt-2">
                    AI-powered route planning to maximize efficiency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Work History */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg text-orange-800">Recent Work History</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    date: "2024-01-15",
                    pickups: 8,
                    earnings: "₹320",
                    area: "Sector 15-18",
                  },
                  {
                    date: "2024-01-14",
                    pickups: 6,
                    earnings: "₹240",
                    area: "Sector 20-22",
                  },
                  {
                    date: "2024-01-13",
                    pickups: 10,
                    earnings: "₹400",
                    area: "Sector 8-12",
                  },
                ].map((day, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm text-orange-800">{day.date}</p>
                      <p className="text-xs text-gray-600">Area: {day.area}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-orange-600">
                        {day.pickups} pickups
                      </p>
                      <p className="text-sm text-green-600">{day.earnings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Recycling Company Dashboard
  if (currentView === "recycling-company") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("homepage")}
                >
                  <Home className="h-5 w-5" />
                </Button>
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl text-purple-800">
                  EcoRecycle Industries
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Waste Inventory */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl text-purple-800">
                    Incoming Waste Supplies
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Plastic",
                        quantity: "2,500 kg",
                        source: "Central District",
                        status: "Processing",
                        value: "₹25,000",
                      },
                      {
                        type: "Paper",
                        quantity: "1,800 kg",
                        source: "East District",
                        status: "Received",
                        value: "₹18,000",
                      },
                      {
                        type: "Glass",
                        quantity: "900 kg",
                        source: "North District",
                        status: "In Transit",
                        value: "₹9,000",
                      },
                      {
                        type: "Metal",
                        quantity: "1,200 kg",
                        source: "South District",
                        status: "Processing",
                        value: "₹36,000",
                      },
                    ].map((supply, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-purple-800">
                              {supply.type} Waste
                            </h4>
                            <p className="text-sm text-gray-600">
                              Source: {supply.source}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className={
                              supply.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : supply.status === "Received"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {supply.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Quantity: {supply.quantity}</p>
                          <p>Estimated Value: {supply.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg text-purple-800">Monthly Overview</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Waste Processed:
                    </span>
                    <span className="text-purple-600">45,000 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Products Made:
                    </span>
                    <span className="text-purple-600">2,340 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue:</span>
                    <span className="text-green-600">₹4,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Orders Fulfilled:
                    </span>
                    <span className="text-purple-600">186</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg text-purple-800">
                    Processing Capacity
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Plastic</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Paper</span>
                      <span>72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Glass</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Marketplace Management */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg text-purple-800">
                E-commerce Marketplace Management
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "Recycled Paper Products",
                    stock: 245,
                    sales: 89,
                    rating: 4.6,
                  },
                  {
                    name: "Eco-Friendly Bags",
                    stock: 156,
                    sales: 124,
                    rating: 4.8,
                  },
                  {
                    name: "Recycled Plastic Furniture",
                    stock: 67,
                    sales: 23,
                    rating: 4.5,
                  },
                  {
                    name: "Garden Compost",
                    stock: 340,
                    sales: 178,
                    rating: 4.9,
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <h4 className="text-sm text-purple-800 mb-2">
                      {product.name}
                    </h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>Stock: {product.stock} units</p>
                      <p>Sales: {product.sales} this month</p>
                      <p>Rating: {product.rating}/5</p>
                    </div>
                    <div className="flex space-x-1 mt-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Government Admin Dashboard
  if (currentView === "government-admin") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("homepage")}
                >
                  <Home className="h-5 w-5" />
                </Button>
                <div className="bg-green-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl text-green-800">
                  Government Admin Dashboard
                </h1>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Super Admin</Badge>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Citizens</p>
                    <p className="text-2xl text-blue-600">25,847</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Verified Ragmen</p>
                    <p className="text-2xl text-orange-600">1,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Partner Companies</p>
                    <p className="text-2xl text-purple-600">34</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Waste Processed</p>
                    <p className="text-2xl text-green-600">50.2T</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <h3 className="text-lg text-green-800">Pending Approvals</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      type: "Ragman Registration",
                      name: "Suresh Kumar",
                      id: "RG001456",
                      priority: "High",
                    },
                    {
                      type: "Company Partnership",
                      name: "GreenTech Recycling",
                      id: "CP000123",
                      priority: "Medium",
                    },
                    {
                      type: "Ragman Registration",
                      name: "Meera Devi",
                      id: "RG001457",
                      priority: "Medium",
                    },
                    {
                      type: "Benefits Claim",
                      name: "Ram Singh",
                      id: "BC000234",
                      priority: "Low",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm text-green-800">
                            {item.type}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {item.name} (ID: {item.id})
                          </p>
                        </div>
                        <Badge
                          variant={
                            item.priority === "High"
                              ? "destructive"
                              : item.priority === "Medium"
                              ? "secondary"
                              : "outline"
                          }
                          className="text-xs"
                        >
                          {item.priority}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-xs"
                        >
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Review
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Monitoring */}
            <Card>
              <CardHeader>
                <h3 className="text-lg text-green-800">System Monitoring</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Platform Activity</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pickup Completion Rate</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ragmen Utilization</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <h4 className="text-sm text-green-800 mb-2">
                      Today's Summary
                    </h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>• 234 pickup requests processed</p>
                      <p>• 89 ragmen active</p>
                      <p>• 12.5 tons of waste collected</p>
                      <p>• 3 new registrations approved</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics & Reports */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg text-green-800">
                Environmental Impact Analytics
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl text-green-600 mb-2">15,240</div>
                  <p className="text-sm text-green-700">
                    CO₂ Emissions Reduced (kg)
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl text-blue-600 mb-2">89%</div>
                  <p className="text-sm text-blue-700">Waste Diversion Rate</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl text-purple-600 mb-2">₹8.2L</div>
                  <p className="text-sm text-purple-700">
                    Economic Value Generated
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}
