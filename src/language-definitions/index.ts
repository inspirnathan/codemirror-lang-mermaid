import { LRLanguage } from '@codemirror/language';
import { parseMixed } from '@lezer/common';
import { mermaidParser, mindmapParser, pieParser } from '../parsers';

export const mermaidLanguage = LRLanguage.define({
  name: 'mermaid',
  parser: mermaidParser.configure({
    wrap: parseMixed((node) => {
      if (node.name === 'MindmapDiagram') return { parser: mindmapParser };
      if (node.name === 'PieDiagram') return { parser: pieParser };
      return null;
    }),
  }),
});

export const mindmapLanguage = LRLanguage.define({
  name: 'mindmap',
  parser: mindmapParser,
});

export const pieLanguage = LRLanguage.define({
  name: 'pie',
  parser: pieParser,
});
