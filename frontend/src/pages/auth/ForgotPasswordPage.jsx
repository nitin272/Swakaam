import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual password reset logic
    setIsSubmitted(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you instructions to reset your password"
    >
      <Card className="p-6 w-full">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full gap-2">
              Send Reset Instructions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/20 w-fit mx-auto">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Check your email
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We've sent password reset instructions to <strong>{email}</strong>. Please check your inbox.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
          </div>
        )}
      </Card>

      {/* Back to Login Link */}
      <p className="mt-4 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </p>

      {/* Help Text */}
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Need help?{' '}
        <Link
          to="/support"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          Contact support
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPasswordPage; 