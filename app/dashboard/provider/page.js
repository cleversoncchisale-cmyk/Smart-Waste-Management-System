import { DashboardNav, StatCard } from '@/components/dashboard-shell';

const requests = [
  { id: 'REQ-214', area: 'Lilongwe West', type: 'Household Waste', priority: 'High' },
  { id: 'REQ-215', area: 'Mzuzu Urban', type: 'Diapers', priority: 'Medium' },
  { id: 'REQ-216', area: 'Area 25', type: 'Recyclables', priority: 'Low' }
];

export default function ProviderDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="provider" />

        <main className="flex-1 space-y-6">
          <div className="rounded-2xl bg-[#0D9488] p-6 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Collection workspace</p>
            <h1 className="mt-2 text-3xl font-bold">Provider dashboard</h1>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="New requests" value="07" detail="Available to accept" accent="emerald" />
            <StatCard label="Assigned" value="12" detail="Active jobs" accent="teal" />
            <StatCard label="Completed" value="46" detail="Verified collections" accent="slate" />
            <StatCard label="Pending disposal" value="03" detail="Needs verification" accent="red" />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Available service requests</h2>
            <div className="mt-4 space-y-3">
              {requests.map((request) => (
                <div key={request.id} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{request.id}</p>
                    <p className="text-sm text-slate-500">{request.area} · {request.type}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">{request.priority}</span>
                    <button className="rounded-full bg-forest px-3 py-2 text-sm font-semibold text-white">Accept</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
