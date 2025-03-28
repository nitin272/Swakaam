import React, { useState } from 'react';
import Modal3D from './Modal3D';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle } from 'lucide-react';

const ProfileCompletionModal = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    cv: null,
    technologies: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      onComplete(formData);
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <Modal3D isOpen={isOpen} onClose={onClose} title="Complete Your Profile">
      <div className="space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= stepNumber
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`h-1 w-16 ${
                    step > stepNumber
                      ? 'bg-indigo-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className={`space-y-4 ${step === 1 ? 'block' : 'hidden'}`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Professional Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Senior Full Stack Developer"
            />
          </div>
        </motion.div>

        {/* Step 2: CV Upload */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className={`space-y-4 ${step === 2 ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 dark:border-gray-600">
            <Upload className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Drag and drop your CV here, or click to browse
            </p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="mt-4 hidden"
              id="cv-upload"
            />
            <label
              htmlFor="cv-upload"
              className="mt-4 cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Browse Files
            </label>
            {formData.cv && (
              <div className="mt-4 flex items-center text-sm text-green-600">
                <CheckCircle className="mr-1 h-4 w-4" />
                {formData.cv.name}
              </div>
            )}
          </div>
        </motion.div>

        {/* Step 3: Skills and Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className={`space-y-4 ${step === 3 ? 'block' : 'hidden'}`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Technologies and Skills
            </label>
            <textarea
              name="technologies"
              value={formData.technologies}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="List your technologies and skills (e.g., React, Node.js, Python)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Professional Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Describe your professional experience and achievements"
            />
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              step === 1
                ? 'cursor-not-allowed text-gray-400'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {step === 3 ? 'Complete Profile' : 'Next'}
          </button>
        </div>
      </div>
    </Modal3D>
  );
};

export default ProfileCompletionModal; 