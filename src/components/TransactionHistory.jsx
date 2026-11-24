import { recentTransactions } from '../data/dummyData';
import styles from './TransactionHistory.module.css';

const statusCfg = {
  completed: { label: 'Done',    cls: 'done'    },
  processing: { label: 'Pending', cls: 'pending' },
  cancelled:  { label: 'Delayed', cls: 'delayed' },
};

function TransactionHistory() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Transaction History</h3>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Order Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((t) => {
              const s = statusCfg[t.status];
              return (
                <tr key={t.id} className={styles.row}>
                  <td className={styles.name}>{t.customer}</td>
                  <td className={styles.product}>{t.productShort}</td>
                  <td className={styles.date}>{t.date}</td>
                  <td className={styles.amount}>{t.amount}</td>
                  <td className={styles.qty}>{t.qty} Items</td>
                  <td>
                    <span className={`${styles.badge} ${styles[s.cls]}`}>
                      {s.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
