"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  Users,
  Trophy,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Settings,
  Bell,
  Award,
  UserCheck,
  FileText,
  BarChart3,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout userRole="core">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your hackathon with comprehensive controls</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="judging">Judging</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className={`p-2 rounded-full ${activity.bgColor}`}>
                        <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <action.icon className="w-6 h-6 text-purple-600" />
                      <span className="text-sm font-medium">{action.title}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Manage all registered teams and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teams.map((team, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {team.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{team.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{team.project}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">{team.domain}</Badge>
                            <span className="text-xs text-gray-500">{team.members} members</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={team.status === "Active" ? "default" : "secondary"}>{team.status}</Badge>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mentor Management</CardTitle>
                <CardDescription>Assign and manage mentors for teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mentors.map((mentor, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                          {mentor.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{mentor.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{mentor.expertise}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Teams Assigned:</span>
                          <span className="font-medium">{mentor.teamsAssigned}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Availability:</span>
                          <Badge variant={mentor.available ? "default" : "secondary"}>
                            {mentor.available ? "Available" : "Busy"}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="judging" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Judging & Evaluation</CardTitle>
                <CardDescription>Manage judging criteria and team evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                        <h3 className="font-semibold">Submissions</h3>
                        <p className="text-2xl font-bold text-yellow-600">24</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <UserCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h3 className="font-semibold">Evaluated</h3>
                        <p className="text-2xl font-bold text-green-600">18</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <h3 className="font-semibold">Winners</h3>
                        <p className="text-2xl font-bold text-purple-600">3</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">Start Judging Round</Button>
                    <Button variant="outline">Export Results</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Send updates and notifications to participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                    <Bell className="w-4 h-4 mr-2" />
                    Create Announcement
                  </Button>

                  <div className="space-y-3">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{announcement.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{announcement.content}</p>
                            <p className="text-xs text-gray-500 mt-2">{announcement.time}</p>
                          </div>
                          <Badge variant={announcement.priority === "High" ? "destructive" : "secondary"}>
                            {announcement.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>View detailed analytics and generate reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Available Reports</h3>
                    {reports.map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="font-medium">{report.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{report.description}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Generate
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Participation Rate</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completion Rate</span>
                        <span className="font-bold text-blue-600">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Satisfaction Score</span>
                        <span className="font-bold text-purple-600">4.8/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

const adminStats = [
  {
    title: "Total Teams",
    value: "42",
    change: "+12%",
    icon: Users,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Mentors",
    value: "18",
    change: "+5%",
    icon: UserCheck,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "Submissions",
    value: "38",
    change: "+23%",
    icon: Trophy,
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600",
  },
  {
    title: "Messages",
    value: "1,247",
    change: "+18%",
    icon: MessageSquare,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

const recentActivity = [
  {
    title: "New team registered",
    description: 'Team "AI Innovators" joined the hackathon',
    time: "2 minutes ago",
    icon: Users,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Submission received",
    description: 'Team "Code Warriors" submitted their project',
    time: "15 minutes ago",
    icon: Trophy,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "Mentor assigned",
    description: 'Sarah Johnson assigned to Team "Tech Titans"',
    time: "1 hour ago",
    icon: UserCheck,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

const quickActions = [
  { title: "Add Team", icon: Users },
  { title: "Assign Mentor", icon: UserCheck },
  { title: "Send Alert", icon: AlertTriangle },
  { title: "View Reports", icon: BarChart3 },
]

const teams = [
  {
    name: "AI Innovators",
    project: "Smart Healthcare Assistant",
    domain: "AI/ML",
    members: 4,
    status: "Active",
  },
  {
    name: "Code Warriors",
    project: "Blockchain Voting System",
    domain: "Blockchain",
    members: 3,
    status: "Active",
  },
  {
    name: "Tech Titans",
    project: "IoT Home Automation",
    domain: "IoT",
    members: 5,
    status: "Submitted",
  },
]

const mentors = [
  {
    name: "Sarah Johnson",
    expertise: "AI/ML, Python",
    teamsAssigned: 3,
    available: true,
  },
  {
    name: "Mike Chen",
    expertise: "Web Dev, React",
    teamsAssigned: 2,
    available: true,
  },
  {
    name: "Emily Davis",
    expertise: "Mobile, Flutter",
    teamsAssigned: 4,
    available: false,
  },
]

const announcements = [
  {
    title: "Submission Deadline Extended",
    content: "The final submission deadline has been extended by 2 hours due to technical issues.",
    time: "30 minutes ago",
    priority: "High",
  },
  {
    title: "Judging Criteria Updated",
    content: "Please review the updated judging criteria in the resources section.",
    time: "2 hours ago",
    priority: "Medium",
  },
]

const reports = [
  {
    name: "Team Performance Report",
    description: "Detailed analysis of team progress and submissions",
  },
  {
    name: "Mentor Engagement Report",
    description: "Mentor activity and team interaction statistics",
  },
  {
    name: "Event Analytics",
    description: "Overall hackathon metrics and participant feedback",
  },
]
