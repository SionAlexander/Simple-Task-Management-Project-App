import api from './api';
import { Task } from '@/types/task';

export const getTasks = async (): Promise<Task[]> => (await api.get('/tasks')).data;
export const createTask = async (payload: Partial<Task>) => (await api.post('/tasks', payload)).data;
export const updateTask = async (id: number, payload: Partial<Task>) => (await api.put(`/tasks/${id}`, payload)).data;
export const deleteTask = async (id: number) => (await api.delete(`/tasks/${id}`)).data;
export const getUsers = async () => (await api.get('/users')).data;
