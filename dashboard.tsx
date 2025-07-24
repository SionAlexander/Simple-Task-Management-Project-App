import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { getTasks } from '@/services/task';
import { Task } from '@/types/task';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!user) router.replace('/login');
  }, [user, router]);

  useEffect(() => {
    // nanti ganti ke API nyata
    const mock: Task[] = [];
    setTasks(mock);
    // getTasks().then(setTasks);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
      <TaskForm onCreated={(t)=>setTasks(prev=>[t,...prev])} />
      <TaskList tasks={tasks} />
    </div>
  );
}
