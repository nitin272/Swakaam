import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from 'react-router-dom';

export default function ProfileCompletionPage() {
  const [cv, setCv] = useState(null);
  const [technologies, setTechnologies] = useState('');
  const [experience, setExperience] = useState('');
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement profile completion logic
    console.log('Profile completion submitted');
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <img src="/Logo.svg" alt="Swakaam" className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Need help?</span>
              <Button 
                variant="outline" 
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-16 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-1/3"></div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">Step 1 of 3</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's create your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                professional profile
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Help clients understand your expertise and experience better
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info Section */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 text-lg font-medium mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-gray-700 text-lg font-medium mb-2 block">
                      Professional Title
                    </Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-2 border-gray-200 focus:border-indigo-500 rounded-xl"
                      placeholder="Full Stack Developer"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cv" className="text-gray-700 text-lg font-medium mb-2 block">
                    Upload CV
                  </Label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors">
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleCvUpload}
                      required
                      className="hidden"
                    />
                    <label htmlFor="cv" className="cursor-pointer">
                      <div className="mb-4">
                        <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-gray-600">
                        Drag and drop your CV here, or <span className="text-indigo-600">browse files</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        Accepted formats: PDF, DOC, DOCX
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="technologies" className="text-gray-700 text-lg font-medium mb-2 block">
                    Technologies & Skills
                  </Label>
                  <Textarea
                    id="technologies"
                    placeholder="List your technologies and skills (e.g., React, Node.js, Python, UI/UX Design)"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    required
                    className="min-h-[100px] text-lg p-4 border-2 border-gray-200 focus:border-indigo-500 rounded-xl resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-gray-700 text-lg font-medium mb-2 block">
                    Professional Experience
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your work experience and notable projects"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                    className="min-h-[150px] text-lg p-4 border-2 border-gray-200 focus:border-indigo-500 rounded-xl resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Save as Draft
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 