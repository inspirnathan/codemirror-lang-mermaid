import { LanguageDescription } from '@codemirror/language';
import {
  mermaid,
  mindmap,
  pie,
  flowchart,
  sequence,
  journey,
  requirement,
} from '../language-support';

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

export const sequenceLanguageDescription = LanguageDescription.of({
  name: 'sequenceDiagram',
  alias: ['sequence'],
  load: async () => {
    return sequence();
  },
});

export const journeyLanguageDescription = LanguageDescription.of({
  name: 'journey',
  load: async () => {
    return journey();
  },
});

export const requirementLanguageDescription = LanguageDescription.of({
  name: 'requirementDiagram',
  alias: ['requirement'],
  load: async () => {
    return requirement();
  },
});
