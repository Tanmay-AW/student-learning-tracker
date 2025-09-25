import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Login = () => {
  const navigate = useNavigate();
  const [, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="relative z-10 w-full max-w-md mx-auto p-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 shadow-2xl">
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  SuperKalam
                </span>
              </div>
              
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold">
                  Welcome Back!
                </CardTitle>
                <CardDescription className="text-lg">
                  Continue your learning journey with your AI mentor
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Demo Login Info */}
              <div className="bg-gradient-hero rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-primary">Demo Account</h3>
                <p className="text-sm text-muted-foreground">
                  This is a demonstration version. Click below to access the student dashboard 
                  with sample data and full functionality.
                </p>
              </div>

              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={handleLogin}
                >
                  Login as Demo Student
                </Button>
              </motion.div>

              {/* Additional Info */}
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Experience personalized AI mentorship, progress tracking, and more
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;