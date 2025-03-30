import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Star, Award, Briefcase, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FreelancerProfilePage = () => {
  // Mock data - replace with real data from API
  const profile = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    avatar: '/avatars/john.jpg',
    rating: 4.8,
    completedProjects: 24,
    totalEarnings: 45000,
    memberSince: '2023-01',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'AWS', level: 75 },
    ],
    experience: [
      {
        title: 'Senior Developer',
        company: 'TechCorp',
        period: '2020-2023',
        description: 'Led development of enterprise applications',
      },
      {
        title: 'Full Stack Developer',
        company: 'StartupX',
        period: '2018-2020',
        description: 'Developed and maintained multiple web applications',
      },
    ],
    recentProjects: [
      {
        title: 'E-commerce Platform',
        client: 'RetailCo',
        duration: '3 months',
        budget: 12000,
        rating: 5,
        skills: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'CRM System',
        client: 'SalesPro',
        duration: '2 months',
        budget: 8000,
        rating: 4.5,
        skills: ['TypeScript', 'AWS', 'React'],
      },
    ],
    availability: {
      status: 'Available',
      weeklyHours: 40,
      preferredProjects: ['Web Development', 'API Development', 'Cloud Solutions'],
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full border-4 border-white dark:border-gray-900">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {profile.name}
              </h1>
              <Badge variant="secondary" className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                {profile.rating}
              </Badge>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-1">
              {profile.title}
            </p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Briefcase className="h-5 w-5 mr-2" />
                {profile.completedProjects} Projects
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <DollarSign className="h-5 w-5 mr-2" />
                ${profile.totalEarnings}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                Member since {profile.memberSince}
              </div>
            </div>
          </div>
          <Button>Edit Profile</Button>
        </div>
      </Card>

      {/* Skills Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <div className="space-y-4">
          {profile.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Experience Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.period}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Projects */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.recentProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.client}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {project.duration}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    ${project.budget}
                  </span>
                  <Badge variant="secondary" className="flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {project.rating}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Availability */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Availability
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Badge
              variant={profile.availability.status === 'Available' ? 'default' : 'secondary'}
            >
              {profile.availability.status}
            </Badge>
            <span className="text-gray-600 dark:text-gray-400">
              {profile.availability.weeklyHours} hours/week
            </span>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Project Types
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.availability.preferredProjects.map((type) => (
                <Badge key={type} variant="outline">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FreelancerProfilePage; 