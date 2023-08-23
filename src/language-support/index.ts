import { LanguageSupport } from '@codemirror/language';
import {
  mermaidLanguage,
  mindmapLanguage,
  pieLanguage,
  flowchartLanguage,
  sequenceLanguage,
  journeyLanguage,
} from '../language-definitions';
import { foldByIndent } from '../extensions';

export function mermaid(config = { fold: false }) {
  return new LanguageSupport(
    mermaidLanguage,
    config.fold ? [foldByIndent] : []
  );
}

export function mindmap(config = { fold: true }) {
  return new LanguageSupport(
    mindmapLanguage,
    config.fold ? [foldByIndent] : []
  );
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
