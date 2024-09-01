'use client';

import Editor from '@/components/editor/editor';
import SidebarComponent from '@/components/global/sidebar';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { Logo, LogoIcon } from '@/components/utils/logo';
import { cn } from '@/lib/utils';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Brush,
  LayoutDashboard,
  NotebookPen,
  Settings,
  SquareCheck,
  Timer,
  User,
} from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  return <>sa</>;
}

function SidebarDemo() {
  const links = [
    {
      label: 'Dashboard',
      href: '#',
      icon: <LayoutDashboard className='text-primary h-5 w-5 flex-shrink-0' />,
    },
    {
      label: 'Profile',
      href: '#',
      icon: (
        <User className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: 'Settings',
      href: '#',
      icon: (
        <Settings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: 'Logout',
      href: '#',
      icon: (
        <ArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: 'Profile',
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden',
        'h-[60vh]' // for your use case, use `h-screen` instead of `h-[60vh]`
        //'h-screen'
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-2'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '#',
                icon: <User />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className='flex flex-1'>
      <div className='p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full'>
        <div className='flex gap-2'>
          {[...new Array(4)].map((i) => (
            <div
              key={'first-array' + i}
              className='h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse'
            ></div>
          ))}
        </div>
        <div className='flex gap-2 flex-1'>
          {[...new Array(2)].map((i) => (
            <div
              key={'second-array' + i}
              className='h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse'
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
/*
const EditorComponent = () => {
  const [data, setData] = useState();
  return (
    <>
      <Editor data={data} onChange={setData} holder='editorjs-container' />
    </>
  );
};
*/
