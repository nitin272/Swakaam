import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Briefcase,
  DollarSign,
  Code,
  Palette,
  Globe,
  MessageSquare,
  Plus,
  Users
} from 'lucide-react';

// Mock data
const talentPool = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Full Stack Developer',
    rating: 4.9,
    hourlyRate: '$45',
    location: 'New York, USA',
    availability: 'Available',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    experience: '5 years',
    avatar: 'https://i.pravatar.cc/150?img=1',
    category: 'Development'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'UI/UX Designer',
    rating: 4.8,
    hourlyRate: '$35',
    location: 'San Francisco, USA',
    availability: 'In Project',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    experience: '4 years',
    avatar: 'https://i.pravatar.cc/150?img=2',
    category: 'Design'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Backend Developer',
    rating: 4.7,
    hourlyRate: '$40',
    location: 'London, UK',
    availability: 'Available',
    skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
    experience: '6 years',
    avatar: 'https://i.pravatar.cc/150?img=3',
    category: 'Development'
  },
  {
    id: 4,
    name: 'James Rodriguez',
    role: 'Mobile Developer',
    rating: 4.6,
    hourlyRate: '$50',
    location: 'Toronto, Canada',
    availability: 'Available',
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    experience: '3 years',
    avatar: 'https://i.pravatar.cc/150?img=4',
    category: 'Development'
  }
];

const categories = [
  { id: 'all', name: 'All Talent', icon: Users },
  { id: 'development', name: 'Development', icon: Code },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'marketing', name: 'Marketing', icon: Globe }
];

const TalentPoolPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTalent = talentPool.filter(talent => {
    const matchesCategory = selectedCategory === 'all' || talent.category.toLowerCase() === selectedCategory;
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
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
            Talent Pool
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Browse and manage your available talent
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Invite Talent
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, role, or skills..."
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

      {/* Talent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTalent.map((talent) => (
          <Card key={talent.id} className="p-6">
            <div className="flex items-start gap-4">
              <img
                src={talent.avatar}
                alt={talent.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {talent.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {talent.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {talent.role}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {talent.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="h-4 w-4" />
                    {talent.hourlyRate}/hr
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {talent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-sm flex items-center gap-1 ${
                    talent.availability === 'Available'
                      ? 'text-green-500'
                      : 'text-yellow-500'
                  }`}>
                    {talent.availability === 'Available' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                    {talent.availability}
                  </span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default TalentPoolPage;