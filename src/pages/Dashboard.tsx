import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import ProgressTasks from '@/components/ProgressTasks';
import { 
  Flame, 
  Code2, 
  Calendar, 
  Target,
  Clock,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useStreak } from '@/hooks/useStreak';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useLocalStorage('isLoggedIn', false);
  const { streakCount, updateStreak } = useStreak();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    // Update streak when component mounts
    updateStreak();
  }, [isLoggedIn, navigate, updateStreak]);

  // Sample JavaScript tasks
  const codingTasks = [
    {
      id: 'arrow-functions',
      title: 'Master Arrow Functions',
      description: 'Learn modern ES6 arrow function syntax and use cases',
      completed: true
    },
    {
      id: 'async-await',
      title: 'Async/Await Patterns',
      description: 'Handle promises with async/await for cleaner code',
      completed: true
    },
    {
      id: 'react-hooks',
      title: 'React Hooks Practice',
      description: 'Implement useState, useEffect, and custom hooks',
      completed: false
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      description: 'Fetch data from REST APIs and handle responses',
      completed: false
    },
    {
      id: 'responsive-design',
      title: 'Responsive CSS Layout',
      description: 'Create mobile-first responsive designs with CSS Grid',
      completed: false
    }
  ];

  const upcomingProjects = [
    { name: 'Portfolio Update', deadline: '2024-01-15', status: 'in-progress' },
    { name: 'API Integration Demo', deadline: '2024-01-22', status: 'upcoming' },
    { name: 'React Quiz App', deadline: '2024-01-29', status: 'planned' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-superkalam-orange';
      case 'upcoming':
        return 'bg-superkalam-blue';
      case 'planned':
        return 'bg-superkalam-purple';
      default:
        return 'bg-muted';
    }
  };

  return (
    <Sidebar>
      <div className="p-8">
        {/* Greeting Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-gradient-primary text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, Tanmay! 👋
              </h1>
              <p className="text-lg opacity-90">
                Ready to continue your learning journey? Let's make today count!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-superkalam-orange/10 rounded-full flex items-center justify-center">
                  <Flame className="h-5 w-5 text-superkalam-orange" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coding Days</p>
                  <p className="text-xl font-bold">{streakCount} days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-superkalam-blue/10 rounded-full flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-superkalam-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Skills</p>
                  <p className="text-xl font-bold">7</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-superkalam-green/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-superkalam-green" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-xl font-bold">68%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-superkalam-purple/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-superkalam-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Tasks Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
                            <ProgressTasks 
                title="JavaScript Fundamentals"
                module="javascript"
                initialTasks={codingTasks}
              />
            </motion.div>

            {/* Recommended Next Step */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-hero">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-superkalam-purple rounded-full flex items-center justify-center">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Recommended Next Step</CardTitle>
                        <CardDescription>Based on your progress</CardDescription>
                      </div>
                    </div>
                    <Button variant="default" className="flex items-center space-x-2">
                      <span>Continue</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ready to dive deeper into TypeScript? Let's explore type annotations and interfaces!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>~30 minutes</span>
                    </span>
                    <span>•</span>
                    <span>Beginner Level</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-superkalam-green rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle>Upcoming Projects</CardTitle>
                      <CardDescription>Build and showcase</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingProjects.map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium text-sm">{project.name}</p>
                          <p className="text-xs text-muted-foreground">{project.deadline}</p>
                        </div>
                        <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;