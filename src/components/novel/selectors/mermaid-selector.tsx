import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { SigmaIcon } from 'lucide-react';
import mermaid from 'mermaid';
import { useEditor } from 'novel';

export const MermaidSelector = () => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Button
      variant='ghost'
      size='sm'
      className='rounded-none w-12'
      onClick={(evt) => {
        // Editor aktifse Mermaid kodu ekleyip render ediyoruz
        const { from, to } = editor.state.selection;
        const mermaidCode = editor.state.doc.textBetween(from, to);

        if (mermaidCode) {
          const mermaidContainerId = `mermaid-${from}-${to}`;
          editor
            .chain()
            .focus()
            .insertContent(
              `<div id="${mermaidContainerId}" class="mermaid text-destructive">${mermaidCode}</div>`
            )
            .run();

          // Mermaid kodunu render et
          setTimeout(() => {
            mermaid.contentLoaded();
          }, 0);
        }
      }}
    >
      M
    </Button>
  );
};
