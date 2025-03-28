import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

// Mock data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform Development',
    company: 'TechCorp Inc.',
    freelancer: 'John Doe',
    status: 'active',
    budget: '$5,000',
    spent: '$2,500',
    deadline: '2024-03-15',
    progress: 50
  },
  {
    id: 2,
    title: 'Mobile App Design',
    company: 'DesignCo',
    freelancer: 'Jane Smith',
    status: 'completed',
    budget: '$3,000',
    spent: '$3,000',
    deadline: '2024-02-28',
    progress: 100
  },
  {
    id: 3,
    title: 'Website Redesign',
    company: 'WebPro',
    freelancer: 'Mike Johnson',
    status: 'pending',
    budget: '$2,500',
    spent: '$0',
    deadline: '2024-04-01',
    progress: 0
  }
];

const statuses = ['All Projects', 'Active', 'Completed', 'Pending', 'Cancelled'];

const AdminProjectsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesStatus = selectedStatus === 'All Projects' || 
      project.status === selectedStatus.toLowerCase();
    
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.freelancer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

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
            Project Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor and manage platform projects
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Project
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Projects Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-3 px-4">Project</th>
                <th className="text-left py-3 px-4">Company</th>
                <th className="text-left py-3 px-4">Freelancer</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Budget</th>
                <th className="text-left py-3 px-4">Progress</th>
                <th className="text-left py-3 px-4">Deadline</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map(project => (
                <tr key={project.id} className="border-b dark:border-gray-700">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {project.company}
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {project.freelancer}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === 'active' ? 'bg-green-100 text-green-800' :
                      project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900 dark:text-white">
                        {project.budget}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">
                      {project.progress}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {new Date(project.deadline).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <AlertCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
};

export default AdminProjectsPage; 