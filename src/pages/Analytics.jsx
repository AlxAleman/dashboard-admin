import SalesChart from '../components/charts/SalesChart';
import UsersChart from '../components/charts/UsersChart';
import ProductsChart from '../components/charts/ProductsChart';
import { BarChart3, TrendingUp, Users, Package } from 'lucide-react';

const Analytics = () => {
  const summaryCards = [
    {
      title: 'Revenue Growth',
      value: '+23.5%',
      description: 'vs last quarter',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'User Acquisition',
      value: '+15.2%',
      description: 'new users this month',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Product Performance',
      value: '4.8/5',
      description: 'average rating',
      icon: Package,
      color: 'purple'
    },
    {
      title: 'Analytics Score',
      value: '94%',
      description: 'data quality',
      icon: BarChart3,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Comprehensive insights into your business performance and trends.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            Export Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{card.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{card.description}</p>
                </div>
                <div className={`p-3 bg-${card.color}-100 dark:bg-${card.color}-900/30 rounded-lg`}>
                  <Icon size={24} className={`text-${card.color}-600 dark:text-${card.color}-400`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Sales Chart - spans full width on smaller screens */}
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        
        {/* Users and Products charts side by side on larger screens */}
        <UsersChart />
        <ProductsChart />
      </div>

      {/* Additional insights */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Growing Revenue</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Revenue has increased consistently over the last 6 months with a strong upward trend.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">User Expansion</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Strong user growth in international markets, especially in Europe and North America.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Package className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Product Success</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Premium products are performing exceptionally well, driving higher revenue per user.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;