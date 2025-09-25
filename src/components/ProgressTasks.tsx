import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ProgressTasksProps {
  title: string;
  module: string;
  initialTasks: Task[];
}

const ProgressTasks = ({ title, module, initialTasks }: ProgressTasksProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(`${module}-tasks`, initialTasks);

  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = Math.round((completedTasks / tasks.length) * 100);

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card className="border-2 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-superkalam-blue rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{completedTasks}/{tasks.length} tasks completed</CardDescription>
            </div>
          </div>
          <Badge 
            variant={progressPercentage === 100 ? "default" : "secondary"}
            className="text-sm px-3 py-1"
          >
            {progressPercentage}% Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{progressPercentage === 100 ? 'Completed!' : 'In Progress'}</span>
          </div>
        </div>

        {progressPercentage === 100 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-success/10 text-success border border-success/20 rounded-lg p-4 flex items-center space-x-2"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">🎉 Module completed! Great job!</span>
          </motion.div>
        )}

        <div className="space-y-3">
          <h4 className="font-medium text-foreground">Tasks</h4>
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <Checkbox
                id={task.id}
                checked={task.completed}
                onCheckedChange={() => handleTaskToggle(task.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <label 
                  htmlFor={task.id}
                  className={`block text-sm font-medium cursor-pointer ${
                    task.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  {task.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTasks;