import React, { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Check,
  CheckCheck,
  Clock
} from 'lucide-react';

// Mock data
const conversations = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastMessage: 'I completed the API integration for the payment system.',
    time: '2:30 PM',
    unread: 2,
    online: true,
    project: 'E-commerce Platform'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'Here are the latest design mockups for review.',
    time: '1:45 PM',
    unread: 0,
    online: false,
    project: 'Mobile App Redesign'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastMessage: 'The database migration is complete.',
    time: '11:20 AM',
    unread: 0,
    online: true,
    project: 'API Development'
  }
];

const messages = [
  {
    id: 1,
    sender: 'Sarah Wilson',
    content: 'I completed the API integration for the payment system.',
    time: '2:30 PM',
    status: 'read',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    sender: 'You',
    content: 'Great work! Can you also add error handling for failed transactions?',
    time: '2:32 PM',
    status: 'sent',
    avatar: null
  },
  {
    id: 3,
    sender: 'Sarah Wilson',
    content: 'I will add comprehensive error handling and retry mechanisms.',
    time: '2:35 PM',
    status: 'read',
    avatar: 'https://i.pravatar.cc/150?img=1'
  }
];

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // TODO: Implement message sending logic
      setMessageInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-[calc(100vh-4rem)] flex"
    >
      {/* Conversations List */}
      <Card className="w-80 border-r rounded-none">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                selectedConversation === conversation.id
                  ? 'bg-indigo-50 dark:bg-indigo-900/20'
                  : ''
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-white truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{conversation.project}</span>
                    {conversation.unread > 0 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <Card className="p-4 border-b rounded-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={conversations.find(c => c.id === selectedConversation)?.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {conversations.find(c => c.id === selectedConversation)?.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {conversations.find(c => c.id === selectedConversation)?.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'You' ? 'flex-row-reverse' : ''
              }`}
            >
              {message.avatar && (
                <img
                  src={message.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'You'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs opacity-70">{message.time}</span>
                  {message.sender === 'You' && (
                    <span className="text-xs">
                      {message.status === 'read' ? (
                        <CheckCheck className="h-3 w-3 inline" />
                      ) : message.status === 'sent' ? (
                        <Check className="h-3 w-3 inline" />
                      ) : (
                        <Clock className="h-3 w-3 inline" />
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <Card className="p-4 border-t rounded-none">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
            />
            <Button onClick={handleSendMessage} className="gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default MessagesPage; 