import { useState } from 'react';
import { TaskStatus, Task } from '@/types/task';

type Props = { onCreated: (t: Task) => void };

export default function TaskForm({ onCreated }: Props) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>('TODO');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const fake: Task = {
      id: Date.now(),
      title,
      description: '',
      status,
      deadline: new Date().toISOString(),
      assigneeId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onCreated(fake);
    setTitle('');
  };

  return (
    <form onSubmit={submit} className="mb-6 flex gap-2">
      <input className="border p-2 rounded flex-1" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Task title" />
      <select className="border p-2 rounded" value={status} onChange={e=>setStatus(e.target.value as TaskStatus)}>
        <option value="TODO">Todo</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
      <button className="border px-4 rounded hover:bg-gray-100">Add</button>
    </form>
  );
}
