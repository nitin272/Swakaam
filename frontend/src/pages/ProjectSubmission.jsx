import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

const ProjectSubmissionPage = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    budget: '',
    category: '',
    skills: '',
    deadline: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle project submission logic here
    console.log('Project data:', projectData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Project</h1>
          <p className="text-gray-600">Tell us about your project and get matched with the perfect freelancers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={projectData.title}
              onChange={handleChange}
              placeholder="e.g., Website Redesign for E-commerce Store"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              placeholder="Describe your project in detail..."
              className="mt-1"
              rows={6}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                name="budget"
                type="text"
                value={projectData.budget}
                onChange={handleChange}
                placeholder="e.g., $500 - $1000"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                type="text"
                value={projectData.category}
                onChange={handleChange}
                placeholder="e.g., Web Development"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="skills">Required Skills</Label>
            <Input
              id="skills"
              name="skills"
              type="text"
              value={projectData.skills}
              onChange={handleChange}
              placeholder="e.g., React, Node.js, MongoDB"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="deadline">Project Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={projectData.deadline}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="px-6"
            >
              Save as Draft
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 hover:from-indigo-700 hover:to-purple-700"
            >
              Post Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmissionPage;
