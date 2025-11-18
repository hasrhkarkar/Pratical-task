import React from 'react'
import './Stats.scss'

type Stat = {
  id: number
  value: string
  label: string
}

const statsData: Stat[] = [
  { id: 1, value: '50+', label: 'Teachers' },
  { id: 2, value: '500+', label: 'Students' },
  { id: 3, value: '20+', label: 'Workers' },
  { id: 4, value: '5+', label: 'Awards' },
]

const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((s) => (
          <div className="stat-card" key={s.id}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
