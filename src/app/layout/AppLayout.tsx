import { NavLink, Outlet } from 'react-router-dom';

// Kunder arrives in ticket 04, Pakker in ticket 06. Links are added when the
// pages behind them exist, not before.
const links = [{ to: '/bookinger', label: 'Bookinger' }];

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-4 px-4 py-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
