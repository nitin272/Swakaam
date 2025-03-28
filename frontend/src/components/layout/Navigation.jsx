import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Settings,
  User,
  FileText,
  PenTool,
  Building2,
  GraduationCap,
  BarChart,
  Laptop,
  Search,
  BookOpen
} from 'lucide-react';

const menuItems = {
  freelancer: [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Project Matches', path: '/matches' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: User, label: 'My Profile', path: '/profile' },
    { icon: FileText, label: 'Resources', path: '/resources' },
    { icon: PenTool, label: 'Screening Test', path: '/screening' },
    { icon: BookOpen, label: 'Learning Path', path: '/learning' },
  ],
  company: [
    { icon: Home, label: 'Dashboard', path: '/company/dashboard' },
    { icon: Users, label: 'Talent Pool', path: '/company/talent' },
    { icon: Briefcase, label: 'My Projects', path: '/company/projects' },
    { icon: MessageSquare, label: 'Messages', path: '/company/messages' },
    { icon: Bell, label: 'Notifications', path: '/company/notifications' },
    { icon: Building2, label: 'Company Profile', path: '/company/profile' },
  ],
  admin: [
    { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Users Management', path: '/admin/users' },
    { icon: Briefcase, label: 'Projects Overview', path: '/admin/projects' },
    { icon: Building2, label: 'Companies', path: '/admin/companies' },
    { icon: GraduationCap, label: 'Skills & Tests', path: '/admin/skills' },
    { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ]
};

const Navigation = ({ userRole = 'freelancer' }) => {
  const location = useLocation();
  const items = menuItems[userRole] || menuItems.freelancer;

  return (
    <nav className="w-64 bg-white dark:bg-gray-800 h-screen border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 px-2 mb-8">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        {/* Menu Items */}
        <div className="space-y-1 flex-1">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:text-gray-900 dark:hover:text-gray-200'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          {userRole === 'freelancer' && (
            <Link
              to="/setup-workspace"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <Laptop className="h-5 w-5" />
              Setup Workspace
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 