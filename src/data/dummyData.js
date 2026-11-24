/* ── Stat cards ────────────────────────────────────── */
export const statsData = [
  {
    id: 1,
    title: 'Gross Sales',
    value: 'Rp 128.450.000',
    change: '+29%',
    changeType: 'up',
    today: '+1.98K today',
  },
  {
    id: 2,
    title: 'Average Sales',
    value: 'Rp 18.605.000',
    change: '+34%',
    changeType: 'up',
    today: '+1.62K today',
  },
  {
    id: 3,
    title: 'New Sales',
    value: 'Rp 11.294.000',
    change: '+18%',
    changeType: 'up',
    today: '+0.90K today',
  },
  {
    id: 4,
    title: 'Gross Profits',
    value: 'Rp 7.540.000',
    change: '-10%',
    changeType: 'down',
    today: '-0.4K today',
  },
];

/* ── Dual-line sales chart ─────────────────────────── */
export const salesChartData = [
  { month: 'JAN', weekly: 4, monthly: 6  },
  { month: 'FEB', weekly: 7, monthly: 5  },
  { month: 'MAR', weekly: 5, monthly: 8  },
  { month: 'APR', weekly: 10, monthly: 6 },
  { month: 'MAY', weekly: 8, monthly: 9  },
  { month: 'JUN', weekly: 6, monthly: 7  },
];

/* ── Product analysis (pie) ────────────────────────── */
export const productAnalysisData = [
  { name: 'Chair',      value: 35 },
  { name: 'Table',      value: 25 },
  { name: 'Fake Plant', value: 22 },
  { name: 'TV',         value: 18 },
];

/* ── Available products ────────────────────────────── */
export const availableProducts = [
  {
    id: 1,
    name: 'Table',
    available: 130,
    sold: 75,
    price: 110.50,
    emoji: '🪑',
    bg: '#f5f0ff',
  },
  {
    id: 2,
    name: 'Chair',
    available: 489,
    sold: 98,
    price: 99.00,
    emoji: '🛋️',
    bg: '#f0f9ff',
  },
  {
    id: 3,
    name: 'Fake Plant',
    available: 1290,
    sold: 110,
    price: 80.10,
    emoji: '🌿',
    bg: '#f0fdf4',
  },
];

/* ── Transaction history ───────────────────────────── */
export const recentTransactions = [
  {
    id: 'TRX-001',
    customer: 'Budi Santoso',
    productShort: 'Laptop',
    product: 'Laptop Asus VivoBook',
    amount: 'Rp 7.500.000',
    qty: 1,
    status: 'completed',
    date: '24 Nov 2026',
    avatar: 'BS',
  },
  {
    id: 'TRX-002',
    customer: 'Sari Dewi',
    productShort: 'Smartphone',
    product: 'Samsung Galaxy S24',
    amount: 'Rp 12.300.000',
    qty: 1,
    status: 'processing',
    date: '24 Nov 2026',
    avatar: 'SD',
  },
  {
    id: 'TRX-003',
    customer: 'Ahmad Fauzi',
    productShort: 'Headphone',
    product: 'Sony WH-1000XM5',
    amount: 'Rp 4.200.000',
    qty: 2,
    status: 'completed',
    date: '23 Nov 2026',
    avatar: 'AF',
  },
  {
    id: 'TRX-004',
    customer: 'Rina Kusuma',
    productShort: 'Tablet',
    product: 'iPad Pro 11"',
    amount: 'Rp 15.700.000',
    qty: 4,
    status: 'cancelled',
    date: '23 Nov 2026',
    avatar: 'RK',
  },
  {
    id: 'TRX-005',
    customer: 'Doni Prasetyo',
    productShort: 'Keyboard',
    product: 'Keychron K2',
    amount: 'Rp 1.850.000',
    qty: 1,
    status: 'completed',
    date: '22 Nov 2026',
    avatar: 'DP',
  },
];

/* ── Sales goal chart ──────────────────────────────── */
export const salesGoalData = [
  { period: '1 - 10 Jan',  actual: 8000,  target: 12000 },
  { period: '11 - 20 Jan', actual: 15000, target: 20000 },
  { period: '21 - 30 Jan', actual: 25849, target: 32000 },
  { period: '1 - 10 Feb',  actual: 20000, target: 40000 },
];

/* ── Sidebar nav ───────────────────────────────────── */
export const navItems = [
  { id: 'dashboard',  label: 'Dashboard',  icon: 'LayoutDashboard' },
  { id: 'products',   label: 'Products',   icon: 'Package'          },
  { id: 'orders',     label: 'Orders',     icon: 'ShoppingCart'     },
  { id: 'customers',  label: 'Customers',  icon: 'Users'            },
  { id: 'inventory',  label: 'Inventory',  icon: 'Warehouse'        },
  { id: 'reports',    label: 'Reports',    icon: 'BarChart3'        },
  { id: 'invoices',   label: 'Invoices',   icon: 'FileText'         },
  { id: 'settings',   label: 'Settings',   icon: 'Settings'         },
];

/* ── Notifications ─────────────────────────────────── */
export const notifications = [
  { id: 1, text: 'Pesanan baru dari Budi Santoso',       time: '5 menit lalu',  read: false },
  { id: 2, text: 'Stok Monitor LG hampir habis (11 unit)', time: '1 jam lalu',  read: false },
  { id: 3, text: 'Pembayaran TRX-004 dibatalkan',        time: '3 jam lalu',    read: true  },
  { id: 4, text: 'Laporan bulanan Oktober siap diunduh', time: '1 hari lalu',   read: true  },
];

/* ── Top products (for other pages) ───────────────── */
export const topProducts = [
  { id: 1, name: 'Samsung Galaxy S24',       category: 'Smartphone', sold: 248, revenue: 'Rp 55.200.000', stock: 42,  trend: 'up'   },
  { id: 2, name: 'Laptop Asus VivoBook',      category: 'Laptop',     sold: 183, revenue: 'Rp 48.750.000', stock: 17,  trend: 'up'   },
  { id: 3, name: 'iPad Pro 11"',              category: 'Tablet',     sold: 156, revenue: 'Rp 41.600.000', stock: 28,  trend: 'up'   },
  { id: 4, name: 'Sony WH-1000XM5',           category: 'Audio',      sold: 134, revenue: 'Rp 25.200.000', stock: 65,  trend: 'down' },
  { id: 5, name: 'Monitor LG 27" 4K',         category: 'Monitor',    sold: 98,  revenue: 'Rp 22.400.000', stock: 11,  trend: 'up'   },
];

/* ── Customer list ─────────────────────────────────── */
export const customerList = [
  { id: 1, name: 'Budi Santoso',   email: 'budi@email.com',  phone: '081234567890', orders: 12, spent: 'Rp 48.200.000',  status: 'active',   joined: '12 Jan 2026', avatar: 'BS' },
  { id: 2, name: 'Sari Dewi',      email: 'sari@email.com',  phone: '081298765432', orders: 8,  spent: 'Rp 32.500.000',  status: 'active',   joined: '5 Mar 2026',  avatar: 'SD' },
  { id: 3, name: 'Ahmad Fauzi',    email: 'ahmad@email.com', phone: '081345678901', orders: 5,  spent: 'Rp 18.750.000',  status: 'inactive', joined: '20 Apr 2026', avatar: 'AF' },
  { id: 4, name: 'Rina Kusuma',    email: 'rina@email.com',  phone: '081456789012', orders: 15, spent: 'Rp 71.300.000',  status: 'active',   joined: '8 Feb 2026',  avatar: 'RK' },
  { id: 5, name: 'Doni Prasetyo',  email: 'doni@email.com',  phone: '081567890123', orders: 3,  spent: 'Rp 9.400.000',   status: 'active',   joined: '14 Jun 2026', avatar: 'DP' },
  { id: 6, name: 'Maya Putri',     email: 'maya@email.com',  phone: '081678901234', orders: 20, spent: 'Rp 95.600.000',  status: 'active',   joined: '1 Jan 2026',  avatar: 'MP' },
  { id: 7, name: 'Hendra Wijaya',  email: 'hendra@email.com',phone: '081789012345', orders: 7,  spent: 'Rp 27.800.000',  status: 'inactive', joined: '22 May 2026', avatar: 'HW' },
];

/* ── Order list ────────────────────────────────────── */
export const orderList = [
  { id: 'ORD-1041', customer: 'Budi Santoso',  product: 'Laptop Asus VivoBook',    qty: 1, total: 'Rp 7.500.000',  status: 'completed',  date: '24 Nov 2026', avatar: 'BS' },
  { id: 'ORD-1040', customer: 'Sari Dewi',     product: 'Samsung Galaxy S24',       qty: 1, total: 'Rp 12.300.000', status: 'processing', date: '24 Nov 2026', avatar: 'SD' },
  { id: 'ORD-1039', customer: 'Ahmad Fauzi',   product: 'Sony WH-1000XM5',          qty: 2, total: 'Rp 8.400.000',  status: 'completed',  date: '23 Nov 2026', avatar: 'AF' },
  { id: 'ORD-1038', customer: 'Rina Kusuma',   product: 'iPad Pro 11"',             qty: 1, total: 'Rp 15.700.000', status: 'cancelled',  date: '23 Nov 2026', avatar: 'RK' },
  { id: 'ORD-1037', customer: 'Doni Prasetyo', product: 'Keychron K2',              qty: 1, total: 'Rp 1.850.000',  status: 'completed',  date: '22 Nov 2026', avatar: 'DP' },
  { id: 'ORD-1036', customer: 'Maya Putri',    product: 'Monitor LG 27" 4K',        qty: 2, total: 'Rp 12.800.000', status: 'processing', date: '22 Nov 2026', avatar: 'MP' },
  { id: 'ORD-1035', customer: 'Hendra Wijaya', product: 'Wireless Mouse Logitech',  qty: 3, total: 'Rp 2.760.000',  status: 'completed',  date: '21 Nov 2026', avatar: 'HW' },
  { id: 'ORD-1034', customer: 'Budi Santoso',  product: 'Mechanical Keyboard',      qty: 1, total: 'Rp 1.850.000',  status: 'processing', date: '21 Nov 2026', avatar: 'BS' },
];

/* ── Product list (full) ───────────────────────────── */
export const productList = [
  { id: 1, name: 'Samsung Galaxy S24',     category: 'Smartphone', price: 'Rp 12.300.000', stock: 42,  sold: 248, status: 'active'   },
  { id: 2, name: 'Laptop Asus VivoBook',   category: 'Laptop',     price: 'Rp 7.500.000',  stock: 17,  sold: 183, status: 'active'   },
  { id: 3, name: 'iPad Pro 11"',           category: 'Tablet',     price: 'Rp 15.700.000', stock: 28,  sold: 156, status: 'active'   },
  { id: 4, name: 'Sony WH-1000XM5',        category: 'Audio',      price: 'Rp 4.200.000',  stock: 65,  sold: 134, status: 'active'   },
  { id: 5, name: 'Monitor LG 27" 4K',      category: 'Monitor',    price: 'Rp 6.400.000',  stock: 11,  sold: 98,  status: 'low_stock'},
  { id: 6, name: 'Keychron K2',            category: 'Keyboard',   price: 'Rp 1.850.000',  stock: 93,  sold: 72,  status: 'active'   },
  { id: 7, name: 'Logitech MX Master 3',   category: 'Mouse',      price: 'Rp 920.000',    stock: 0,   sold: 215, status: 'out'      },
  { id: 8, name: 'AirPods Pro 2nd Gen',    category: 'Audio',      price: 'Rp 3.800.000',  stock: 34,  sold: 89,  status: 'active'   },
];
