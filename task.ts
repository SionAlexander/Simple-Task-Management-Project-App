export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  deadline: string; // ISO string
  assigneeId: number;
  assignee?: { id: number; name: string };
  createdAt: string;
  updatedAt: string;
}
