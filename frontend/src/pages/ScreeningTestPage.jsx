import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { 
  Camera, 
  Monitor, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Shield, 
  Video, 
  Mic,
  XCircle,
  ArrowRight,
  ExternalLink,
  BookOpen,
  GraduationCap,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ScreeningTestPage = () => {
  const [step, setStep] = useState(1);
  const [isScreenShared, setIsScreenShared] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [showPreview, setShowPreview] = useState(false);
  const [securityCode, setSecurityCode] = useState(['', '', '', '', '', '', '', '']);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const videoRef = useRef(null);
  const screenRef = useRef(null);
  const previewVideoRef = useRef(null);
  const previewScreenRef = useRef(null);
  const securityInputRefs = Array(8).fill(0).map(() => useRef(null));

  // Timer effect
  useEffect(() => {
    if (step === 3 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const handleSecurityCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...securityCode];
      newCode[index] = value;
      setSecurityCode(newCode);
      
      // Move to next input if value is entered
      if (value && index < 7) {
        securityInputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !securityCode[index] && index > 0) {
      securityInputRefs[index - 1].current?.focus();
    }
  };

  const handleStartScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      if (screenRef.current) {
        screenRef.current.srcObject = stream;
      }
      if (previewScreenRef.current) {
        previewScreenRef.current.srcObject = stream;
      }
      setIsScreenShared(true);
      setShowPreview(true);
    } catch (err) {
      console.error('Error sharing screen:', err);
    }
  };

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      if (previewVideoRef.current) {
        previewVideoRef.current.srcObject = stream;
      }
      setIsCameraOn(true);
      setShowPreview(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const handleStartMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsMicOn(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const guidelines = [
    {
      title: "Test Environment",
      items: [
        "Ensure you are in a quiet, well-lit room",
        "Use a stable internet connection",
        "Close all other applications",
        "Keep your desk clear of any materials"
      ]
    },
    {
      title: "Technical Requirements",
      items: [
        "Enable screen sharing",
        "Turn on your camera",
        "Enable microphone",
        "Use a modern browser (Chrome recommended)"
      ]
    },
    {
      title: "Test Rules",
      items: [
        "No external assistance allowed",
        "No switching browser tabs",
        "No use of mobile devices",
        "Stay within camera view throughout the test"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8"
    >
      <div className="max-w-5xl mx-auto">
        <Card className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Instructions</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Belts are highly regarded by our industry partners as they are trusted to be the true
                representation of a student's skills. You can attempt the belt test for a level multiple times,
                and failing has no consequences.
              </p>
              <div className="mt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Belts will be awarded following successful verification through integrity checks. To ensure
                  successful verification, please follow these guidelines:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Ensure you're sharing the entire screen during the session, rather than just tab/window.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Maintain focus solely on the Belt Test window. Close all other tabs, windows, and notifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Refrain from using in-browser AI assistance or any other helper tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Share your webcam feed and avoid interacting with peers.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={setAgreedToTerms}
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  I understand and agree to comply with all instructions provided.
                </label>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Enable Permissions
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Please enable access to your camera, microphone, and screen sharing to proceed.
                </p>

                <div className="space-y-4">
                  <Card className={`p-4 ${isCameraOn ? 'border-green-500' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Camera className={`h-5 w-5 ${isCameraOn ? 'text-green-500' : 'text-gray-400'}`} />
                        <div>
                          <h3 className="font-medium">Camera & Microphone</h3>
                          <p className="text-sm text-gray-500">Required for proctoring</p>
                        </div>
                      </div>
                      <Button
                        variant={isCameraOn ? "outline" : "default"}
                        onClick={handleStartCamera}
                        className="w-24"
                      >
                        {isCameraOn ? 'Enabled' : 'Enable'}
                      </Button>
                    </div>
                    {isCameraOn && (
                      <div className="mt-4 aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <video
                          ref={previewVideoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </Card>

                  <Card className={`p-4 ${isScreenShared ? 'border-green-500' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Monitor className={`h-5 w-5 ${isScreenShared ? 'text-green-500' : 'text-gray-400'}`} />
                        <div>
                          <h3 className="font-medium">Screen Sharing</h3>
                          <p className="text-sm text-gray-500">Required for test monitoring</p>
                        </div>
                      </div>
                      <Button
                        variant={isScreenShared ? "outline" : "default"}
                        onClick={handleStartScreenShare}
                        className="w-24"
                      >
                        {isScreenShared ? 'Enabled' : 'Enable'}
                      </Button>
                    </div>
                    {isScreenShared && (
                      <div className="mt-4 aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <video
                          ref={previewScreenRef}
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Enter Security Code
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Enter the security code shared by your mentor to begin the test.
                </p>

                <div className="grid grid-cols-8 gap-2">
                  {securityCode.map((digit, index) => (
                    <Input
                      key={index}
                      ref={securityInputRefs[index]}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleSecurityCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="text-center text-lg font-mono"
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <Button 
                    className="w-full"
                    disabled={!agreedToTerms || !isCameraOn || !isScreenShared || securityCode.some(d => !d)}
                  >
                    Start Test
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default ScreeningTestPage; 