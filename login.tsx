import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 border p-6 rounded">
        <h1 className="text-xl font-semibold">Login</h1>
        <input className="w-full border p-2 rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className="w-full border p-2 rounded" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
        <button disabled={loading} className="w-full border p-2 rounded hover:bg-gray-100">
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </main>
  );
}
