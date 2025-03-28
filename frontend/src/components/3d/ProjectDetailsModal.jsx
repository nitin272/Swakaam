import React from 'react';
import Modal3D from './Modal3D';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, Briefcase, Star, CheckCircle } from 'lucide-react';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal3D isOpen={isOpen} onClose={onClose} title="Project Details">
      <div className="space-y-6">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-start justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Posted {project.postedDate}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              {project.status}
            </span>
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {project.duration}
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <DollarSign className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {project.budget}
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {project.applications} applications
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {project.experience}
            </p>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose max-w-none dark:prose-invert"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Description
          </h4>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </motion.div>

        {/* Required Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Required Skills
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Client Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
        >
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900">
              <img
                src={project.client.avatar}
                alt={project.client.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                {project.client.name}
              </h4>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {project.client.rating} ({project.client.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-end space-x-4"
        >
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Close
          </button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Apply Now
          </button>
        </motion.div>
      </div>
    </Modal3D>
  );
};

export default ProjectDetailsModal; 