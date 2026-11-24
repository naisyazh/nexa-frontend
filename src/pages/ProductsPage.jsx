import { useState } from 'react';
import { Plus, Search, TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';
import { productList } from '../data/dummyData';
import styles from './ProductsPage.module.css';

const statusCfg = {
  active:    { label: 'Aktif',      cls: 'active'   },
  low_stock: { label: 'Stok Rendah', cls: 'low'     },
  out:       { label: 'Habis',       cls: 'out'     },
};

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = productList.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Products</h2>
          <p className={styles.pageSub}>{productList.length} total produk terdaftar</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={15} /> Tambah Produk
        </button>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Cari produk atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          {['all', 'active', 'low_stock', 'out'].map((f) => (
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

      {/* Table */}
      <div className={styles.card}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Produk</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>Terjual</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => {
                const s = statusCfg[p.status];
                return (
                  <tr key={p.id} className={styles.row}>
                    <td className={styles.num}>{i + 1}</td>
                    <td>
                      <div className={styles.productCell}>
                        <div className={styles.productIcon}>
                          {p.name.charAt(0)}
                        </div>
                        <span className={styles.productName}>{p.name}</span>
                      </div>
                    </td>
                    <td><span className={styles.category}>{p.category}</span></td>
                    <td className={styles.price}>{p.price}</td>
                    <td>
                      <span className={p.stock < 20 ? styles.stockLow : styles.stockOk}>
                        {p.stock === 0 ? '—' : p.stock}
                      </span>
                    </td>
                    <td className={styles.sold}>{p.sold}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[s.cls]}`}>{s.label}</span>
                    </td>
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
