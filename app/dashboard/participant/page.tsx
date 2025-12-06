"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  MessageSquare,
  Calendar,
  Upload,
  Trophy,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Video,
  ImageIcon,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function ParticipantDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout userRole="participant">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome back, AI Innovators!</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Team Chat
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Upload className="w-4 h-4 mr-2" />
              Submit Project
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Project Progress</h3>
                <Trophy className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completion</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100">Time Remaining</h3>
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">18h 42m</div>
              <p className="text-sm text-green-600 dark:text-green-400">Until submission deadline</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100">Team Score</h3>
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">8.5/10</div>
              <p className="text-sm text-purple-600 dark:text-purple-400">Current evaluation</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="project">Project</TabsTrigger>
            <TabsTrigger value="mentor">Mentor</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Recent Updates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className={`p-2 rounded-full ${update.bgColor}`}>
                        <update.icon className={`w-4 h-4 ${update.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{update.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{update.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{update.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Deadlines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{deadline.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{deadline.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={deadline.urgent ? "destructive" : "secondary"}>{deadline.timeLeft}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Project Status */}
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Smart Healthcare Assistant - AI/ML Domain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {projectMilestones.map((milestone, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                          milestone.completed ? "bg-green-100 dark:bg-green-900/30" : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        {milestone.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <p className="text-sm font-medium">{milestone.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{milestone.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>AI Innovators - 4 members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {member.expertise}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${member.online ? "bg-green-500" : "bg-gray-400"}`} />
                          <span className="text-xs text-gray-500">{member.online ? "Online" : "Offline"}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Chat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Team Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {teamMessages.map((message, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">{message.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="project" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Smart Healthcare Assistant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Project Domain</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Artificial Intelligence / Machine Learning
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Technology Stack</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {["Python", "TensorFlow", "React", "Node.js"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Project Description</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    An AI-powered healthcare assistant that helps patients manage their health records, schedule
                    appointments, and receive personalized health recommendations based on their medical history and
                    current symptoms.
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-medium">Key Features</Label>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                    <li>• Symptom analysis and health recommendations</li>
                    <li>• Appointment scheduling integration</li>
                    <li>• Medical record management</li>
                    <li>• Medication reminders</li>
                    <li>• Emergency contact system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Project Files */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Project Files
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {projectFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded ${file.bgColor}`}>
                          <file.icon className={`w-4 h-4 ${file.iconColor}`} />
                        </div>
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {file.size} • {file.modified}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New File
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Mentor</CardTitle>
                <CardDescription>Get guidance and support from your assigned mentor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                    <p className="text-gray-600 dark:text-gray-300">Senior AI Engineer at TechCorp</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">AI/ML Expert</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">TensorFlow</Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm text-green-600">Available</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="w-4 h-4 mr-2" />
                      Video Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentor Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Mentoring Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mentorSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {session.date} • {session.duration}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{session.notes}</p>
                      </div>
                      <Badge variant={session.status === "Completed" ? "default" : "secondary"}>{session.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Schedule New Session
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Submissions</CardTitle>
                <CardDescription>Submit your project deliverables and track submission status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.map((submission, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{submission.title}</h3>
                        <Badge variant={submission.status === "Submitted" ? "default" : "secondary"}>
                          {submission.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{submission.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Due: {submission.deadline}</div>
                        <div className="flex gap-2">
                          {submission.status === "Submitted" ? (
                            <Button variant="outline" size="sm">
                              View Submission
                            </Button>
                          ) : (
                            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                              <Upload className="w-4 h-4 mr-2" />
                              Submit
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submission Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Include a comprehensive README file with setup instructions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Provide a demo video (max 5 minutes) showcasing your solution</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Submit source code with proper documentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <span>Maximum file size: 100MB per submission</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <span>Late submissions will incur penalty points</span>
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

const recentUpdates = [
  {
    title: "Mentor feedback received",
    description: "Sarah provided feedback on your ML model architecture",
    time: "30 minutes ago",
    icon: MessageSquare,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Team member joined",
    description: "Alex completed the user interface mockups",
    time: "2 hours ago",
    icon: Users,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
  {
    title: "Deadline reminder",
    description: "Final submission due in 18 hours",
    time: "4 hours ago",
    icon: Clock,
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600",
  },
]

const upcomingDeadlines = [
  {
    title: "Final Submission",
    description: "Submit your complete project",
    timeLeft: "18h 42m",
    urgent: true,
  },
  {
    title: "Demo Video",
    description: "Upload project demonstration",
    timeLeft: "20h 15m",
    urgent: false,
  },
  {
    title: "Presentation",
    description: "Live project presentation",
    timeLeft: "2 days",
    urgent: false,
  },
]

const projectMilestones = [
  { title: "Planning", completed: true, date: "Day 1" },
  { title: "Development", completed: true, date: "Day 2-3" },
  { title: "Testing", completed: false, date: "Day 4" },
  { title: "Submission", completed: false, date: "Day 5" },
]

const teamMembers = [
  {
    name: "John Smith",
    role: "Team Lead",
    expertise: "Full Stack",
    online: true,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Emily Chen",
    role: "AI Engineer",
    expertise: "Machine Learning",
    online: true,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Alex Rodriguez",
    role: "UI/UX Designer",
    expertise: "Design",
    online: false,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Sarah Kim",
    role: "Backend Developer",
    expertise: "Python/Django",
    online: true,
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const teamMessages = [
  {
    sender: "Emily",
    content: "Just finished training the ML model. Accuracy is looking good at 94%!",
    time: "2 min ago",
  },
  {
    sender: "Alex",
    content: "UI mockups are ready for review. Check the shared folder.",
    time: "15 min ago",
  },
  {
    sender: "John",
    content: "Great work everyone! Let's focus on integration now.",
    time: "1 hour ago",
  },
]

const projectFiles = [
  {
    name: "main.py",
    size: "2.4 KB",
    modified: "2 hours ago",
    icon: FileText,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    name: "demo-video.mp4",
    size: "45.2 MB",
    modified: "1 hour ago",
    icon: Video,
    bgColor: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600",
  },
  {
    name: "ui-mockup.png",
    size: "1.8 MB",
    modified: "3 hours ago",
    icon: ImageIcon,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
]

const mentorSessions = [
  {
    title: "Project Architecture Review",
    date: "Today, 2:00 PM",
    duration: "45 min",
    status: "Scheduled",
    notes: "Discuss ML model optimization",
  },
  {
    title: "Initial Project Discussion",
    date: "Yesterday, 10:00 AM",
    duration: "30 min",
    status: "Completed",
    notes: "Covered project scope and requirements",
  },
]

const submissions = [
  {
    title: "Project Proposal",
    description: "Initial project proposal and team formation",
    deadline: "Dec 20, 2024",
    status: "Submitted",
  },
  {
    title: "Mid-term Progress Report",
    description: "Progress update and current implementation status",
    deadline: "Dec 22, 2024",
    status: "Submitted",
  },
  {
    title: "Final Project Submission",
    description: "Complete project with source code, documentation, and demo",
    deadline: "Dec 24, 2024",
    status: "Pending",
  },
]
