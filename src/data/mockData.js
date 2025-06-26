// Datos de ventas por mes
export const salesData = [
  { month: 'Jan', sales: 12500, users: 340, orders: 89 },
  { month: 'Feb', sales: 15200, users: 425, orders: 112 },
  { month: 'Mar', sales: 18700, users: 520, orders: 135 },
  { month: 'Apr', sales: 22300, users: 680, orders: 158 },
  { month: 'May', sales: 28900, users: 750, orders: 203 },
  { month: 'Jun', sales: 32100, users: 890, orders: 247 },
];

// Métricas principales
export const kpiData = {
  totalRevenue: 289500,
  totalUsers: 12450,
  totalOrders: 1834,
  conversionRate: 14.7,
  // Cambios vs mes anterior
  revenueChange: +12.5,
  usersChange: +8.2,
  ordersChange: +15.8,
  conversionChange: -2.1,
};

// Datos de usuarios por país
export const usersByCountry = [
  { country: 'United States', users: 4250, percentage: 34.1 },
  { country: 'United Kingdom', users: 2180, percentage: 17.5 },
  { country: 'Germany', users: 1890, percentage: 15.2 },
  { country: 'France', users: 1340, percentage: 10.8 },
  { country: 'Canada', users: 980, percentage: 7.9 },
  { country: 'Others', users: 1810, percentage: 14.5 },
];

// Productos más vendidos
export const topProducts = [
  { id: 1, name: 'Premium Dashboard', sales: 1240, revenue: 89500, change: +12.5 },
  { id: 2, name: 'Analytics Pro', sales: 980, revenue: 67200, change: +8.7 },
  { id: 3, name: 'Business Suite', sales: 720, revenue: 52800, change: -3.2 },
  { id: 4, name: 'Starter Pack', sales: 650, revenue: 31200, change: +15.8 },
  { id: 5, name: 'Enterprise', sales: 420, revenue: 84000, change: +22.1 },
];

// Usuarios recientes
export const recentUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Johnson&background=3b82f6&color=fff',
    joinDate: '2024-06-25',
    status: 'active'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Smith&background=10b981&color=fff',
    joinDate: '2024-06-24',
    status: 'active'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Carol+Davis&background=f59e0b&color=fff',
    joinDate: '2024-06-23',
    status: 'pending'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://ui-avatars.com/api/?name=David+Wilson&background=ef4444&color=fff',
    joinDate: '2024-06-22',
    status: 'inactive'
  },
];

// Datos de tiempo real (simulación)
export const generateRealtimeData = () => ({
  activeUsers: Math.floor(Math.random() * 100) + 200,
  currentRevenue: Math.floor(Math.random() * 5000) + 15000,
  todayOrders: Math.floor(Math.random() * 20) + 45,
  serverLoad: Math.floor(Math.random() * 30) + 60,
});