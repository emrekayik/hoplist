import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { Logo, LogoIcon } from '@/components/utils/logo';
import { cn } from '@/lib/utils';

import { Github } from 'lucide-react';
import React, { useState } from 'react';

export default function SidebarComponent({
  content,
  links,
}: {
  content: React.ReactNode;
  links: { label?: string; href?: string; icon?: React.ReactNode }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'rounded-md flex flex-col md:flex-row w-full flex-1 overflow-hidden',
        //'h-[60vh]' // for your use case, use `h-screen` instead of `h-[60vh]`
        'h-screen'
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10 border-r border-border'>
          <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-2'>
              {links.map((link, idx: number) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Github',
                href: 'https://github.com/emrekayik/hoplist',
                icon: <Github />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className='flex flex-1'>
        <div className='p-2 md:p-10 rounded-tl-2xl flex flex-col gap-2 flex-1 w-full h-full'>
          {content ? content : <ExampleDashboard />}
        </div>
      </div>
    </div>
  );
}

const ExampleDashboard = () => {
  return (
    <div className='flex flex-1'>
      <div className='p-2 md:p-10 rounded-tl-2xl flex flex-col gap-2 flex-1 w-full h-full'>
        <div className='flex gap-2'>
          {[...new Array(4)].map((i) => (
            <div
              key={'first-array' + i}
              className='h-20 w-full rounded-lg bg-secondary animate-pulse'
            ></div>
          ))}
        </div>
        <div className='flex gap-2 flex-1'>
          {[...new Array(2)].map((i) => (
            <div
              key={'second-array' + i}
              className='h-full w-full rounded-lg  bg-secondary animate-pulse'
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
