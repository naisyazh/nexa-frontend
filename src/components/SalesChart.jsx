import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { salesChartData } from '../data/dummyData';
import styles from './SalesChart.module.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <p className={styles.ttLabel}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className={styles.ttRow}>
          <span style={{ color: entry.stroke }}>{entry.name}</span>
          <strong style={{ color: entry.stroke }}>
            ${(entry.value / 1000).toFixed(1)}k
          </strong>
        </p>
      ))}
    </div>
  );
};

function SalesChart() {
  const [period, setPeriod] = useState('Month');

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Sales analysis</h3>
        <button className={styles.periodBtn}>
          {period} <ChevronDown size={13} />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={salesChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: 'var(--tx-xs)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: 'var(--tx-xs)' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => v}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="weekly"
            name="Weekly"
            stroke="#7c3aed"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: '#7c3aed', strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="monthly"
            name="Monthly"
            stroke="#06b6d4"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: '#06b6d4', strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#7c3aed' }} /> Weekly
        </span>
        <span className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#06b6d4' }} /> Month
        </span>
      </div>
    </div>
  );
}

export default SalesChart;
