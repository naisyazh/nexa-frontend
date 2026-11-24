import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { notifications } from '../data/dummyData';
import styles from './Header.module.css';

function Header({ title, sidebarCollapsed, onToggleSidebar }) {
  const [showNotif, setShowNotif] = useState(false);
  const [notifList, setNotifList] = useState(notifications);
  const notifRef = useRef(null);
  const unread = notifList.filter((n) => !n.read).length;

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotif(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className={styles.header}>
      {/* Left: collapse + title */}
      <div className={styles.left}>
        <button
          className={styles.collapseBtn}
          onClick={onToggleSidebar}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed
            ? <PanelLeftOpen size={18} />
            : <PanelLeftClose size={18} />}
        </button>
        <h1 className={styles.title}>{title}</h1>
      </div>

      {/* Right: search + icons + avatar */}
      <div className={styles.right}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>

        {/* Bell */}
        <div className={styles.notifWrap} ref={notifRef}>
          <button className={styles.iconBtn} onClick={() => setShowNotif((v) => !v)}>
            <Bell size={17} />
            {unread > 0 && <span className={styles.badge}>{unread}</span>}
          </button>

          {showNotif && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHead}>
                <span>Notifikasi</span>
                <button
                  className={styles.markAll}
                  onClick={() => setNotifList((p) => p.map((n) => ({ ...n, read: true })))}
                >
                  Tandai semua dibaca
                </button>
              </div>
              <ul>
                {notifList.map((n) => (
                  <li key={n.id} className={`${styles.notifItem} ${!n.read ? styles.unread : ''}`}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.notifText}>{n.text}</p>
                      <span className={styles.notifTime}>{n.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Settings */}
        <button className={styles.iconBtn}>
          <Settings size={17} />
        </button>

        {/* Avatar */}
        <div className={styles.avatar}>AW</div>
      </div>
    </header>
  );
}

export default Header;
