'use client';

import SidebarComponent from '@/components/global/sidebar';

import {
  Brush,
  LayoutDashboard,
  NotebookPen,
  SquareCheck,
  Timer,
  User,
} from 'lucide-react';
import React from 'react';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: 'Dashboard',
      href: '/app',
      icon: <LayoutDashboard className='text-primary h-5 w-5 flex-shrink-0' />,
    },
    {
      label: 'Draws',
      href: '/app/draws',
      icon: <Brush className='text-primary h-5 w-5 flex-shrink-0' />,
    },
    {
      label: 'Notes',
      href: '/app/notes',
      icon: <NotebookPen className='text-primary h-5 w-5 flex-shrink-0' />,
    },
    {
      label: 'To-do',
      href: '/app/todos',
      icon: <SquareCheck className='text-primary h-5 w-5 flex-shrink-0' />,
    },
    {
      label: 'Timer',
      href: '/app/timer',
      icon: <Timer />,
    },
    {
      label: 'Profile',
      href: '/app/profile',
      icon: <User />,
    },
  ];
  return (
    <main>
      <SidebarComponent links={links} content={children} />
    </main>
  );
}
