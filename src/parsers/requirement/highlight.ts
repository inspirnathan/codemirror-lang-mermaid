import { styleTags } from '@lezer/highlight';
import { requirementTags } from '../../tags';

export const requirementHighlighting = styleTags({
  DiagramName: requirementTags.diagramName,
  LineComment: requirementTags.lineComment,
  IDNumber: requirementTags.number,
  SubDiagramType: requirementTags.subDiagramType,
  'UnquotedString RelationshipStart': requirementTags.unquotedString,
  QuotedString: requirementTags.quotedString,
  PropKeyword: requirementTags.unquotedString,
  Keyword: requirementTags.keyword,
  'ForwardArrow BackArrow Hyphen': requirementTags.arrow,
});
