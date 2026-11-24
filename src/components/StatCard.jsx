import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';
import styles from './StatCard.module.css';

function StatCard({ title, value, change, changeType, today }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.iconBox}>
          <span className={styles.iconInner} />
        </div>
        <button className={styles.more}><MoreHorizontal size={16} /></button>
      </div>
      <p className={styles.label}>{title}</p>
      <p className={styles.value}>{value}</p>
      <div className={styles.foot}>
        <span className={`${styles.badge} ${changeType === 'up' ? styles.up : styles.down}`}>
          {changeType === 'up'
            ? <TrendingUp size={11} />
            : <TrendingDown size={11} />}
          {change}
        </span>
        <span className={styles.today}>{today}</span>
      </div>
    </div>
  );
}

export default StatCard;
