import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
  FileText,
  UserPlus,
  MessageSquare,
  DollarSign,
  Calendar,
  Filter,
  Check,
  X
} from 'lucide-react';

// Mock data
const notifications = [
  {
    id: 1,
    type: 'project_update',
    title: 'Project Milestone Completed',
    message: 'Sarah Wilson has completed the payment system integration for the E-commerce Platform project.',
    time: '2 hours ago',
    read: false,
    project: 'E-commerce Platform',
    icon: FileText
  },
  {
    id: 2,
    type: 'new_talent',
    title: 'New Talent Available',
    message: 'David Chen, a UI/UX Designer, is now available for new projects.',
    time: '4 hours ago',
    read: false,
    project: null,
    icon: UserPlus
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message',
    message: 'Mike Johnson sent you a message about the API Development project.',
    time: '5 hours ago',
    read: true,
    project: 'API Development',
    icon: MessageSquare
  },
  {
    id: 4,
    type: 'payment',
    title: 'Payment Received',
    message: 'Payment of $2,500 has been received for the Mobile App Redesign project.',
    time: '1 day ago',
    read: true,
    project: 'Mobile App Redesign',
    icon: DollarSign
  },
  {
    id: 5,
    type: 'deadline',
    title: 'Project Deadline Approaching',
    message: 'The E-commerce Platform project deadline is approaching in 3 days.',
    time: '2 days ago',
    read: false,
    project: 'E-commerce Platform',
    icon: Calendar
  }
];

const filters = [
  { id: 'all', name: 'All Notifications' },
  { id: 'unread', name: 'Unread' },
  { id: 'project', name: 'Project Updates' },
  { id: 'message', name: 'Messages' },
  { id: 'payment', name: 'Payments' }
];

const NotificationsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notificationsList, setNotificationsList] = useState(notifications);

  const filteredNotifications = notificationsList.filter(notification => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !notification.read;
    return notification.type === selectedFilter;
  });

  const markAsRead = (id) => {
    setNotificationsList(notificationsList.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotificationsList(notificationsList.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const clearAll = () => {
    setNotificationsList([]);
  };

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
            Notifications
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Stay updated with your project activities
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={markAllAsRead} className="gap-2">
            <Check className="h-4 w-4" />
            Mark all as read
          </Button>
          <Button variant="outline" onClick={clearAll} className="gap-2">
            <X className="h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'default' : 'outline'}
              className="whitespace-nowrap"
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.name}
            </Button>
          ))}
        </div>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card className={`p-4 ${!notification.read ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <notification.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                      {notification.project && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
                          {notification.project}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {notification.time}
                      </span>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <Card className="p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <Bell className="h-12 w-12 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              No notifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              You're all caught up! Check back later for new updates.
            </p>
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default NotificationsPage; 