import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { usersByCountry } from '../../data/mockData';

const UsersChart = () => {
  const { isDark } = useTheme();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
          <p className="text-sm text-purple-600 dark:text-purple-400">
            Users: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {payload[0].payload.percentage}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Users by Country</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Geographic distribution</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {usersByCountry.reduce((acc, country) => acc + country.users, 0).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Users</p>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={usersByCountry} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? '#374151' : '#e5e7eb'}
            />
            <XAxis 
              dataKey="country" 
              tick={{ fill: isDark ? '#9ca3af' : '#6b7280', fontSize: 11 }}
              axisLine={{ stroke: isDark ? '#4b5563' : '#d1d5db' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fill: isDark ? '#9ca3af' : '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: isDark ? '#4b5563' : '#d1d5db' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="users" 
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersChart;