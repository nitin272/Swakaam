import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  BarChart2,
  PieChart,
  LineChart,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

// Mock data
const metrics = [
  {
    title: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    icon: Users
  },
  {
    title: 'Active Projects',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: Briefcase
  },
  {
    title: 'Total Revenue',
    value: '$45,678',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign
  },
  {
    title: 'Conversion Rate',
    value: '24.5%',
    change: '+2.1%',
    trend: 'up',
    icon: TrendingUp
  }
];

const timeRanges = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last Year'];

const AdminAnalyticsPage = () => {
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');

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
            Platform Analytics
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor platform performance and user engagement
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            {selectedRange}
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <metric.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {metric.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {metric.title}
            </p>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Growth
            </h3>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
            <LineChart className="h-12 w-12 text-gray-400" />
          </div>
        </Card>

        {/* Revenue Distribution */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Revenue Distribution
            </h3>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
            <PieChart className="h-12 w-12 text-gray-400" />
          </div>
        </Card>

        {/* Project Categories */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Project Categories
            </h3>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
            <BarChart2 className="h-12 w-12 text-gray-400" />
          </div>
        </Card>

        {/* User Engagement */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Engagement
            </h3>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
            <LineChart className="h-12 w-12 text-gray-400" />
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default AdminAnalyticsPage; 