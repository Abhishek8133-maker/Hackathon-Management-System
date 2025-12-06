# HackFlow - Hackathon Management System

A modern, feature-rich hackathon management platform built with Next.js 15, React 19, and TypeScript. HackFlow provides comprehensive tools for organizing, managing, and participating in hackathons with AI-driven insights, seamless team collaboration, and intelligent mentor matching.

## 🌟 Features

### For Participants
- **Team Registration**: Create and manage teams with ease
- **Project Submission**: Submit projects with detailed descriptions and documentation
- **Mentor Matching**: Get AI-powered mentor recommendations based on your project domain
- **Real-time Communication**: Built-in chat system for team collaboration
- **Progress Tracking**: Monitor your hackathon journey and milestones
- **Resource Access**: Access workshops, materials, and event schedules

### For Mentors
- **Dashboard**: Comprehensive view of assigned teams and mentoring activities
- **Team Assignment**: Review and manage teams seeking mentorship
- **Availability Management**: Set and update your availability status
- **Expertise Showcase**: Highlight your skills and areas of expertise
- **Communication Tools**: Direct messaging with teams and organizers

### For Organizers/Core Team
- **Event Management**: Complete control over hackathon creation and configuration
- **Team Oversight**: Monitor all registered teams and their progress
- **Mentor Assignment**: AI-assisted mentor-team matching
- **Judging System**: Manage evaluation criteria and scoring
- **Announcements**: Broadcast updates to all participants
- **Analytics & Reports**: Detailed insights on participation, engagement, and outcomes
- **Submission Review**: Review and evaluate team submissions

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **React**: React 19 with Server Components
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Code Quality**: TypeScript strict mode

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher
- **pnpm**: Version 8.x or higher (recommended) or npm/yarn
- **Git**: For version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek8133-maker/Hackathon-Management-System.git
   cd Hackathon-Management-System
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Currently, the application runs without environment variables for local development. If you need to configure environment-specific settings in the future, create a `.env.local` file in the root directory.

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   
   Or using npm:
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the development server on port 3000 |
| `pnpm build` | Builds the production application |
| `pnpm start` | Starts the production server |
| `pnpm lint` | Runs ESLint to check code quality |

## 📁 Project Structure

```
Hackathon-Management-System/
├── app/                          # Next.js 15 App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   └── register/            # Registration page
│   ├── dashboard/               # Dashboard pages
│   │   ├── admin/              # Admin/Core team dashboard
│   │   ├── mentor/             # Mentor dashboard
│   │   └── participant/        # Participant dashboard
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # React components
│   ├── ui/                     # Reusable UI components
│   ├── dashboard-layout.tsx    # Dashboard layout wrapper
│   └── theme-provider.tsx      # Theme management
├── hooks/                       # Custom React hooks
├── lib/                        # Utility functions and helpers
├── public/                     # Static assets
├── styles/                     # Additional stylesheets
├── components.json             # shadcn/ui configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 👥 User Roles

HackFlow supports three distinct user roles, each with a customized dashboard:

### 1. Participant
- Register and create teams
- Submit projects
- Request mentorship
- Track progress
- Access resources

### 2. Mentor
- View assigned teams
- Provide guidance and support
- Manage availability
- Access team submissions

### 3. Core Team/Admin
- Full event management
- Team and mentor oversight
- Judging and evaluation
- Analytics and reporting
- System configuration

## 🎨 UI Components

The project uses a comprehensive set of UI components from [shadcn/ui](https://ui.shadcn.com/) and Radix UI:

- Buttons, Cards, Forms
- Dialogs, Modals, Alerts
- Tabs, Accordions, Collapsibles
- Select, Dropdown, Combobox
- Progress bars, Sliders
- Toast notifications
- And many more...

## 🔐 Authentication Flow

1. **Registration**: Users select their role (Participant/Mentor/Core Team) and complete role-specific forms
2. **Login**: Users sign in with email, password, and role selection
3. **Dashboard Routing**: Users are redirected to their role-specific dashboard after authentication

## 🎯 Key Features Explained

### AI-Powered Mentor Matching
The platform uses intelligent algorithms to match teams with mentors based on:
- Project domain and technology stack
- Mentor expertise and experience
- Availability and capacity
- Past mentoring success rates

### Real-time Communication
- Built-in messaging system
- File sharing capabilities
- Video call integration
- Team channels and direct messages

### Competition Tracking
- Submission management
- Automated judging workflows
- Prize distribution system
- Transparent evaluation process

### Event Scheduling
- Workshop management
- Presentation scheduling
- Milestone tracking
- Automated reminders

## 🚧 Development

### Adding New Features
1. Create feature branches from `main`
2. Follow the existing code structure
3. Use TypeScript for type safety
4. Add appropriate UI components from the library
5. Test thoroughly before submitting PR

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules configured in the project
- Use Tailwind CSS for styling
- Follow the component structure in `components/ui/`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Write clear, descriptive commit messages
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass
- Follow the existing code style

## 📝 License

This project is open source and available for educational and non-commercial use.

## 👨‍💻 Author

**Abhishek**
- GitHub: [@Abhishek8133-maker](https://github.com/Abhishek8133-maker)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Contact the maintainers

## 🗺️ Roadmap

- [ ] Backend integration with authentication
- [ ] Database implementation
- [ ] Real-time features with WebSockets
- [ ] Email notification system
- [ ] Advanced analytics dashboard
- [ ] Mobile application
- [ ] API documentation
- [ ] Deployment guides

## 📸 Screenshots

### Landing Page
The landing page showcases the platform's key features and provides easy access to registration and login.

### Dashboard Views
- **Admin Dashboard**: Complete oversight of the hackathon with team management, mentor assignment, and analytics
- **Mentor Dashboard**: Track assigned teams and manage mentoring activities
- **Participant Dashboard**: View team progress, submit projects, and access resources

---

**Note**: This is a frontend implementation. Backend services and database integration are planned for future releases.

For more information, visit the [GitHub repository](https://github.com/Abhishek8133-maker/Hackathon-Management-System).
