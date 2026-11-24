import { useState } from 'react';
import { Search, Download, MoreHorizontal } from 'lucide-react';
import { orderList } from '../data/dummyData';
import styles from './OrdersPage.module.css';

const statusCfg = {
  completed:  { label: 'Selesai',   cls: 'done'    },
  processing: { label: 'Diproses',  cls: 'pending' },
  cancelled:  { label: 'Dibatalkan',cls: 'delayed' },
};

const FILTERS = ['all', 'completed', 'processing', 'cancelled'];
const FILTER_LABELS = { all: 'Semua', completed: 'Selesai', processing: 'Diproses', cancelled: 'Dibatalkan' };

export default function OrdersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = orderList.filter((o) => {
    const matchSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || o.status === filter;
    return matchSearch && matchFilter;
  });

  const counts = {
    all: orderList.length,
    completed: orderList.filter((o) => o.status === 'completed').length,
    processing: orderList.filter((o) => o.status === 'processing').length,
    cancelled: orderList.filter((o) => o.status === 'cancelled').length,
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Orders</h2>
          <p className={styles.pageSub}>{orderList.length} total pesanan</p>
        </div>
        <button className={styles.exportBtn}>
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Stats strip */}
      <div className={styles.statsStrip}>
        {FILTERS.map((f) => (
          <div key={f} className={`${styles.statChip} ${filter === f ? styles.statActive : ''}`}
               onClick={() => setFilter(f)}>
            <span className={styles.statNum}>{counts[f]}</span>
            <span className={styles.statLabel}>{FILTER_LABELS[f]}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <Search size={14} className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          placeholder="Cari order ID, pelanggan, atau produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className={styles.card}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Pelanggan</th>
                <th>Produk</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => {
                const s = statusCfg[o.status];
                return (
                  <tr key={o.id} className={styles.row}>
                    <td><span className={styles.orderId}>{o.id}</span></td>
                    <td>
                      <div className={styles.customerCell}>
                        <div className={styles.avatar}>{o.avatar}</div>
                        <span className={styles.customerName}>{o.customer}</span>
                      </div>
                    </td>
                    <td className={styles.product}>{o.product}</td>
                    <td className={styles.qty}>{o.qty}x</td>
                    <td className={styles.total}>{o.total}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[s.cls]}`}>{s.label}</span>
                    </td>
                    <td className={styles.date}>{o.date}</td>
                    <td>
                      <button className={styles.moreBtn}><MoreHorizontal size={15} /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
