import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { productAnalysisData } from '../data/dummyData';
import styles from './ProductAnalysis.module.css';

const COLORS = ['#7c3aed', '#d4b8fd', '#06b6d4', '#e5e7eb'];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <span style={{ color: payload[0].payload.color }}>{payload[0].name}</span>
      <strong> {payload[0].value}%</strong>
    </div>
  );
};

function ProductAnalysis() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Product Analysis</h3>

      <div className={styles.chartWrap}>
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={productAnalysisData}
              cx="50%"
              cy="50%"
              innerRadius={42}
              outerRadius={72}
              paddingAngle={3}
              dataKey="value"
            >
              {productAnalysisData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className={styles.legend}>
        {productAnalysisData.map((item, i) => (
          <li key={item.name} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: COLORS[i] }} />
            <span className={styles.name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductAnalysis;
