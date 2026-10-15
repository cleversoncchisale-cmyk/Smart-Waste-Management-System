import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-xl font-bold text-white">S</div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Login to Smart Waste</h1>
          <p className="mt-2 text-sm text-slate-500">Choose your role to continue</p>
        </div>

        <div className="space-y-3">
          <Link href="/dashboard/customer" className="block rounded-xl bg-forest px-4 py-3 text-center font-semibold text-white">Customer portal</Link>
          <Link href="/dashboard/provider" className="block rounded-xl bg-teal px-4 py-3 text-center font-semibold text-white">Provider portal</Link>
          <Link href="/dashboard/admin" className="block rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white">Administrator portal</Link>
        </div>
      </div>
    </main>
  );
}
