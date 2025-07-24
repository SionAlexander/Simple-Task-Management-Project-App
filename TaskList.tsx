import { Task } from '@/types/task';

export default function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks.length) return <p className="text-gray-500">Belum ada task.</p>;
  return (
    <ul className="space-y-2">
      {tasks.map(t => (
        <li key={t.id} className="border p-3 rounded">
          <div className="font-semibold">{t.title}</div>
          <div className="text-sm text-gray-600">{t.description}</div>
          <div className="text-xs mt-1">Status: {t.status} • Deadline: {new Date(t.deadline).toLocaleDateString()}</div>
        </li>
      ))}
    </ul>
  );
}
