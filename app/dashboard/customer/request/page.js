import Link from 'next/link';
import { DashboardNav } from '@/components/dashboard-shell';

const categories = ['Household Waste', 'Disposable Diapers', 'Recyclables', 'Commercial Waste'];

export default function CustomerRequestPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardNav role="customer" />

        <main className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Booking</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Request waste collection</h1>
            </div>
            <Link href="/dashboard/customer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Back to dashboard</Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Waste type</label>
                <div className="grid gap-3 md:grid-cols-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                      <input type="radio" name="wasteType" className="h-4 w-4 text-forest" />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">City</label>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-700">
                    <option>Lilongwe</option>
                    <option>Mzuzu</option>
                    <option>Blantyre</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Area / neighborhood</label>
                  <input defaultValue="Area 25" className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Collection address</label>
                <input defaultValue="House no. 14, Mchesi Road" className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Preferred date</label>
                  <input type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Preferred time</label>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-700">
                    <option>Morning (8am – 12pm)</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 8pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Collection method</label>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                    <input type="radio" name="method" className="mr-2" />
                    Choose a provider
                  </label>
                  <label className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">
                    <input type="radio" name="method" className="mr-2" />
                    Find a collector for me
                  </label>
                </div>
              </div>

              <button type="submit" className="rounded-full bg-forest px-6 py-3 font-semibold text-white">Submit request</button>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">Summary</h3>

              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span>Estimated service fee</span>
                  <span className="font-semibold text-slate-900">MWK 10,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span>Service area</span>
                  <span className="font-semibold text-slate-900">Lilongwe</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span>Provider status</span>
                  <span className="font-semibold text-emerald-700">Approved</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Collection window</span>
                  <span className="font-semibold text-slate-900">Morning</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
