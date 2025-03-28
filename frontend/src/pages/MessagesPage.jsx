import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ScrollArea } from '../components/ui/scroll-area';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const MessagesPage = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');

  // Mock data - replace with real data from API
  const conversations = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      lastMessage: 'I\'ve reviewed the initial design, looks great!',
      time: '2:30 PM',
      unread: 2,
      project: 'E-commerce Website Development',
    },
    {
      id: 2,
      name: 'StartupX',
      lastMessage: 'When can you start working on the mobile app?',
      time: '1:45 PM',
      unread: 0,
      project: 'Mobile App UI/UX Design',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'client',
      content: 'Hi! I\'ve reviewed the initial design, looks great!',
      time: '2:30 PM',
    },
    {
      id: 2,
      sender: 'freelancer',
      content: 'Thank you! I\'m glad you like it. Would you like me to proceed with the next phase?',
      time: '2:31 PM',
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add message sending logic here
    setMessage('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-4rem)]"
    >
      <Card className="h-full">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-80 border-r dark:border-gray-800">
            <div className="p-4 border-b dark:border-gray-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="p-2 space-y-2">
                {conversations.map((conversation, index) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeChat === conversation.id
                        ? 'bg-indigo-50 dark:bg-indigo-900/50'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setActiveChat(conversation.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {conversation.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {conversation.project}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full mt-2">
                        {conversation.unread}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b dark:border-gray-800 flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {conversations.find(c => c.id === activeChat)?.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {conversations.find(c => c.id === activeChat)?.project}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${
                      msg.sender === 'freelancer' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'freelancer'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          msg.sender === 'freelancer'
                            ? 'text-indigo-100'
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" type="button">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default MessagesPage; 