"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"
import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  Moon,
  Sun,
  Bell,
  Search,
  Menu,
  X,
  Trophy,
  BarChart3,
  FileText,
  Award,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "participant" | "mentor" | "core"
}

export default function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = getNavigationByRole(userRole)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{ x: sidebarOpen ? 0 : -320 }}
          className="fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 shadow-xl lg:translate-x-0 lg:static lg:inset-0"
        >
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  HackFlow
                </span>
              </Link>
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-3 p-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="text-sm font-medium">John Doe</div>
                      <div className="text-xs text-gray-500 capitalize">{userRole}</div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                    Toggle Theme
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="lg:pl-80">
          {/* Top bar */}
          <div className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white dark:bg-gray-800 px-6 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                  3
                </span>
              </Button>
            </div>
          </div>

          {/* Page content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}

function getNavigationByRole(role: string) {
  const baseNavigation = [{ name: "Dashboard", href: `/dashboard/${role === "core" ? "admin" : role}`, icon: Home }]

  switch (role) {
    case "participant":
      return [
        ...baseNavigation,
        { name: "My Team", href: "/dashboard/participant/team", icon: Users },
        { name: "Project", href: "/dashboard/participant/project", icon: FileText },
        { name: "Mentor", href: "/dashboard/participant/mentor", icon: UserCheck },
        { name: "Messages", href: "/dashboard/participant/messages", icon: MessageSquare },
        { name: "Schedule", href: "/dashboard/participant/schedule", icon: Calendar },
        { name: "Submissions", href: "/dashboard/participant/submissions", icon: Trophy },
      ]

    case "mentor":
      return [
        ...baseNavigation,
        { name: "My Teams", href: "/dashboard/mentor/teams", icon: Users },
        { name: "Sessions", href: "/dashboard/mentor/sessions", icon: Calendar },
        { name: "Messages", href: "/dashboard/mentor/messages", icon: MessageSquare },
        { name: "Feedback", href: "/dashboard/mentor/feedback", icon: Award },
        { name: "Resources", href: "/dashboard/mentor/resources", icon: FileText },
      ]

    case "core":
      return [
        ...baseNavigation,
        { name: "Teams", href: "/dashboard/admin/teams", icon: Users },
        { name: "Mentors", href: "/dashboard/admin/mentors", icon: UserCheck },
        { name: "Judging", href: "/dashboard/admin/judging", icon: Trophy },
        { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
        { name: "Messages", href: "/dashboard/admin/messages", icon: MessageSquare },
        { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
      ]

    default:
      return baseNavigation
  }
}
