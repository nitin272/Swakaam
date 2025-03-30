import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Plus,
  Calendar,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  MoreVertical,
  FileText,
  Code,
  Palette,
  Globe
} from 'lucide-react';

// Mock data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform Development',
    description: 'Building a modern e-commerce platform with React and Node.js',
    status: 'active',
    progress: 75,
    budget: '$12,000',
    spent: '$9,000',
    deadline: '2024-04-15',
    team: [
      { name: 'John Doe', role: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
      { name: 'Jane Smith', role: 'UI Designer', avatar: 'https://i.pravatar.cc/150?img=2' }
    ],
    category: 'Development',
    priority: 'High'
  },
  {
    id: 2,
    title: 'Mobile App Redesign',
    description: 'Redesigning the mobile app interface for better user experience',
    status: 'pending',
    progress: 30,
    budget: '$8,500',
    spent: '$2,500',
    deadline: '2024-05-01',
    team: [
      { name: 'Mike Johnson', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?img=3' }
    ],
    category: 'Design',
    priority: 'Medium'
  },
  {
    id: 3,
    title: 'Marketing Website',
    description: 'Creating a new marketing website for product launch',
    status: 'completed',
    progress: 100,
    budget: '$5,000',
    spent: '$5,000',
    deadline: '2024-03-01',
    team: [
      { name: 'Sarah Wilson', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=4' },
      { name: 'David Chen', role: 'Content Writer', avatar: 'https://i.pravatar.cc/150?img=5' }
    ],
    category: 'Marketing',
    priority: 'Low'
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: FileText },
  { id: 'development', name: 'Development', icon: Code },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'marketing', name: 'Marketing', icon: Globe }
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category.toLowerCase() === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'completed':
        return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low':
        return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default:
        return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
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
            Projects
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage and track your ongoing projects
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="gap-2 whitespace-nowrap"
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>
      </Card>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                    {project.priority} Priority
                  </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Due {project.deadline}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.team.length} team members
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.spent} / {project.budget}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
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
              </div>
              <div className="flex items-center gap-4 ml-6">
                <div className="flex -space-x-2">
                  {project.team.map((member) => (
                    <img
                      key={member.name}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage; 