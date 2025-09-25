import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';
import { 
  Code2, 
  FileText, 
  Atom,
  Layers,
  Palette,
  Server,
  GitBranch,
  ArrowRight,
  Clock,
  Star,
  CheckCircle2
} from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Modules = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useLocalStorage('isLoggedIn', false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const modules = [
    {
      id: 'javascript',
      title: 'JavaScript Fundamentals',
      description: 'Master ES6+, async programming, and modern JavaScript concepts',
      icon: Code2,
      progress: 85,
      difficulty: 'Beginner',
      duration: '25 hours',
      lessons: 18,
      status: 'in-progress',
      color: 'superkalam-blue'
    },
    {
      id: 'typescript',
      title: 'TypeScript Basics',
      description: 'Learn type-safe JavaScript with TypeScript fundamentals',
      icon: FileText,
      progress: 60,
      difficulty: 'Beginner',
      duration: '15 hours',
      lessons: 12,
      status: 'in-progress',
      color: 'superkalam-purple'
    },
    {
      id: 'react',
      title: 'React.js',
      description: 'Build interactive UIs with React hooks and modern patterns',
      icon: Atom,
      progress: 100,
      difficulty: 'Intermediate',
      duration: '30 hours',
      lessons: 22,
      status: 'completed',
      color: 'superkalam-green'
    },
    {
      id: 'nextjs',
      title: 'Next.js',
      description: 'Full-stack React framework with SSR and API routes',
      icon: Layers,
      progress: 35,
      difficulty: 'Intermediate',
      duration: '28 hours',
      lessons: 20,
      status: 'in-progress',
      color: 'superkalam-orange'
    },
    {
      id: 'tailwind',
      title: 'Tailwind CSS & UI/UX',
      description: 'Modern styling and responsive design principles',
      icon: Palette,
      progress: 90,
      difficulty: 'Beginner',
      duration: '12 hours',
      lessons: 10,
      status: 'in-progress',
      color: 'superkalam-blue'
    },
    {
      id: 'backend',
      title: 'API & Backend Basics',
      description: 'RESTful APIs, databases, and server-side development',
      icon: Server,
      progress: 0,
      difficulty: 'Advanced',
      duration: '40 hours',
      lessons: 28,
      status: 'locked',
      color: 'superkalam-purple'
    },
    {
      id: 'git',
      title: 'Git & Deployment',
      description: 'Version control, CI/CD, and deployment strategies',
      icon: GitBranch,
      progress: 75,
      difficulty: 'Intermediate',
      duration: '18 hours',
      lessons: 14,
      status: 'in-progress',
      color: 'superkalam-green'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-superkalam-green text-white';
      case 'Intermediate':
        return 'bg-superkalam-orange text-white';
      case 'Advanced':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-superkalam-orange" />;
      default:
        return <Star className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Sidebar>
      <div className="p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Skill Modules</h1>
          <p className="text-muted-foreground text-lg">
            Master full-stack development through hands-on learning paths
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Modules Completed</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="w-12 h-12 bg-superkalam-orange/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-superkalam-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Hours</p>
                  <p className="text-2xl font-bold">128</p>
                </div>
                <div className="w-12 h-12 bg-superkalam-blue/10 rounded-full flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-superkalam-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="border-2 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${module.color} rounded-full flex items-center justify-center`}>
                        <module.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {module.description}
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusIcon(module.status)}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>

                  {/* Module Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{module.lessons} lessons</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                    <Badge className={getDifficultyColor(module.difficulty)}>
                      {module.difficulty}
                    </Badge>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full mt-4 group-hover:bg-primary/90 transition-colors"
                    disabled={module.status === 'locked'}
                  >
                    {module.status === 'completed' ? 'Review Module' : 
                     module.status === 'locked' ? 'Locked' : 'Continue Learning'}
                    {module.status !== 'locked' && (
                      <ArrowRight className="h-4 w-4 ml-2" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default Modules;