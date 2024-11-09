import type { Icons } from '@/components/icons';

type NavItem = {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Employee',
    url: '/employee',
    icon: 'user',
    shortcut: ['e', 'e'],
    isActive: false,
    items: [], // No child items
  },
  // {
  //   title: 'Product',
  //   url: '/product',
  //   icon: 'product',
  //   shortcut: ['p', 'p'],
  //   isActive: false,
  //   items: [], // No child items
  // },
  // {
  //   title: 'Account',
  //   url: '#', // Placeholder as there is no direct link for the parent
  //   icon: 'billing',
  //   isActive: true,
  //   items: [
  //     {
  //       title: 'Profile',
  //       url: '/profile',
  //       icon: 'userPen',
  //       shortcut: ['p', 'p'],
  //     },
  //     {
  //       title: 'Login',
  //       shortcut: ['l', 'l'],
  //       url: '/auth/login',
  //       icon: 'login',
  //     },
  //   ],
  // },
];
