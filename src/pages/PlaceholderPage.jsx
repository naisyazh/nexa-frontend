import { Warehouse, BarChart3, FileText, Settings, Construction } from 'lucide-react';
import styles from './PlaceholderPage.module.css';

const pageConfig = {
  inventory: { icon: Warehouse, color: '#f59e0b', title: 'Inventory',  desc: 'Kelola stok gudang, pantau barang masuk/keluar, dan atur reorder point otomatis.' },
  reports:   { icon: BarChart3,  color: '#ef4444', title: 'Reports',   desc: 'Laporan penjualan, keuangan, dan performa bisnis dalam grafik yang mudah dipahami.' },
  invoices:  { icon: FileText,   color: '#6366f1', title: 'Invoices',  desc: 'Buat dan kelola faktur untuk pelanggan Anda dengan template profesional.' },
  settings:  { icon: Settings,   color: '#6b7280', title: 'Settings',  desc: 'Konfigurasi akun, integrasi, notifikasi, dan preferensi aplikasi.' },
};

export default function PlaceholderPage({ page }) {
  const cfg = pageConfig[page] ?? pageConfig.settings;
  const Icon = cfg.icon;

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.iconWrap} style={{ background: `${cfg.color}18`, color: cfg.color }}>
          <Icon size={36} strokeWidth={1.5} />
        </div>
        <div className={styles.constructionIcon}>
          <Construction size={16} />
        </div>
        <h2 className={styles.title}>{cfg.title}</h2>
        <p className={styles.desc}>{cfg.desc}</p>
        <span className={styles.badge}>Segera hadir</span>
        <p className={styles.hint}>Halaman ini sedang dalam pengembangan aktif.</p>
      </div>
    </div>
  );
}
