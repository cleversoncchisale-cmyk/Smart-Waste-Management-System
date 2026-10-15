const navItems = [
  { name: 'Overview', href: '/dashboard/customer' },
  { name: 'Request Collection', href: '/dashboard/customer/request' },
  { name: 'Find Collectors', href: '/dashboard/customer/collectors' },
  { name: 'My Bookings', href: '/dashboard/customer/bookings' },
  { name: 'Payments', href: '/dashboard/customer/payments' },
  { name: 'Report Dumping', href: '/dashboard/customer/report-dumping' }
];

export function DashboardNav({ role = 'customer' }) {
  const base = [
    { name: 'Overview', href: `/dashboard/${role}` },
    { name: 'Navigation', href: '#' }
  ];

  const roleItems = {
    customer: [
      { name: 'Request Collection', href: `/dashboard/customer/request` },
      { name: 'Find Collectors', href: `/dashboard/customer/collectors` },
      { name: 'My Bookings', href: `/dashboard/customer/bookings` },
      { name: 'Payments', href: `/dashboard/customer/payments` },
      { name: 'Report Dumping', href: `/dashboard/customer/report-dumping` }
    ],
    provider: [
      { name: 'Available Requests', href: `/dashboard/provider/requests` },
      { name: 'Assignments', href: `/dashboard/provider/assignments` },
      { name: 'Disposal Records', href: `/dashboard/provider/disposal` },
      { name: 'Earnings', href: `/dashboard/provider/earnings` }
    ],
    admin: [
      { name: 'Collection Requests', href: `/dashboard/admin/requests` },
      { name: 'Provider Management', href: `/dashboard/admin/providers` },
      { name: 'Disposal Verification', href: `/dashboard/admin/disposal` },
      { name: 'Dumping Reports', href: `/dashboard/admin/dumping` },
      { name: 'Analytics', href: `/dashboard/admin/analytics` }
    ]
  };

  return (
    <aside className="w-full max-w-[260px] rounded-2xl bg-[#123D32] p-4 text-white shadow-soft">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg font-bold">S</div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Platform</p>
          <h2 className="text-lg font-semibold">Smart Waste</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {[...base, ...roleItems[role]].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
              item.href === '#' ? 'text-white/60' : 'hover:bg-white/10'
            }`}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function StatCard({ label, value, detail, accent = 'emerald' }) {
  const colors = {
    emerald: 'bg-emerald-50 text-emerald-700',
    teal: 'bg-teal-50 text-teal-700',
    slate: 'bg-slate-100 text-slate-700',
    red: 'bg-red-50 text-red-700'
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-3 inline-flex rounded-full px-2 py-1 text-xs font-medium ${colors[accent]}`}>
        {label}
      </div>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </div>
  );
}

export const navItems = navItems;
