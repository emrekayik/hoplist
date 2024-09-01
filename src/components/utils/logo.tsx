import { cn } from '@/lib/utils';

import { motion } from 'framer-motion';
import { ListTodo } from 'lucide-react';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'font-abril flex space-x-2 items-center text-xl py-1',
        className
      )}
    >
      <ListTodo className='h-5 w-6 flex-shrink-0' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-medium text-primary whitespace-pre'
      >
        HopList
      </motion.span>
    </div>
  );
};
export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex space-x-2 text-primary items-center text-sm py-1 relative z-20',
        className
      )}
    >
      <ListTodo className='h-5 w-6' />
    </div>
  );
};
