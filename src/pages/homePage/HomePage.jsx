import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import TodayOverview from './components/overview/TodayOverview';
import BestSellingIngredientsTable from './components/tables/BestSellingIngredientsTable';
import HealthScoreSnapshot from './components/healthScore/HealthScoreSnapshot';
import RecentOrdersTable from './components/tables/RecentOrdersTable';
import LowStockAlerts from './components/alerts/LowStockAlerts';
import QuickActions from './components/quickActions/QuickActions';

const HomePage = () => {
  // Mock data for demonstration
  const todayOverview = {
    totalOrders: 47,
    totalRevenue: 2840,
    totalMeals: 89,
    newUsers: 12
  };

  const bestSellingIngredients = [
    { name: 'Chicken Breast', timesUsed: 156, inventory: 45, avgRevenue: 12.50 },
    { name: 'Brown Rice', timesUsed: 142, inventory: 38, avgRevenue: 8.75 },
    { name: 'Salmon Fillet', timesUsed: 128, inventory: 22, avgRevenue: 15.20 },
    { name: 'Quinoa', timesUsed: 115, inventory: 31, avgRevenue: 9.30 },
    { name: 'Broccoli', timesUsed: 103, inventory: 52, avgRevenue: 6.40 }
  ];

  const healthScore = {
    healthyMealsPercent: 78,
    avgCalories: 485,
    popularProtein: 'Chicken',
    popularCarb: 'Brown Rice'
  };

  const recentOrders = [
    { id: 'ORD-2024-001', user: 'John Doe', total: 24.99, status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD-2024-002', user: 'Jane Smith', total: 32.50, status: 'Preparing', date: '2024-01-15' },
    { id: 'ORD-2024-003', user: 'Mike Johnson', total: 18.75, status: 'Pending', date: '2024-01-15' },
    { id: 'ORD-2024-004', user: 'Sarah Williams', total: 28.00, status: 'Preparing', date: '2024-01-15' },
    { id: 'ORD-2024-005', user: 'David Brown', total: 35.25, status: 'Delivered', date: '2024-01-14' }
  ];

  const lowStockAlerts = [
    { name: 'Salmon Fillet', current: 22, threshold: 30 },
    { name: 'Avocado', current: 15, threshold: 25 },
    { name: 'Greek Yogurt', current: 8, threshold: 20 },
    { name: 'Spinach', current: 12, threshold: 30 }
  ];

  return (
    <DashboardLayout>
      <TodayOverview data={todayOverview} />
      <BestSellingIngredientsTable data={bestSellingIngredients} />
      <HealthScoreSnapshot data={healthScore} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RecentOrdersTable data={recentOrders} />
        <LowStockAlerts data={lowStockAlerts} />
      </div>
      <QuickActions />
    </DashboardLayout>
  );
};

export default HomePage;

