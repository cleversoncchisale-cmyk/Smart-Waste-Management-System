import Link from 'next/link';
import { DashboardNav } from '@/components/dashboard-shell';

const bookings = [
  { id: 'COL-201', type: 'Household Waste', date: '15 Oct', status: 'Accepted', provider: 'GreenCycle' },
  { id: 'COL-202', type: 'Diapers', date: '18 Oct', status: 'Awaiting Assignment', provider: 'Pending' },
  { id: 'COL-203', type: 'Recyclables', date: '22 Oct', status: 'Completed', provider: 'WasteLink' }
];

export default function CustomerBookingsPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="customer" />

        <main className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Tracking</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">My bookings</h1>
            </div>
            <Link href="/dashboard/customer/request" className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white">New request</Link>
          </div>

          <div className="space-y-3">
            {bookings.map((booking) => (
              <div key={booking.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{booking.id}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{booking.type}</h3>
                </div>

                <div className="text-sm text-slate-600">
                  <p>{booking.date}</p>
                  <p>{booking.provider}</p>
                </div>

                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{booking.status}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
