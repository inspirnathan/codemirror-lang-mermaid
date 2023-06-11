import { Tag, tags as t } from '@lezer/highlight';

export const mermaidTags = {
  diagramName: Tag.define(t.typeName)
}

export const mindmapTags = {
  diagramName: Tag.define(mermaidTags.diagramName),
  lineText1: Tag.define(),
  lineText2: Tag.define(),
  lineText3: Tag.define(),
  lineText4: Tag.define(),
  lineText5: Tag.define(),
};

export const pieTags = {
  diagramName: Tag.define(mermaidTags.diagramName),
  lineComment: Tag.define(t.lineComment),
  number: Tag.define(t.number),
  showData: Tag.define(t.keyword),
  string: Tag.define(t.string),
  title: Tag.define(t.keyword),
  titleText: Tag.define(t.string),
};
