import Link from 'next/link';

const features = [
  {
    title: 'Waste collection booking',
    text: 'Customers can request collections, compare providers, and monitor progress in real time.'
  },
  {
    title: 'Provider coordination',
    text: 'Waste collectors can register, receive assignments, and submit disposal evidence.'
  },
  {
    title: 'Environmental monitoring',
    text: 'Authorities can manage dumping reports and track service delivery across communities.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-lg font-bold text-white">S</div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Malawi</p>
              <h1 className="text-lg font-bold text-forest">Smart Waste</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#services">Services</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#partners">Partners</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Login</Link>
            <Link href="/dashboard/customer" className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white shadow-soft">Get started</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-mint px-3 py-1 text-sm font-medium text-emerald-700">
              Cleaner communities start with smarter waste management
            </div>
            <h2 className="max-w-xl text-4xl font-black tracking-tight text-forest sm:text-5xl">
              Smarter waste management for cleaner, healthier communities.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Connect households, businesses, and local waste collectors through one platform that manages requests, verifies disposal, and monitors environmental impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard/customer" className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-emerald-700">Request collection</Link>
              <Link href="/login" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">Become a partner</Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
              <div><span className="block text-2xl font-black text-forest">24/7</span> service visibility</div>
              <div><span className="block text-2xl font-black text-forest">3+</span> service categories</div>
              <div><span className="block text-2xl font-black text-forest">100%</span> digital tracking</div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-forest to-teal p-8 text-white shadow-soft">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-white/70">Operations</span>
                <span className="rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">Live</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/70">Pending requests</p>
                  <p className="mt-2 text-3xl font-black">18</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/70">Collection providers</p>
                  <p className="mt-2 text-3xl font-black">08</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/70">Waste verified</p>
                  <p className="mt-2 text-3xl font-black">1.4t</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Our services</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900">Built for a practical waste ecosystem</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-xl text-emerald-700">✓</div>
                <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                <p className="mt-3 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {['Customer requests a collection', 'Approved provider accepts the job', 'Waste is recorded and verified'].map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">0{index + 1}</div>
              <p className="text-lg font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
