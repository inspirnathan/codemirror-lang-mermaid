import { LanguageDescription } from '@codemirror/language';
import { mermaid, mindmap, pie, flowchart } from '../language-support';

export const mermaidLanguageDescription = LanguageDescription.of({
  name: 'mermaid',
  load: async () => {
    return mermaid();
  },
});

export const mindmapLanguageDescription = LanguageDescription.of({
  name: 'mindmap',
  load: async () => {
    return mindmap();
  },
});

export const pieLanguageDescription = LanguageDescription.of({
  name: 'pie',
  load: async () => {
    return pie();
  },
});

export const flowchartLanguageDescription = LanguageDescription.of({
  name: 'flowchart',
  alias: ['graph'],
  load: async () => {
    return flowchart();
  },
});
