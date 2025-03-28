import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Clock, DollarSign, CheckCircle, XCircle, Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectMatchesPage = () => {
  const [filter, setFilter] = useState('all');

  // Mock data - replace with real data from API
  const matches = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      client: 'TechCorp Inc.',
      matchScore: 95,
      budget: 2500,
      deadline: '2024-04-15',
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'Looking for an experienced developer to build a modern e-commerce platform with React and Node.js.',
      status: 'pending',
      clientRating: 4.8,
      clientProjects: 12,
      timePosted: '2 hours ago',
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      client: 'StartupX',
      matchScore: 88,
      budget: 1800,
      deadline: '2024-04-20',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      description: 'Need a skilled UI/UX designer to create a modern and intuitive mobile app interface.',
      status: 'pending',
      clientRating: 4.5,
      clientProjects: 8,
      timePosted: '5 hours ago',
    },
    {
      id: 3,
      title: 'API Development',
      client: 'DataFlow Systems',
      matchScore: 92,
      budget: 3000,
      deadline: '2024-04-25',
      skills: ['Node.js', 'TypeScript', 'AWS'],
      description: 'Seeking an API developer to build scalable microservices for our data processing platform.',
      status: 'accepted',
      clientRating: 4.9,
      clientProjects: 15,
      timePosted: '1 day ago',
    },
  ];

  const filteredMatches = matches.filter((match) => {
    if (filter === 'all') return true;
    return match.status === filter;
  });

  const handleAccept = (id) => {
    // Add accept logic here
    console.log('Accepting project:', id);
  };

  const handleDecline = (id) => {
    // Add decline logic here
    console.log('Declining project:', id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Matches</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Projects that match your skills and preferences
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Matches
          </Button>
          <Button
            variant={filter === 'pending' ? 'default' : 'outline'}
            onClick={() => setFilter('pending')}
          >
            Pending
          </Button>
          <Button
            variant={filter === 'accepted' ? 'default' : 'outline'}
            onClick={() => setFilter('accepted')}
          >
            Accepted
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="space-y-6">
          {filteredMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {match.title}
                        </h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-gray-600 dark:text-gray-400">
                            {match.client}
                          </span>
                          <Badge variant="secondary" className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {match.clientRating}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-500">
                            {match.clientProjects} projects
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          match.matchScore >= 90
                            ? 'default'
                            : match.matchScore >= 80
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {match.matchScore}% Match
                      </Badge>
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {match.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {match.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        ${match.budget}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Due {new Date(match.deadline).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Posted {match.timePosted}
                      </div>
                    </div>
                  </div>

                  {match.status === 'pending' && (
                    <div className="flex space-x-2 mt-4 md:mt-0 md:ml-4">
                      <Button
                        variant="outline"
                        onClick={() => handleDecline(match.id)}
                        className="flex items-center"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                      <Button
                        onClick={() => handleAccept(match.id)}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
};

export default ProjectMatchesPage; 