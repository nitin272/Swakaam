import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea";
import SignInModal from '@/components/SignInModal';

export default function LoginPage() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleNext = () => {
    navigate('/profile-completion');
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
              <Link to="/browse" className="text-gray-600 hover:text-indigo-600 font-medium">Browse Projects</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">How it Works</Link>
              <Button 
                variant="outline" 
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-6 lg:pr-8">
          <div className="sticky top-24">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Find the perfect{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                talent
              </span>{' '}
              for your next project
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Connect with top freelancers and bring your ideas to life. From design to development, 
              we've got you covered.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Describe your project</h2>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What would you like to get done? Be as specific as possible..."
                className="min-h-[200px] text-lg p-4 border-2 border-gray-200 focus:border-indigo-500 rounded-xl mb-6 resize-none"
              />
              
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                </Button>
                <span className="text-gray-500 text-sm">Press CTRL + ENTER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-6 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2M+</div>
              <div className="text-gray-600">Freelancers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600">Your payment is secured in escrow until you're satisfied with the work.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your projects done quickly with our efficient matching system.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Matching</h3>
                <p className="text-gray-600">Our AI matches you with the perfect freelancers for your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </div>
  );
}
