import {
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';
import { salesGoalData } from '../data/dummyData';
import styles from './SalesGoal.module.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <p className={styles.ttLabel}>{label}</p>
      <p className={styles.ttVal}>${payload[0].value.toLocaleString()}</p>
    </div>
  );
};

function SalesGoal() {
  const goal = 51698;
  const current = 25849;
  const pct = Math.round((current / goal) * 100);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Sales Goal</h3>
      <p className={styles.pct}>{pct}%</p>

      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={salesGoalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="goalGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#7c3aed" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="goalGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#c4b5fd" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#c4b5fd" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="period"
            tick={{ fontSize: 10, fill: 'var(--tx-xs)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x="21 - 30 Jan"
            stroke="#7c3aed"
            strokeDasharray="4 4"
            label={{ value: `$${current.toLocaleString()}`, fill: '#7c3aed', fontSize: 11, fontWeight: 700 }}
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#c4b5fd"
            strokeWidth={2}
            fill="url(#goalGrad2)"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#7c3aed"
            strokeWidth={2.5}
            fill="url(#goalGrad1)"
            dot={false}
            activeDot={{ r: 5, fill: '#7c3aed', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesGoal;
