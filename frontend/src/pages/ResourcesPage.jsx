import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Code,
  Laptop,
  GraduationCap,
  ExternalLink
} from 'lucide-react';

const resources = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of freelancing and how to succeed on our platform',
    icon: BookOpen,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    link: '/resources/getting-started'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step tutorials on using platform features',
    icon: Video,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    link: '/resources/tutorials'
  },
  {
    title: 'Documentation',
    description: 'Detailed documentation on our APIs and integration guides',
    icon: FileText,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    link: '/resources/docs'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other freelancers and share experiences',
    icon: Users,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    link: '/resources/community'
  },
  {
    title: 'Code Examples',
    description: 'Sample code and templates to help you get started',
    icon: Code,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    link: '/resources/code-examples'
  },
  {
    title: 'Best Practices',
    description: 'Learn industry best practices and coding standards',
    icon: Laptop,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    link: '/resources/best-practices'
  }
];

const courses = [
  {
    title: 'Web Development Fundamentals',
    duration: '8 weeks',
    level: 'Beginner',
    enrolled: 1234,
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop'
  },
  {
    title: 'Advanced React Patterns',
    duration: '6 weeks',
    level: 'Advanced',
    enrolled: 856,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop'
  },
  {
    title: 'Backend Development with Node.js',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolled: 978,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop'
  }
];

const ResourcesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resources</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Access learning materials, documentation, and community resources to help you succeed.
        </p>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <motion.div
            key={resource.title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${resource.bgColor}`}>
                  <resource.icon className={`h-6 w-6 ${resource.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {resource.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Featured Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Courses</h2>
          <Button variant="outline" className="gap-2">
            <GraduationCap className="h-4 w-4" />
            View All Courses
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                    <span>{course.enrolled.toLocaleString()} enrolled</span>
                  </div>
                  <Button className="w-full mt-4">
                    Start Learning
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResourcesPage; 