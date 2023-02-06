import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { parser as mindmapParser } from './mindmap/mindmap.grammar';
export { mindmapTags } from './mindmap/tags';

export const mindmapLanguage = LRLanguage.define({
  name: 'mindmap',
  parser: mindmapParser,
});

export function mindmap() {
  return new LanguageSupport(mindmapLanguage);
}
