import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage  from './pages/DashboardPage';
import ProductsPage   from './pages/ProductsPage';
import OrdersPage     from './pages/OrdersPage';
import CustomersPage  from './pages/CustomersPage';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

const PAGE_LABELS = {
  dashboard: 'Dashboard',
  products:  'Products',
  orders:    'Orders',
  customers: 'Customers',
  inventory: 'Inventory',
  reports:   'Reports',
  invoices:  'Invoices',
  settings:  'Settings',
};

function renderPage(page) {
  switch (page) {
    case 'dashboard': return <DashboardPage />;
    case 'products':  return <ProductsPage />;
    case 'orders':    return <OrdersPage />;
    case 'customers': return <CustomersPage />;
    default:          return <PlaceholderPage page={page} />;
  }
}

export default function App() {
  const [page,      setPage]      = useState('dashboard');
  const [darkMode,  setDarkMode]  = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  function toggleDark() {
    const next = !darkMode;
    setDarkMode(next);
    // Apply to <html> so CSS vars in html.dark scope take effect globally
    document.documentElement.classList.toggle('dark', next);
  }

  return (
    <div className="appLayout">
      <Sidebar
        activePage={page}
        onNavigate={setPage}
        collapsed={collapsed}
        darkMode={darkMode}
        onToggleDark={toggleDark}
      />

      <div className="mainArea">
        <Header
          title={PAGE_LABELS[page]}
          sidebarCollapsed={collapsed}
          onToggleSidebar={() => setCollapsed((v) => !v)}
        />
        <main className="content">
          {renderPage(page)}
        </main>
      </div>
    </div>
  );
}
