import { availableProducts } from '../data/dummyData';
import styles from './AvailableProducts.module.css';

function AvailableProducts() {
  const totalStock = availableProducts.reduce((a, p) => a + p.available, 0);
  const totalSold  = availableProducts.reduce((a, p) => a + p.sold, 0);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Available Products</h3>

      <div className={styles.grid}>
        {availableProducts.map((p) => (
          <div key={p.id} className={styles.product}>
            <div className={styles.imgWrap} style={{ background: p.bg }}>
              <span className={styles.emoji}>{p.emoji}</span>
            </div>
            <p className={styles.name}>{p.name}</p>
            <p className={styles.meta}>{p.available} Availabe | {p.sold} Sold</p>
            <p className={styles.price}>${p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.footItem}>
          <span className={styles.footDot} style={{ background: '#7c3aed' }} />
          <span className={styles.footText}>Stock in warehouse : {totalStock.toLocaleString()} Stock</span>
        </div>
        <div className={styles.footItem}>
          <span className={styles.footDot} style={{ background: '#06b6d4' }} />
          <span className={styles.footText}>Stock sold : {totalSold.toLocaleString()} Stock</span>
        </div>
      </div>
    </div>
  );
}

export default AvailableProducts;
