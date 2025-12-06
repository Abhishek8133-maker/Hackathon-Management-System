"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import {
  Users,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Video,
  FileText,
  TrendingUp,
  Award,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout userRole="mentor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mentor Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Guide and support your assigned teams</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
              <MessageSquare className="w-4 h-4 mr-2" />
              Team Chat
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {mentorStats.map((stat, index) => (
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teams">My Teams</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todaySchedule.map((session, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="text-center">
                        <div className="text-sm font-medium">{session.time}</div>
                        <div className="text-xs text-gray-500">{session.duration}</div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{session.team}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Team Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Team Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamProgress.map((team, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{team.name}</span>
                        <span className="text-sm text-gray-600">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${team.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{team.status}</span>
                        <span>Next: {team.nextMilestone}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assignedTeams.map((team, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                        <CardDescription>{team.project}</CardDescription>
                      </div>
                      <Badge variant={team.status === "On Track" ? "default" : "secondary"}>{team.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{team.domain}</Badge>
                      <span className="text-sm text-gray-600">{team.members} members</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${team.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {team.memberAvatars.map((avatar, i) => (
                          <Avatar key={i} className="w-6 h-6 border-2 border-white">
                            <AvatarImage src={avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">M</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">Team Members</span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Video className="w-4 h-4 mr-2" />
                        Meet
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500">Last session: {team.lastSession}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Sessions */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{session.date}</div>
                          <div className="text-xs text-gray-500">{session.time}</div>
                        </div>
                        <div>
                          <p className="font-medium">{session.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{session.team}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {session.type}
                            </Badge>
                            <span className="text-xs text-gray-500">{session.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Session Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Session Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">24</div>
                    <div className="text-sm text-gray-600">Total Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">18h</div>
                    <div className="text-sm text-gray-600">Hours Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">4.9</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Feedback & Evaluations</CardTitle>
                <CardDescription>Provide feedback and track team performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {feedbackItems.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{item.team}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.project}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{item.rating}/5</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm font-medium">Technical Skills</div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.technical}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Collaboration</div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${item.collaboration}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Innovation</div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${item.innovation}%` }} />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">Feedback</div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.feedback}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Update Feedback
                        </Button>
                        <Button variant="outline" size="sm">
                          Schedule Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mentoring Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Mentoring Resources</CardTitle>
                  <CardDescription>Helpful resources for effective mentoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mentoringResources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <div className={`p-2 rounded ${resource.bgColor}`}>
                        <resource.icon className={`w-4 h-4 ${resource.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common mentoring tasks</CardDescription>
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
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

const mentorStats = [
  {
    title: "Assigned Teams",
    value: "3",
    change: "+1 this week",
    icon: Users,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Sessions Completed",
    value: "24",
    change: "+6 this week",
    icon: CheckCircle,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "Avg Rating",
    value: "4.9",
    change: "+0.2 this month",
    icon: Star,
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600",
  },
  {
    title: "Hours Mentored",
    value: "18h",
    change: "+4h this week",
    icon: Clock,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

const todaySchedule = [
  {
    time: "10:00 AM",
    duration: "45 min",
    title: "Project Review",
    team: "AI Innovators",
  },
  {
    time: "2:00 PM",
    duration: "30 min",
    title: "Technical Discussion",
    team: "Code Warriors",
  },
  {
    time: "4:30 PM",
    duration: "60 min",
    title: "Demo Preparation",
    team: "Tech Titans",
  },
]

const teamProgress = [
  {
    name: "AI Innovators",
    progress: 85,
    status: "On Track",
    nextMilestone: "Final Testing",
  },
  {
    name: "Code Warriors",
    progress: 70,
    status: "Needs Attention",
    nextMilestone: "Integration",
  },
  {
    name: "Tech Titans",
    progress: 92,
    status: "Ahead of Schedule",
    nextMilestone: "Documentation",
  },
]

const recentActivity = [
  {
    title: "Feedback submitted",
    description: "Provided technical feedback to AI Innovators team",
    time: "1 hour ago",
    icon: MessageSquare,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Session completed",
    description: "Finished mentoring session with Code Warriors",
    time: "3 hours ago",
    icon: CheckCircle,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "New team assigned",
    description: "Tech Titans team has been assigned to you",
    time: "1 day ago",
    icon: Users,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

const assignedTeams = [
  {
    name: "AI Innovators",
    project: "Smart Healthcare Assistant",
    domain: "AI/ML",
    members: 4,
    progress: 85,
    status: "On Track",
    memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    lastSession: "2 days ago",
  },
  {
    name: "Code Warriors",
    project: "Blockchain Voting System",
    domain: "Blockchain",
    members: 3,
    progress: 70,
    status: "Needs Support",
    memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    lastSession: "1 day ago",
  },
  {
    name: "Tech Titans",
    project: "IoT Home Automation",
    domain: "IoT",
    members: 5,
    progress: 92,
    status: "On Track",
    memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    lastSession: "3 hours ago",
  },
]

const upcomingSessions = [
  {
    date: "Today",
    time: "2:00 PM",
    title: "Technical Architecture Review",
    team: "AI Innovators",
    type: "Review",
    duration: "45 min",
  },
  {
    date: "Tomorrow",
    time: "10:00 AM",
    title: "Progress Check-in",
    team: "Code Warriors",
    type: "Check-in",
    duration: "30 min",
  },
  {
    date: "Dec 25",
    time: "3:00 PM",
    title: "Final Demo Preparation",
    team: "Tech Titans",
    type: "Preparation",
    duration: "60 min",
  },
]

const feedbackItems = [
  {
    team: "AI Innovators",
    project: "Smart Healthcare Assistant",
    rating: 5,
    technical: 90,
    collaboration: 85,
    innovation: 95,
    feedback:
      "Excellent technical implementation and innovative approach to healthcare AI. The team shows great collaboration and problem-solving skills.",
  },
  {
    team: "Code Warriors",
    project: "Blockchain Voting System",
    rating: 4,
    technical: 80,
    collaboration: 75,
    innovation: 85,
    feedback:
      "Good progress on the blockchain implementation. Recommend focusing more on user experience and security testing.",
  },
]

const mentoringResources = [
  {
    title: "Effective Mentoring Guide",
    description: "Best practices for hackathon mentoring",
    icon: FileText,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Technical Resources",
    description: "Curated list of development resources",
    icon: Award,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "Communication Templates",
    description: "Templates for feedback and evaluations",
    icon: MessageSquare,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

const quickActions = [
  { title: "Schedule Session", icon: Calendar },
  { title: "Send Feedback", icon: MessageSquare },
  { title: "Rate Team", icon: Star },
  { title: "View Resources", icon: FileText },
]
