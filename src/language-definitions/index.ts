import { LRLanguage } from '@codemirror/language';
import { parseMixed } from '@lezer/common';
import {
  mermaidParser,
  mindmapParser,
  pieParser,
  flowchartParser,
} from '../parsers';

export const mermaidLanguage = LRLanguage.define({
  name: 'mermaid',
  parser: mermaidParser.configure({
    wrap: parseMixed((node) => {
      if (node.name === 'MindmapDiagram') return { parser: mindmapParser };
      if (node.name === 'PieDiagram') return { parser: pieParser };
      if (node.name === 'FlowchartDiagram') return { parser: flowchartParser };
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

export const flowchartLanguage = LRLanguage.define({
  name: 'flowchart',
  parser: flowchartParser,
});
