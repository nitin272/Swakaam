import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  ArrowRight,
  Play,
  BarChart
} from 'lucide-react';

const learningPaths = [
  {
    title: 'Frontend Development',
    description: 'Master modern frontend technologies and frameworks',
    progress: 65,
    totalCourses: 12,
    completedCourses: 8,
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop',
    level: 'Intermediate',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX']
  },
  {
    title: 'Backend Development',
    description: 'Build scalable and secure backend services',
    progress: 30,
    totalCourses: 10,
    completedCourses: 3,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop',
    level: 'Advanced',
    skills: ['Node.js', 'Python', 'Databases', 'APIs']
  },
  {
    title: 'Full Stack Development',
    description: 'Become a versatile full stack developer',
    progress: 15,
    totalCourses: 15,
    completedCourses: 2,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    level: 'Expert',
    skills: ['MERN Stack', 'DevOps', 'System Design']
  }
];

const achievements = [
  {
    title: 'Quick Learner',
    description: 'Completed 5 courses in 30 days',
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Perfect Score',
    description: 'Achieved 100% in 3 assessments',
    icon: Star,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    title: 'Skill Master',
    description: 'Mastered 10 essential skills',
    icon: Trophy,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  }
];

const LearningPathPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Path</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Your personalized learning journey to master new skills and advance your career.
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Progress</h2>
            <p className="text-gray-600 dark:text-gray-400">Keep up the great work!</p>
          </div>
          <Button variant="outline" className="gap-2">
            <BarChart className="h-4 w-4" />
            View Detailed Stats
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="p-4 border-2 border-dashed"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Learning Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningPaths.map((path) => (
          <motion.div
            key={path.title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="overflow-hidden">
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {path.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/50 rounded-full">
                    {path.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {path.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      {path.completedCourses} of {path.totalCourses} courses completed
                    </span>
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">
                      {path.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button className="w-full gap-2">
                  {path.progress > 0 ? (
                    <>
                      Continue Learning
                      <Play className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recommended Next Steps */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recommended Next Steps
        </h2>
        <div className="space-y-4">
          {[
            'Complete the "Advanced React Patterns" course',
            'Take the TypeScript assessment',
            'Join the upcoming live workshop on System Design',
            'Practice with real-world project exercises'
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{step}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default LearningPathPage; 