"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('customer@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        throw signInError;
      }

      router.push('/dashboard/customer');
    } catch (err) {
      setError(err.message || 'Unable to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-xl font-bold text-white">S</div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Login to Smart Waste</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage collections and operations.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700 outline-none ring-0 focus:border-forest"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700 outline-none focus:border-forest"
              placeholder="••••••••"
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-forest px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400">Demo access</p>
          <div className="grid gap-2 sm:grid-cols-3">
            <a href="/dashboard/customer" className="rounded-xl bg-forest px-3 py-2 text-center text-sm font-semibold text-white">Customer</a>
            <a href="/dashboard/provider" className="rounded-xl bg-teal px-3 py-2 text-center text-sm font-semibold text-white">Provider</a>
            <a href="/dashboard/admin" className="rounded-xl bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white">Admin</a>
          </div>
        </div>
      </div>
    </main>
  );
}
