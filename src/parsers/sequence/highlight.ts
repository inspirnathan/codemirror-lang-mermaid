import { styleTags } from '@lezer/highlight';
import { sequenceTags } from '../../tags';

export const sequenceHighlighting = styleTags({
  DiagramName: sequenceTags.diagramName,
  NodeText: sequenceTags.nodeText,
  'Activate Deactivate Create Destroy Autonumber End Link Keyword Note':
    sequenceTags.keyword1,
  'Participant Actor As': sequenceTags.keyword2,
  LineComment: sequenceTags.lineComment,
  'Arrow ArrowSuffix': sequenceTags.arrow,
  Position: sequenceTags.position,
  MessageText1: sequenceTags.messageText1,
  MessageText2: sequenceTags.messageText2,
});
