import React from 'react';
import Modal3D from './Modal3D';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';

const NotificationModal = ({ isOpen, onClose, notifications }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'error':
        return 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'info':
        return 'bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <Modal3D isOpen={isOpen} onClose={onClose} title="Notifications">
      <div className="space-y-4">
        <AnimatePresence>
          {notifications?.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg p-4 ${getNotificationColor(notification.type)}`}
            >
              <div className="flex items-start space-x-3">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="mt-1 text-sm">{notification.message}</p>
                  <p className="mt-1 text-xs opacity-75">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {(!notifications || notifications.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <Bell className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              No notifications yet
            </p>
          </motion.div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </Modal3D>
  );
};

export default NotificationModal; 