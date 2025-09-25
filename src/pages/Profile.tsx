import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Sidebar from '@/components/Sidebar';
import { 
  User, 
  Target,
  Award,
  Calendar,
  TrendingUp,
  Code2,
  Clock,
  Star,
  Flame,
  Trophy,
  Github,
  Linkedin,
  Download,
  ExternalLink
} from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useStreak } from '@/hooks/useStreak';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useLocalStorage('isLoggedIn', false);
  const { streakCount } = useStreak();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const achievements = [
    {
      id: 'first-login',
      title: 'Welcome Aboard!',
      description: 'Completed your first login',
      icon: Target,
      earned: true,
      date: '2024-01-10'
    },
    {
      id: 'week-streak',
      title: 'Week Warrior',
      description: 'Maintained a 7-day learning streak',
      icon: Flame,
      earned: streakCount >= 7,
      date: streakCount >= 7 ? '2024-01-17' : null
    },
    {
      id: 'first-module',
      title: 'Module Master',
      description: 'Completed your first learning module',
      icon: Code2,
      earned: false,
      date: null
    },
    {
      id: 'perfectionist',
      title: 'Perfectionist',
      description: 'Scored 100% on a practice test',
      icon: Star,
      earned: false,
      date: null
    }
  ];

  const stats = [
    {
      label: 'Coding Days',
      value: `${streakCount} days`,
      icon: Flame,
      color: 'superkalam-orange'
    },
    {
      label: 'Skills Completed',
      value: '1/7',
      icon: Code2,
      color: 'superkalam-blue'
    },
    {
      label: 'Study Hours',
      value: '156',
      icon: Clock,
      color: 'superkalam-purple'
    },
    {
      label: 'Achievements',
      value: achievements.filter(a => a.earned).length.toString(),
      icon: Trophy,
      color: 'superkalam-green'
    }
  ];

  const goals = [
    {
      title: 'Finish Next.js Module by Nov',
      progress: 35,
      target: 'November 2024',
      status: 'on-track'
    },
    {
      title: 'Maintain 30-day Coding Streak',
      progress: (streakCount / 30) * 100,
      target: 'Next month',
      status: streakCount >= 15 ? 'on-track' : 'needs-attention'
    },
    {
      title: 'Complete Portfolio Update',
      progress: 70,
      target: 'End of October',
      status: 'in-progress'
    },
    {
      title: 'Master TypeScript Fundamentals',
      progress: 60,
      target: 'December 2024',
      status: 'in-progress'
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
          <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-muted-foreground text-lg">
            Track your progress and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="border-2">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" alt="Tanmay" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                    T
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">Tanmay Gunwant</CardTitle>
                <CardDescription>
                  Fullstack Developer in Progress
                </CardDescription>
                <Badge className="bg-superkalam-blue text-white mt-2">
                  Active Coder
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Member since Jan 10, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>Goal: Next.js Mastery by March</span>
                  </div>
                  
                  {/* Social Links */}
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium mb-3">Connect with me:</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href="https://github.com/Tanmay-AW" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href="https://linkedin.com/in/tanmaygunwantdev" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2" asChild>
                      <a href="/Tanmay_Gunwant_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 bg-${stat.color}/10 rounded-full flex items-center justify-center`}>
                          <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Current Goals</h2>
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {goals.map((goal, index) => (
                      <div key={goal.title} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{goal.title}</h3>
                          <Badge 
                            variant={goal.status === 'on-track' ? 'default' : 'secondary'}
                            className={
                              goal.status === 'on-track' ? 'bg-success text-success-foreground' :
                              goal.status === 'needs-attention' ? 'bg-destructive text-destructive-foreground' :
                              'bg-superkalam-orange text-white'
                            }
                          >
                            {goal.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Target: {goal.target}</span>
                          <span>{Math.round(goal.progress)}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={achievement.id} 
                    className={`border-2 transition-all duration-300 ${
                      achievement.earned 
                        ? 'bg-gradient-hero border-primary/20 shadow-md' 
                        : 'opacity-60 border-muted'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-superkalam-purple text-white' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{achievement.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {achievement.description}
                          </p>
                          {achievement.earned && achievement.date && (
                            <p className="text-xs text-primary mt-2">
                              Earned on {achievement.date}
                            </p>
                          )}
                        </div>
                        {achievement.earned && (
                          <Award className="h-5 w-5 text-superkalam-orange" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Profile;