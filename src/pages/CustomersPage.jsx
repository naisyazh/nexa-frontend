import { useState } from 'react';
import { Search, UserPlus, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { customerList } from '../data/dummyData';
import styles from './CustomersPage.module.css';

const statusCfg = {
  active:   { label: 'Aktif',   cls: 'active'   },
  inactive: { label: 'Nonaktif', cls: 'inactive' },
};

const avatarColors = [
  ['#7c3aed', '#a855f7'],
  ['#0ea5e9', '#38bdf8'],
  ['#10b981', '#34d399'],
  ['#f59e0b', '#fbbf24'],
  ['#ef4444', '#f87171'],
  ['#8b5cf6', '#c4b5fd'],
  ['#ec4899', '#f9a8d4'],
];

export default function CustomersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = customerList.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || c.status === filter;
    return matchSearch && matchFilter;
  });

  const totalSpent = customerList.reduce((acc, c) => {
    const num = parseInt(c.spent.replace(/\D/g, ''), 10);
    return acc + num;
  }, 0);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Customers</h2>
          <p className={styles.pageSub}>{customerList.length} pelanggan terdaftar</p>
        </div>
        <button className={styles.addBtn}>
          <UserPlus size={15} /> Tambah Pelanggan
        </button>
      </div>

      {/* Summary strip */}
      <div className={styles.summary}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryVal}>{customerList.length}</span>
          <span className={styles.summaryLabel}>Total Pelanggan</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryVal}>
            {customerList.filter((c) => c.status === 'active').length}
          </span>
          <span className={styles.summaryLabel}>Pelanggan Aktif</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryVal}>
            {customerList.reduce((a, c) => a + c.orders, 0)}
          </span>
          <span className={styles.summaryLabel}>Total Pesanan</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryVal}>
            Rp {(totalSpent / 1000000).toFixed(1)}Jt
          </span>
          <span className={styles.summaryLabel}>Total Pengeluaran</span>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Cari nama atau email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filterBtns}>
          {['all', 'active', 'inactive'].map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'Semua' : statusCfg[f]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Customer cards */}
      <div className={styles.grid}>
        {filtered.map((c, i) => {
          const [from, to] = avatarColors[i % avatarColors.length];
          const s = statusCfg[c.status];
          return (
            <div key={c.id} className={styles.customerCard}>
              <div className={styles.cardTop}>
                <div
                  className={styles.avatar}
                  style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                >
                  {c.avatar}
                </div>
                <div className={styles.nameBlock}>
                  <p className={styles.name}>{c.name}</p>
                  <span className={`${styles.statusBadge} ${styles[s.cls]}`}>{s.label}</span>
                </div>
                <button className={styles.moreBtn}><MoreHorizontal size={15} /></button>
              </div>

              <div className={styles.contactRow}>
                <Mail size={12} className={styles.contactIcon} />
                <span>{c.email}</span>
              </div>
              <div className={styles.contactRow}>
                <Phone size={12} className={styles.contactIcon} />
                <span>{c.phone}</span>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statVal}>{c.orders}</span>
                  <span className={styles.statLabel}>Pesanan</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statVal}>{c.spent}</span>
                  <span className={styles.statLabel}>Total Belanja</span>
                </div>
              </div>

              <p className={styles.joinDate}>Bergabung {c.joined}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
