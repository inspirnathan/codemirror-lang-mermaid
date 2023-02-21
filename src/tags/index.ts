import { Tag } from '@lezer/highlight';

export const mindmapTags = {
  diagramName: Tag.define(),
  lineText1: Tag.define(),
  lineText2: Tag.define(),
  lineText3: Tag.define(),
  lineText4: Tag.define(),
  lineText5: Tag.define(),
};

export const pieTags = {
  diagramName: Tag.define(),
  lineComment: Tag.define(),
  number: Tag.define(),
  showData: Tag.define(),
  string: Tag.define(),
  title: Tag.define(),
  titleText: Tag.define(),
};
