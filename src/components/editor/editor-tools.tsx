import MarkerTool from '@/components/editor/marker-tool';
import SimpleTextTool from '@/components/editor/simple-text-tool';

import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import MermaidTool from 'editorjs-mermaid';

export const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    config: {
      placeholder: 'Enter a header',
      levels: [2, 3, 4],
      defaultLevel: 3,
    },
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
  //
  marker: MarkerTool,
  mermaid: MermaidTool,
  simpletext: SimpleTextTool,
};
