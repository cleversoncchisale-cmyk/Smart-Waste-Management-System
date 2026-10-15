import Link from 'next/link';
import { DashboardNav, StatCard } from '@/components/dashboard-shell';

const requests = [
  { id: 'COL-101', type: 'Household Waste', provider: 'GreenCycle', status: 'Accepted' },
  { id: 'COL-102', type: 'Disposable Diapers', provider: 'Awaiting assignment', status: 'Pending' },
  { id: 'COL-103', type: 'Recyclables', provider: 'WasteLink', status: 'Collected' }
];

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="customer" />

        <main className="flex-1 space-y-6">
          <div className="rounded-2xl bg-forest p-6 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Welcome back</p>
            <h1 className="mt-2 text-3xl font-bold">Customer dashboard</h1>
            <p className="mt-2 max-w-2xl text-white/80">Manage your waste collection bookings, monitor service updates, and report environmental issues.</p>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Active requests" value="04" detail="Bookings in progress" accent="emerald" />
            <StatCard label="Upcoming" value="02" detail="Scheduled collections" accent="teal" />
            <StatCard label="Completed" value="19" detail="Verified collections" accent="slate" />
            <StatCard label="Impact" value="2.4t" detail="Waste recorded" accent="emerald" />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Recent collection requests</h2>
                <p className="text-sm text-slate-500">Track the status of your bookings</p>
              </div>
              <Link href="/dashboard/customer/request" className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white">Request service</Link>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-slate-500">
                  <tr>
                    <th className="pb-3">Request ID</th>
                    <th className="pb-3">Waste type</th>
                    <th className="pb-3">Provider</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id} className="border-t border-slate-200">
                      <td className="py-3 font-medium text-slate-800">{request.id}</td>
                      <td className="py-3">{request.type}</td>
                      <td className="py-3">{request.provider}</td>
                      <td className="py-3">
                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{request.status}</span>
                      </td>
                      <td className="py-3"><a href="#" className="text-forest underline">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
