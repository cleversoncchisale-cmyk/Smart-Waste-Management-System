import { DashboardNav } from '@/components/dashboard-shell';

const providers = [
  { name: 'GreenCycle', city: 'Lilongwe', status: 'Pending review', documents: 'Business registration, waste plan', owner: 'N. Moyo' },
  { name: 'WasteGuard', city: 'Mzuzu', status: 'Approved', documents: 'Vehicle and hygiene records', owner: 'T. Banda' },
  { name: 'EcoPickup', city: 'Lilongwe', status: 'Pending review', documents: 'Disposal arrangement proof', owner: 'J. Chirwa' }
];

export default function AdminProvidersPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="admin" />

        <main className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Providers</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Provider management</h1>
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <div key={provider.name} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{provider.name}</h3>
                  <p className="text-sm text-slate-500">{provider.city} · {provider.owner}</p>
                  <p className="mt-1 text-sm text-slate-500">{provider.documents}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">{provider.status}</span>
                  <button className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">Review</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
