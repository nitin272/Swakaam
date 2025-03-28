import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Settings,
  Save,
  Bell,
  Lock,
  CreditCard,
  Globe,
  Mail,
  Shield,
  Users,
  FileText,
  Database
} from 'lucide-react';

const settingsSections = [
  {
    id: 'general',
    title: 'General Settings',
    icon: Settings,
    description: 'Basic platform configuration and preferences'
  },
  {
    id: 'notifications',
    title: 'Notification Settings',
    icon: Bell,
    description: 'Configure notification preferences and templates'
  },
  {
    id: 'security',
    title: 'Security Settings',
    icon: Lock,
    description: 'Manage security policies and authentication'
  },
  {
    id: 'billing',
    title: 'Billing Settings',
    icon: CreditCard,
    description: 'Configure payment methods and pricing'
  },
  {
    id: 'localization',
    title: 'Localization',
    icon: Globe,
    description: 'Language and regional settings'
  },
  {
    id: 'email',
    title: 'Email Settings',
    icon: Mail,
    description: 'Email templates and delivery settings'
  },
  {
    id: 'compliance',
    title: 'Compliance',
    icon: Shield,
    description: 'Legal and regulatory compliance settings'
  },
  {
    id: 'user-management',
    title: 'User Management',
    icon: Users,
    description: 'User roles and permissions'
  },
  {
    id: 'content',
    title: 'Content Management',
    icon: FileText,
    description: 'Manage platform content and resources'
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    description: 'Database configuration and maintenance'
  }
];

const AdminSettingsPage = () => {
  const [selectedSection, setSelectedSection] = useState('general');
  const [isEditing, setIsEditing] = useState(false);

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
            Platform Settings
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage platform configuration and preferences
          </p>
        </div>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          className="gap-2"
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Settings className="h-4 w-4" />
              Edit Settings
            </>
          )}
        </Button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => (
          <Card
            key={section.id}
            className={`p-6 cursor-pointer transition-colors ${
              selectedSection === section.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'hover:border-indigo-200'
            }`}
            onClick={() => setSelectedSection(section.id)}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <section.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Selected Section Content */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {settingsSections.find(s => s.id === selectedSection)?.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {settingsSections.find(s => s.id === selectedSection)?.description}
            </p>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-6">
            {/* Example form fields - customize based on selected section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Setting Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
                placeholder="Enter setting value"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
                rows="3"
                placeholder="Enter description"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 dark:text-gray-400">
            Select a section and click "Edit Settings" to modify configuration.
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default AdminSettingsPage; 