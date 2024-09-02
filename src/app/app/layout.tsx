'use client';

import SidebarComponent from '@/components/global/sidebar';
import Transition from '@/components/global/transition';

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
  return (
    <Transition>
      <SidebarComponent content={children} />
    </Transition>
  );
}
