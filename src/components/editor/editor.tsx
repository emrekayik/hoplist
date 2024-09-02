'use client';

import EditorJS, { OutputData } from '@editorjs/editorjs';
import MermaidTool from 'editorjs-mermaid';
import React, { useEffect, useRef } from 'react';

import { EDITOR_TOOLS } from './editor-tools';

export default function Editor({ data, onChange, holder }) {
  //add a reference to editor
  const ref = useRef();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        autofocus: true,
        placeholder: 'Start writing your content...',
        holder: holder,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
        async onReady() {
          MermaidTool.config({ theme: 'neutral' });
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, holder, onChange]);

  return <div id={holder} className='prose max-w-full text-primary' />;
}
