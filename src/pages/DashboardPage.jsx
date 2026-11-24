import { useState } from 'react';
import { Calendar, Filter, Share2 } from 'lucide-react';
import { statsData } from '../data/dummyData';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import ProductAnalysis from '../components/ProductAnalysis';
import AvailableProducts from '../components/AvailableProducts';
import TransactionHistory from '../components/TransactionHistory';
import SalesGoal from '../components/SalesGoal';
import styles from './DashboardPage.module.css';

const TABS = ['Overview', 'Notification', 'Trade History'];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className={styles.page}>
      {/* Sub-nav tabs + date toolbar */}
      <div className={styles.topBar}>
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.toolbar}>
          <button className={styles.toolBtn}>
            <Calendar size={13} />
            <span>21 Jan – 21 Feb 2026</span>
          </button>
          <button className={styles.toolBtn}>
            <Filter size={13} />
            <span>Filter</span>
          </button>
          <button className={styles.toolBtn}>
            <Share2 size={13} />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className={styles.statsGrid}>
        {statsData.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      {/* Row 2: Sales chart · Pie · Available products */}
      <div className={styles.row2}>
        <div className={styles.salesChartWrap}>
          <SalesChart />
        </div>
        <ProductAnalysis />
        <AvailableProducts />
      </div>

      {/* Row 3: Transaction table · Sales goal */}
      <div className={styles.row3}>
        <TransactionHistory />
        <SalesGoal />
      </div>
    </div>
  );
}
