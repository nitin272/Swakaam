import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import {
  Laptop,
  Code,
  Terminal,
  GitBranch,
  Database,
  Package,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  RefreshCw
} from 'lucide-react';

const requirements = [
  {
    name: 'Node.js',
    description: 'JavaScript runtime environment',
    minVersion: '14.0.0',
    icon: Code,
    installCommand: 'https://nodejs.org/download/',
    isExternal: true
  },
  {
    name: 'Git',
    description: 'Version control system',
    minVersion: '2.0.0',
    icon: GitBranch,
    installCommand: 'https://git-scm.com/downloads',
    isExternal: true
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database',
    minVersion: '5.0.0',
    icon: Database,
    installCommand: 'https://www.mongodb.com/try/download/community',
    isExternal: true
  },
  {
    name: 'npm',
    description: 'Package manager',
    minVersion: '6.0.0',
    icon: Package,
    installCommand: 'npm install -g npm@latest',
    isExternal: false
  }
];

const SetupWorkspacePage = () => {
  const [checkResults, setCheckResults] = useState({});
  const [isChecking, setIsChecking] = useState(false);

  const checkRequirement = async (requirement) => {
    // TODO: Implement actual version checking logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          installed: Math.random() > 0.3,
          currentVersion: requirement.minVersion,
          meetsMinimum: Math.random() > 0.2
        });
      }, 1000);
    });
  };

  const handleCheckAll = async () => {
    setIsChecking(true);
    const results = {};

    for (const req of requirements) {
      results[req.name] = await checkRequirement(req);
    }

    setCheckResults(results);
    setIsChecking(false);
  };

  const getStatusColor = (requirement) => {
    const result = checkResults[requirement.name];
    if (!result) return 'text-gray-400';
    if (!result.installed) return 'text-red-500';
    return result.meetsMinimum ? 'text-green-500' : 'text-yellow-500';
  };

  const getStatusIcon = (requirement) => {
    const result = checkResults[requirement.name];
    if (!result) return null;
    return result.installed && result.meetsMinimum ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Setup Your Workspace
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Let's make sure your development environment is ready to go
        </p>
      </div>

      {/* Requirements Card */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              System Requirements
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Check if your system meets the minimum requirements
            </p>
          </div>
          <Button
            onClick={handleCheckAll}
            disabled={isChecking}
            className="gap-2"
          >
            {isChecking ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Terminal className="h-4 w-4" />
                Check Requirements
              </>
            )}
          </Button>
        </div>

        <div className="space-y-4">
          {requirements.map((requirement) => (
            <div
              key={requirement.name}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <requirement.icon className={`h-5 w-5 ${getStatusColor(requirement)}`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {requirement.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {requirement.description} (Min: v{requirement.minVersion})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {getStatusIcon(requirement)}
                {requirement.isExternal ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(requirement.installCommand, '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 font-mono text-sm"
                  >
                    {requirement.installCommand}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Next Steps
        </h2>
        <div className="space-y-4">
          {[
            'Install any missing requirements',
            'Configure your development environment',
            'Clone the project repository',
            'Install project dependencies'
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <ArrowRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{step}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Help Section */}
      <Card className="p-6 border-dashed">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
            <Laptop className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Need help setting up?
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Our documentation includes detailed setup guides for various operating systems and IDEs.
            </p>
            <Button variant="link" className="mt-4 gap-2 p-0">
              View Setup Guides
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SetupWorkspacePage; 