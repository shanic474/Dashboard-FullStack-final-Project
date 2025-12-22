import React from 'react';
import HealthScoreCard from './HealthScoreCard';

const HealthScoreSnapshot = ({ data }) => {
  const icons = {
    healthy: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    calories: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    protein: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    carb: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-light text-white mb-6 pb-2 border-b border-amber-500/20 tracking-wide uppercase">Health Score Snapshot</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <HealthScoreCard
          title="Healthy Meals"
          value={`${data.healthyMealsPercent}%`}
          subtitle='of meals marked "healthy"'
          icon={icons.healthy}
        />
        <HealthScoreCard
          title="Avg. Calories"
          value={data.avgCalories}
          subtitle="calories per meal"
          icon={icons.calories}
        />
        <HealthScoreCard
          title="Popular Protein"
          value={data.popularProtein}
          subtitle="most popular protein"
          icon={icons.protein}
        />
        <HealthScoreCard
          title="Popular Carb"
          value={data.popularCarb}
          subtitle="most popular carb"
          icon={icons.carb}
        />
      </div>
    </div>
  );
};

export default HealthScoreSnapshot;

