import React from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Users,
  Building2,
  Briefcase,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// Mock data
const stats = [
  {
    title: 'Total Users',
    value: '2,547',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'indigo'
  },
  {
    title: 'Active Companies',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: Building2,
    color: 'blue'
  },
  {
    title: 'Active Projects',
    value: '89',
    change: '-3.1%',
    trend: 'down',
    icon: Briefcase,
    color: 'green'
  },
  {
    title: 'Total Revenue',
    value: '$45,289',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'yellow'
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'new_user',
    title: 'New User Registration',
    description: 'John Doe registered as a freelancer',
    time: '5 minutes ago',
    icon: Users
  },
  {
    id: 2,
    type: 'new_project',
    title: 'New Project Created',
    description: 'TechCorp Inc. created a new project',
    time: '15 minutes ago',
    icon: Briefcase
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment Processed',
    description: 'Payment of $2,500 processed for Project #123',
    time: '1 hour ago',
    icon: DollarSign
  },
  {
    id: 4,
    type: 'project_completed',
    title: 'Project Completed',
    description: 'Project "E-commerce Platform" marked as completed',
    time: '2 hours ago',
    icon: CheckCircle
  }
];

const systemStatus = [
  {
    name: 'API Service',
    status: 'healthy',
    uptime: '99.9%',
    lastChecked: '2 minutes ago'
  },
  {
    name: 'Database',
    status: 'healthy',
    uptime: '99.9%',
    lastChecked: '2 minutes ago'
  },
  {
    name: 'Payment Gateway',
    status: 'healthy',
    uptime: '99.9%',
    lastChecked: '2 minutes ago'
  },
  {
    name: 'Email Service',
    status: 'warning',
    uptime: '98.5%',
    lastChecked: '2 minutes ago'
  }
];

const AdminDashboardPage = () => {
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
            Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Overview of platform statistics and system status
          </p>
        </div>
        <Button className="gap-2">
          <TrendingUp className="h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-lg`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <activity.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.description}
                  </p>
                  <span className="text-xs text-gray-500">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* System Status */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            System Status
          </h2>
          <div className="space-y-4">
            {systemStatus.map((service) => (
              <div key={service.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    service.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Uptime: {service.uptime}
                  </span>
                  <span className="text-sm text-gray-500">
                    Last checked: {service.lastChecked}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            System Alerts
          </h2>
          <Button variant="outline" className="gap-2">
            <AlertCircle className="h-4 w-4" />
            View All Alerts
          </Button>
        </div>
        <div className="text-center py-8 text-gray-500">
          No active alerts at the moment
        </div>
      </Card>
    </motion.div>
  );
};

export default AdminDashboardPage;