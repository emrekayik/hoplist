import { Button } from '@/components/ui/button';

import { Magnet } from 'lucide-react';
import { EditorBubble, useEditor } from 'novel';
import { removeAIHighlight } from 'novel/extensions';
import 'novel/plugins';
import { Fragment, type ReactNode, useEffect } from 'react';

interface GenerativeMenuSwitchProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const GenerativeMenuSwitch = ({
  children,
  open,
  onOpenChange,
}: GenerativeMenuSwitchProps) => {
  const { editor } = useEditor();

  useEffect(() => {
    if (!open) removeAIHighlight(editor);
  }, [open]);
  return (
    <EditorBubble
      tippyOptions={{
        placement: open ? 'bottom-start' : 'top',
        onHidden: () => {
          onOpenChange(false);
          editor.chain().unsetHighlight().run();
        },
      }}
      className='flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl'
     pluginKey={}>
      {/*open && <AISelector open={open} onOpenChange={onOpenChange} />*/}
      {!open && (
        <Fragment>
          <Button
            className='gap-1 rounded-none text-purple-500'
            variant='ghost'
            onClick={() => onOpenChange(true)}
            size='sm'
          >
            <Magnet className='h-5 w-5' />
            Ask AI
          </Button>
          {children}
        </Fragment>
      )}
    </EditorBubble>
  );
};

export default GenerativeMenuSwitch;