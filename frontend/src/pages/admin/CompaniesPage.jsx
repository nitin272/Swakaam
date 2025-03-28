import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Building2,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';

// Mock data
const companies = [
  {
    id: 1,
    name: 'TechCorp Inc.',
    email: 'contact@techcorp.com',
    location: 'San Francisco, CA',
    industry: 'Technology',
    size: '50-100',
    status: 'active',
    joinedDate: '2024-01-15',
    totalProjects: 25,
    activeProjects: 8,
    totalSpent: '$150,000',
    logo: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'DesignCo',
    email: 'info@designco.com',
    location: 'New York, NY',
    industry: 'Design',
    size: '10-50',
    status: 'active',
    joinedDate: '2024-01-20',
    totalProjects: 15,
    activeProjects: 5,
    totalSpent: '$75,000',
    logo: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'WebPro',
    email: 'support@webpro.com',
    location: 'Austin, TX',
    industry: 'Technology',
    size: '100-500',
    status: 'inactive',
    joinedDate: '2024-01-25',
    totalProjects: 40,
    activeProjects: 0,
    totalSpent: '$200,000',
    logo: 'https://i.pravatar.cc/150?img=3'
  }
];

const industries = ['All Industries', 'Technology', 'Design', 'Marketing', 'Finance', 'Healthcare'];
const statuses = ['All Status', 'Active', 'Inactive', 'Suspended'];

const AdminCompaniesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companies.filter(company => {
    const matchesIndustry = selectedIndustry === 'All Industries' || 
      company.industry === selectedIndustry;
    
    const matchesStatus = selectedStatus === 'All Status' || 
      company.status === selectedStatus.toLowerCase();
    
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesStatus && matchesSearch;
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
            Company Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor and manage companies on the platform
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Company
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
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
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

      {/* Companies Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-3 px-4">Company</th>
                <th className="text-left py-3 px-4">Industry</th>
                <th className="text-left py-3 px-4">Location</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Projects</th>
                <th className="text-left py-3 px-4">Total Spent</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map(company => (
                <tr key={company.id} className="border-b dark:border-gray-700">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {company.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {company.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {company.industry}
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {company.location}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      company.status === 'active' ? 'bg-green-100 text-green-800' :
                      company.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {company.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900 dark:text-white">
                        {company.activeProjects}/{company.totalProjects}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900 dark:text-white">
                        {company.totalSpent}
                      </span>
                    </div>
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

export default AdminCompaniesPage; 