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
  return (
    <main>
      <SidebarComponent content={children} />
    </main>
  );
}
