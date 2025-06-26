import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Target } from 'lucide-react';
import { kpiData, generateRealtimeData } from '../data/mockData';

const Dashboard = () => {
  const [realtimeData, setRealtimeData] = useState(generateRealtimeData());

  // Simular actualizaciones en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeData(generateRealtimeData());
    }, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const MetricCard = ({ title, value, change, icon: Icon, color = 'blue', isRealtime = false, realtimeValue }) => {
    const isPositive = change >= 0;
    const displayValue = isRealtime ? realtimeValue : value;
    
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className={`text-2xl font-bold text-gray-900 dark:text-white ${isRealtime ? 'transition-all duration-1000' : ''}`}>
              {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}
            </p>
            <div className="flex items-center mt-2 space-x-1">
              {isPositive ? (
                <TrendingUp size={16} className="text-green-500" />
              ) : (
                <TrendingDown size={16} className="text-red-500" />
              )}
              <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? '+' : ''}{change}%
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
          </div>
          <div className={`p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg`}>
            <Icon size={24} className={`text-${color}-600 dark:text-${color}-400`} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Live Data
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={`$${kpiData.totalRevenue.toLocaleString()}`}
          change={kpiData.revenueChange}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Active Users"
          value={kpiData.totalUsers}
          change={kpiData.usersChange}
          icon={Users}
          color="blue"
          isRealtime={true}
          realtimeValue={realtimeData.activeUsers}
        />
        <MetricCard
          title="Total Orders"
          value={kpiData.totalOrders}
          change={kpiData.ordersChange}
          icon={ShoppingCart}
          color="purple"
          isRealtime={true}
          realtimeValue={realtimeData.todayOrders}
        />
        <MetricCard
          title="Conversion Rate"
          value={`${kpiData.conversionRate}%`}
          change={kpiData.conversionChange}
          icon={Target}
          color="orange"
        />
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Server Status */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Server Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">CPU Usage</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{realtimeData.serverLoad}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${realtimeData.serverLoad}%` }}
              ></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">New user registered: alice@example.com</span>
              <span className="text-xs text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Order #1234 completed</span>
              <span className="text-xs text-gray-500">5 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Payment processed: $2,450</span>
              <span className="text-xs text-gray-500">12 min ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">New product added to inventory</span>
              <span className="text-xs text-gray-500">18 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;