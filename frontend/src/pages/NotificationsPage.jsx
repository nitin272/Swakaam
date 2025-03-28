import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Bell, CheckCircle, XCircle, Clock, MessageSquare, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');

  // Mock data - replace with real data from API
  const notifications = [
    {
      id: 1,
      type: 'new-project',
      title: 'New Project Match',
      message: 'A new project matching your skills is available: "E-commerce Website Development"',
      time: '5 minutes ago',
      read: false,
      project: {
        title: 'E-commerce Website Development',
        budget: 2500,
        skills: ['React', 'Node.js', 'MongoDB'],
      },
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Client sent a new message about project requirements',
      time: '1 hour ago',
      read: true,
      project: {
        title: 'Mobile App UI/UX Design',
        client: 'StartupX',
      },
    },
    {
      id: 3,
      type: 'project-completed',
      title: 'Project Completed',
      message: 'Congratulations! You\'ve successfully completed the "Website Redesign" project',
      time: '2 hours ago',
      read: true,
      project: {
        title: 'Website Redesign',
        rating: 5,
      },
    },
    {
      id: 4,
      type: 'deadline-approaching',
      title: 'Deadline Approaching',
      message: 'The deadline for "Mobile App UI/UX Design" is approaching in 2 days',
      time: '3 hours ago',
      read: false,
      project: {
        title: 'Mobile App UI/UX Design',
        deadline: '2024-04-20',
      },
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'new-project':
        return <Bell className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'project-completed':
        return <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case 'deadline-approaching':
        return <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'all') return true;
    return notification.type === filter;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400">Stay updated with your project activities</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'new-project' ? 'default' : 'outline'}
            onClick={() => setFilter('new-project')}
          >
            New Projects
          </Button>
          <Button
            variant={filter === 'message' ? 'default' : 'outline'}
            onClick={() => setFilter('message')}
          >
            Messages
          </Button>
        </div>
      </div>

      <Card>
        <ScrollArea className="h-[calc(100vh-16rem)]">
          <div className="p-4 space-y-4">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`p-4 rounded-lg border dark:border-gray-800 ${
                    notification.read
                      ? 'bg-white dark:bg-gray-900'
                      : 'bg-indigo-50 dark:bg-indigo-900/20'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-full">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {notification.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {notification.message}
                      </p>
                      {notification.project && (
                        <div className="mt-3 flex items-center space-x-2">
                          <Badge variant="outline">
                            {notification.project.title}
                          </Badge>
                          {notification.project.budget && (
                            <Badge variant="secondary">
                              ${notification.project.budget}
                            </Badge>
                          )}
                          {notification.project.rating && (
                            <Badge variant="outline" className="flex items-center">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              {notification.project.rating}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    {!notification.read && (
                      <Button variant="ghost" size="icon">
                        <XCircle className="h-5 w-5 text-gray-400" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </motion.div>
  );
};

export default NotificationsPage; 