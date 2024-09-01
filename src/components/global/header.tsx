'use client';

import { Button } from '@/components/ui/button';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { Cover } from '@/components/ui/cover';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { Logo } from '@/components/utils/logo';

import { motion } from 'framer-motion';
import { Check, CircleCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='flex min-h-screen max-w-2xl mx-auto flex-1 flex-col items-center justify-center'>
      <h1 className='mt-36'>
        <Logo className='text-4xl' />
      </h1>
      <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-primary'>
        your most <Cover>effective</Cover> <br />
        note-taking app
      </h1>
      <Link href='/app'>
        <Button>Go To App</Button>
      </Link>
      {/*
      <div className='mt-20'>
        <CardSpotlight className='h-96 w-96'>
          <p className='text-xl font-bold relative z-20 mt-2 text-white'>
            Features
          </p>
          <div className='text-primary mt-4 relative z-20'>
            <ul className='list-none  mt-2 space-y-2'>
              <Step title='simple and minimal note taking' />
              <Step title='' />
            </ul>
          </div>
          <p className='text-primary mt-4 relative z-20 text-sm'>test</p>
        </CardSpotlight>
      </div>
      */}
      <div className='mt-20'>
        <h1 className='text-2xl font-bold text-primary'>Features</h1>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className='flex gap-2 items-start'>
      <CircleCheck />
      <p className='text-white'>{title}</p>
    </li>
  );
};

const content = [
  {
    title: 'Rich Text Editor',
    description:
      'Novel and Tiptap is integrated, allowing users to format text richly, add media, and more in their notes.',
    content: (
      <div className='h-full w-full gradient-2 flex items-center justify-center'>
        Novel and Tiptap
      </div>
    ),
  },
  {
    title: 'Drawing Tool',
    description:
      'Excalidraw integration allows users to add hand-drawn sketches to their notes.',
    content: (
      <div className='h-full w-full gradient-1 flex items-center justify-center'>
        Excalidraw
      </div>
    ),
  },
  {
    title: 'Database',
    description:
      'The application uses IndexedDB for persistent data storage. Dexie.js simplifies this process.',
    content: (
      <div className='h-full w-full gradient-1 flex items-center justify-center'>
        Dexie.js
      </div>
    ),
  },
  {
    title: 'Note Management',
    description: 'Features for organizing, grouping, and tagging notes.',
    content: (
      <div className='h-full w-full gradient-2 flex items-center justify-center'>
        shadcn/ui
      </div>
    ),
  },
  {
    title: 'Search and Filtering',
    description: 'Easily search and filter through notes with Algolia.',
    content: (
      <div className='h-full w-full gradient-1 flex items-center justify-center'>
        Algolia
      </div>
    ),
  },
  {
    title: 'Theme Support',
    description: 'Dark mode and customizable themes with next-theme.',
    content: (
      <div className='h-full w-full gradient-2 flex items-center justify-center'>
        next-theme
      </div>
    ),
  },
];

/*
[
  {
    "title": "Database",
    "description": "The application uses IndexedDB for persistent data storage. Dexie.js simplifies this process.",
    "content": "Dexie.js allows for fast and easy data operations on IndexedDB. Users can store their notes, drawings, and other content locally."
  },
  {
    "title": "Rich Text Editor",
    "description": "Editor.js is integrated, allowing users to format text richly, add media, and more in their notes.",
    "content": "Editor.js is a block-based editor that lets users add various content types such as text, headers, lists, and more."
  },
  {
    "title": "Drawing Tool",
    "description": "Excalidraw integration allows users to add hand-drawn sketches to their notes.",
    "content": "Excalidraw enables users to create simple shapes, diagrams, and hand-drawn illustrations, making note-taking more visual and interactive."
  },
  {
    "title": "Note Management",
    "description": "Features for organizing, grouping, and tagging notes.",
    "content": "Users can organize, filter, and search their notes under folders or tags."
  },
  {
    "title": "Search and Filtering",
    "description": "Easily search and filter through notes.",
    "content": "Users can quickly find their notes based on specific keywords or tags."
  },
  {
    "title": "Synchronization and Backup",
    "description": "Cloud support for synchronizing and backing up data.",
    "content": "Users can synchronize their notes with a cloud-based service, allowing access across different devices and providing data backup."
  },
  {
    "title": "Theme Support",
    "description": "Dark mode and customizable themes.",
    "content": "The application allows users to switch between different themes or create their own custom themes."
  }
]
*/
