import {
  LayoutDashboard, Package, ShoppingCart, Users,
  Warehouse, BarChart3, FileText, Settings,
  Zap, Sun, Moon, LogOut,
} from 'lucide-react';
import { navItems } from '../data/dummyData';
import styles from './Sidebar.module.css';

const iconMap = {
  LayoutDashboard, Package, ShoppingCart, Users,
  Warehouse, BarChart3, FileText, Settings,
};

const navGroups = [
  {
    label: 'Main Menu',
    items: ['dashboard', 'products', 'orders', 'customers'],
  },
  {
    label: 'Others',
    items: ['inventory', 'reports', 'invoices', 'settings'],
  },
];

function Sidebar({ activePage, onNavigate, collapsed, darkMode, onToggleDark }) {
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Zap size={16} />
        </div>
        {!collapsed && <span className={styles.logoText}>Nexa</span>}
      </div>

      {/* Nav groups */}
      <nav className={styles.nav}>
        {navGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            {!collapsed && (
              <span className={styles.groupLabel}>{group.label}</span>
            )}
            <ul className={styles.navList}>
              {group.items.map((id) => {
                const item = navItems.find((n) => n.id === id);
                if (!item) return null;
                const Icon = iconMap[item.icon];
                const isActive = activePage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                      onClick={() => onNavigate(item.id)}
                      title={collapsed ? item.label : undefined}
                    >
                      <span className={styles.navIcon}><Icon size={17} /></span>
                      {!collapsed && (
                        <span className={styles.navLabel}>{item.label}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      <div className={styles.bottom}>
        {/* Theme toggle */}
        <div className={`${styles.themeRow} ${collapsed ? styles.themeRowCollapsed : ''}`}>
          {!collapsed && (
            <div className={styles.themeLabel}>
              <Sun size={14} />
              <span>Theme</span>
            </div>
          )}
          <button
            className={`${styles.toggle} ${darkMode ? styles.toggleOn : ''}`}
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            <span className={styles.toggleThumb} />
          </button>
        </div>

        {/* Logout */}
        <button className={styles.logout} title={collapsed ? 'Log Out' : undefined}>
          <LogOut size={16} />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
