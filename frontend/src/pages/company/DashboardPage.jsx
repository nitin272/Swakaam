import React from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Plus,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Mock data
const stats = [
  {
    title: 'Active Projects',
    value: '12',
    change: '+2',
    trend: 'up',
    icon: Briefcase
  },
  {
    title: 'Total Talent',
    value: '48',
    change: '+5',
    trend: 'up',
    icon: Users
  },
  {
    title: 'Monthly Budget',
    value: '$24,500',
    change: '+12%',
    trend: 'up',
    icon: DollarSign
  },
  {
    title: 'Project Success Rate',
    value: '92%',
    change: '+3%',
    trend: 'up',
    icon: TrendingUp
  }
];

const recentProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Development',
    status: 'active',
    progress: 75,
    budget: '$12,000',
    deadline: '2024-04-15',
    team: [
      { name: 'John Doe', role: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
      { name: 'Jane Smith', role: 'UI Designer', avatar: 'https://i.pravatar.cc/150?img=2' }
    ]
  },
  {
    id: 2,
    title: 'Mobile App Redesign',
    status: 'pending',
    progress: 30,
    budget: '$8,500',
    deadline: '2024-05-01',
    team: [
      { name: 'Mike Johnson', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?img=3' }
    ]
  }
];

const topTalent = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Full Stack Developer',
    rating: 4.9,
    skills: ['React', 'Node.js', 'MongoDB'],
    availability: 'Available',
    avatar: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'UI/UX Designer',
    rating: 4.8,
    skills: ['Figma', 'Adobe XD', 'UI Design'],
    availability: 'In Project',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

const CompanyDashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Company Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Welcome back, TechCorp Inc.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>
                <p className={`mt-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Projects */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Track the progress of your active projects
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Budget: {project.budget}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Deadline: {project.deadline}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  {project.team.map((member) => (
                    <img
                      key={member.name}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <div className="w-32">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <Button
                  variant={project.status === 'active' ? 'default' : 'outline'}
                  size="sm"
                >
                  {project.status === 'active' ? (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  ) : (
                    <Clock className="h-4 w-4 mr-2" />
                  )}
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Talent */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Top Talent
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your most valuable freelancers
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topTalent.map((talent) => (
            <div
              key={talent.id}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <img
                src={talent.avatar}
                alt={talent.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {talent.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {talent.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {talent.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {talent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className={`text-sm ${
                    talent.availability === 'Available'
                      ? 'text-green-500'
                      : 'text-yellow-500'
                  }`}>
                    {talent.availability === 'Available' ? (
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                    ) : (
                      <Clock className="h-4 w-4 inline mr-1" />
                    )}
                    {talent.availability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default CompanyDashboardPage; 