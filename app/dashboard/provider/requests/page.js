import { DashboardNav } from '@/components/dashboard-shell';

const requests = [
  { id: 'REQ-310', type: 'Household Waste', area: 'Lilongwe West', payment: 'MWK 10,000', status: 'Available' },
  { id: 'REQ-311', type: 'Disposable Diapers', area: 'Mzuzu Urban', payment: 'MWK 12,500', status: 'Available' },
  { id: 'REQ-312', type: 'Recyclables', area: 'Area 25', payment: 'MWK 8,200', status: 'Assigned' }
];

export default function ProviderRequestsPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="provider" />

        <main className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Requests</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Available collection requests</h1>
          </div>

          <div className="space-y-3">
            {requests.map((request) => (
              <div key={request.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{request.id}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{request.type}</h3>
                  <p className="text-sm text-slate-500">{request.area}</p>
                </div>
                <div className="text-sm text-slate-600">
                  <p>{request.payment}</p>
                  <p className="mt-1 text-emerald-700">{request.status}</p>
                </div>
                <button className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white">Accept</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
