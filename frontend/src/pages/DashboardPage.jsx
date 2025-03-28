import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Clock, DollarSign, CheckCircle, AlertCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  // Mock data - replace with real data from API
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      client: 'TechCorp Inc.',
      deadline: '2024-04-15',
      budget: 2500,
      status: 'in-progress',
      skills: ['React', 'Node.js', 'MongoDB'],
      progress: 75,
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      client: 'StartupX',
      deadline: '2024-04-20',
      budget: 1800,
      status: 'pending',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      progress: 30,
    },
  ];

  const earnings = {
    total: 12500,
    thisMonth: 3500,
    pending: 2800,
  };

  const notifications = [
    {
      id: 1,
      type: 'new-project',
      title: 'New Project Match',
      message: 'A new project matching your skills is available',
      time: '5 minutes ago',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Client sent a new message about project requirements',
      time: '1 hour ago',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, John!</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Here's what's happening with your projects</p>
        </div>
        <Button className="flex items-center gap-2">
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                <DollarSign className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${earnings.total}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">This Month</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${earnings.thisMonth}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${earnings.pending}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Projects and Notifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Projects */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Projects</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.client}</p>
                    </div>
                    <Badge
                      variant={project.status === 'in-progress' ? 'default' : 'secondary'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        Due {new Date(project.deadline).toLocaleDateString()}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        ${project.budget}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                      {notification.type === 'new-project' ? (
                        <AlertCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPage; 