import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { Tag } from "@lezer/highlight";
declare const mindmapTags: {
    diagramName: Tag;
    lineText1: Tag;
    lineText2: Tag;
    lineText3: Tag;
    lineText4: Tag;
    lineText5: Tag;
};
declare const mindmapLanguage: LRLanguage;
declare function mindmap(): LanguageSupport;
export { mindmapTags, mindmapLanguage, mindmap };
