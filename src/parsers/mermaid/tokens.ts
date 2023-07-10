import { ExternalTokenizer } from '@lezer/lr';
import {
  preDiagramLine,
  MindmapDiagram,
  PieDiagram,
} from './mermaid.grammar.terms';

const skipCodePoints = [-1, 9, 13, 32, 9];

const diagramMap: Record<string, number> = {
  mindmap: MindmapDiagram,
  pie: PieDiagram,
};

const diagrams = Object.keys(diagramMap);

export const diagramText = new ExternalTokenizer((input) => {
  if (skipCodePoints.includes(input.next)) return;

  let tokens = '';

  while (input.next != 10 && input.next !== -1) {
    tokens += String.fromCodePoint(input.next);
    input.advance();
  }

  input.advance();

  const activeDiagram = diagrams.filter((diagram) => {
    return tokens.startsWith(diagram);
  });

  if (activeDiagram.length > 0) {
    while (input.next !== -1) {
      input.advance();
    }
    input.acceptToken(diagramMap[activeDiagram[0]]);
  } else {
    input.acceptToken(preDiagramLine);
  }
});
