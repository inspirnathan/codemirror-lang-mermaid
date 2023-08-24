import { LanguageSupport } from '@codemirror/language';
import {
  mermaidLanguage,
  mindmapLanguage,
  pieLanguage,
  flowchartLanguage,
  sequenceLanguage,
  journeyLanguage,
} from '../language-definitions';

export function mermaid() {
  return new LanguageSupport(mermaidLanguage);
}

export function mindmap() {
  return new LanguageSupport(mindmapLanguage);
}

export function pie() {
  return new LanguageSupport(pieLanguage);
}

export function flowchart() {
  return new LanguageSupport(flowchartLanguage);
}

export function sequence() {
  return new LanguageSupport(sequenceLanguage);
}

export function journey() {
  return new LanguageSupport(journeyLanguage);
}
