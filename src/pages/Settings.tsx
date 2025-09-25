import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Sidebar from '@/components/Sidebar';
import { 
  Settings as SettingsIcon,
  Moon,
  Sun,
  Bell,
  Trash2,
  RotateCcw,
  Shield,
  Palette,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Download,
  User
} from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn] = useLocalStorage('isLoggedIn', false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [notifications, setNotifications] = useLocalStorage('notifications', true);
  const [emailUpdates, setEmailUpdates] = useLocalStorage('emailUpdates', true);
  const [soundEffects, setSoundEffects] = useLocalStorage('soundEffects', true);
  const [showDataResetConfirm, setShowDataResetConfirm] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleResetProgress = () => {
    localStorage.removeItem('streakData');
    localStorage.removeItem('javascript-tasks');
    localStorage.removeItem('codingProgress');
    localStorage.removeItem('moduleProgress');
    setShowDataResetConfirm(false);
    toast({
      title: "Progress Reset",
      description: "All learning progress has been reset successfully.",
    });
  };

  const handleResetStreak = () => {
    localStorage.removeItem('streakData');
    toast({
      title: "Coding Streak Reset",
      description: "Your coding streak has been reset to 0.",
    });
  };

  const settingSections = [
    {
      title: 'Appearance',
      description: 'Customize how SuperKalam looks and feels',
      icon: Palette,
      settings: [
        {
          id: 'dark-mode',
          label: 'Dark Mode',
          description: 'Switch between light and dark themes',
          value: darkMode,
          onChange: toggleDarkMode,
          icon: darkMode ? Moon : Sun
        }
      ]
    },
    {
      title: 'Notifications',
      description: 'Manage your notification preferences',
      icon: Bell,
      settings: [
        {
          id: 'notifications',
          label: 'Push Notifications',
          description: 'Receive notifications about your learning progress',
          value: notifications,
          onChange: setNotifications
        },
        {
          id: 'email-updates',
          label: 'Email Updates',
          description: 'Get weekly progress reports via email',
          value: emailUpdates,
          onChange: setEmailUpdates
        },
        {
          id: 'sound-effects',
          label: 'Sound Effects',
          description: 'Play sounds for achievements and milestones',
          value: soundEffects,
          onChange: setSoundEffects
        }
      ]
    },
    {
      title: 'Profile & Resume',
      description: 'Manage your profile and resume downloads',
      icon: User,
      settings: []
    },
    {
      title: 'Privacy & Security',
      description: 'Control your data and privacy settings',
      icon: Shield,
      settings: []
    },
    {
      title: 'Data Management',
      description: 'Manage your learning data and progress',
      icon: Smartphone,
      settings: []
    }
  ];

  return (
    <Sidebar>
      <div className="p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground text-lg">
            Customize your SuperKalam experience
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-8">
          {/* Settings Sections */}
          {settingSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + sectionIndex * 0.1 }}
            >
              <Card className="border-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-superkalam-blue/10 rounded-full flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-superkalam-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {section.settings.length > 0 ? (
                    <div className="space-y-6">
                      {section.settings.map((setting) => (
                        <div key={setting.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              {setting.icon && <setting.icon className="h-4 w-4 text-muted-foreground" />}
                              <Label htmlFor={setting.id} className="font-medium">
                                {setting.label}
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {setting.description}
                            </p>
                          </div>
                          <Switch
                            id={setting.id}
                            checked={setting.value}
                            onCheckedChange={setting.onChange}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {section.title === 'Profile & Resume' && (
                        <>
                          <div className="flex items-center justify-between py-3">
                            <div>
                              <h4 className="font-medium">Download Resume</h4>
                              <p className="text-sm text-muted-foreground">
                                Download your latest resume PDF
                              </p>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </a>
                            </Button>
                          </div>
                        </>
                      )}
                      
                      {section.title === 'Privacy & Security' && (
                        <>
                          <div className="flex items-center justify-between py-3">
                            <div>
                              <h4 className="font-medium">Data Export</h4>
                              <p className="text-sm text-muted-foreground">
                                Download all your learning data
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Export Data
                            </Button>
                          </div>
                          <div className="flex items-center justify-between py-3">
                            <div>
                              <h4 className="font-medium">Account Deletion</h4>
                              <p className="text-sm text-muted-foreground">
                                Permanently delete your account and data
                              </p>
                            </div>
                            <Button variant="destructive" size="sm">
                              Delete Account
                            </Button>
                          </div>
                        </>
                      )}
                      
                      {section.title === 'Data Management' && (
                        <>
                          <div className="flex items-center justify-between py-3">
                            <div>
                              <h4 className="font-medium">Reset Coding Streak</h4>
                              <p className="text-sm text-muted-foreground">
                                Reset your current coding streak to 0
                              </p>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={handleResetStreak}
                              className="flex items-center space-x-2"
                            >
                              <RotateCcw className="h-4 w-4" />
                              <span>Reset Streak</span>
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between py-3">
                            <div>
                              <h4 className="font-medium">Reset All Progress</h4>
                              <p className="text-sm text-muted-foreground">
                                Clear all learning progress and start fresh
                              </p>
                            </div>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => setShowDataResetConfirm(true)}
                              className="flex items-center space-x-2"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span>Reset All</span>
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Data Reset Confirmation */}
          {showDataResetConfirm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Alert className="border-destructive/50 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="flex items-center justify-between">
                  <div>
                    <strong>Are you sure?</strong> This will permanently delete all your learning progress, streaks, and completed tasks. This action cannot be undone.
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowDataResetConfirm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={handleResetProgress}
                    >
                      Yes, Reset All
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {/* App Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-2 bg-gradient-hero">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-superkalam-purple rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">SuperKalam Prototype</h3>
                    <p className="text-sm text-muted-foreground">Version 1.0.0</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Your AI-powered learning companion. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>© 2024 SuperKalam</span>
                  <span>•</span>
                  <span>Made with ❤️ for students</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Settings;