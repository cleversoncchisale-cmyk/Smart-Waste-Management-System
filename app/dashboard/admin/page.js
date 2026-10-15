import { DashboardNav, StatCard } from '@/components/dashboard-shell';

const metrics = [
  { label: 'Customers', value: '245', detail: 'Registered users' },
  { label: 'Providers', value: '08', detail: 'Approved partners' },
  { label: 'Requests', value: '15', detail: 'Pending collections' },
  { label: 'Reports', value: '18', detail: 'Dumping reports' }
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="admin" />

        <main className="flex-1 space-y-6">
          <div className="rounded-2xl bg-[#123D32] p-6 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Operations center</p>
            <h1 className="mt-2 text-3xl font-bold">Administrator dashboard</h1>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <StatCard key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} accent={metric.label === 'Reports' ? 'red' : 'emerald'} />
            ))}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Operations map</h2>
            <div className="mt-4 grid h-72 place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
              Map view for Lilongwe and Mzuzu service areas
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
