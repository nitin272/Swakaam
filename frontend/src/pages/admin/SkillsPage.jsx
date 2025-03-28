import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Star
} from 'lucide-react';

// Mock data
const skills = [
  {
    id: 1,
    name: 'React',
    category: 'Frontend',
    description: 'JavaScript library for building user interfaces',
    totalUsers: 150,
    averageScore: 85,
    tests: 3,
    status: 'active'
  },
  {
    id: 2,
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    totalUsers: 120,
    averageScore: 82,
    tests: 2,
    status: 'active'
  },
  {
    id: 3,
    name: 'UI/UX Design',
    category: 'Design',
    description: 'User interface and user experience design principles',
    totalUsers: 80,
    averageScore: 78,
    tests: 1,
    status: 'inactive'
  }
];

const categories = ['All Categories', 'Frontend', 'Backend', 'Design', 'Marketing', 'DevOps'];

const AdminSkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All Categories' || 
      skill.category === selectedCategory;
    
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
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
            Skills & Tests Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage platform skills and screening tests
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Manage Tests
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Skill
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map(skill => (
          <Card key={skill.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {skill.category}
                </p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                skill.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {skill.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {skill.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Total Users
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.totalUsers}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Average Score
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.averageScore}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Available Tests
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.tests}
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-2">
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
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminSkillsPage; 