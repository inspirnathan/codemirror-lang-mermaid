import { ExternalTokenizer } from '@lezer/lr';
import { MindmapDiagram, PieDiagram, empty } from './mermaid.grammar.terms';

const skipCodePoints = [-1, 9, 10, 13, 32, 9];

const diagramMap: Record<string, number> = {
  mindmap: MindmapDiagram,
  pie: PieDiagram,
};

const diagrams = Object.keys(diagramMap);

const longestTextLength = diagrams.reduce((a, b) => {
  return a.length > b.length ? a : b;
}).length;

export const diagramText = new ExternalTokenizer((input) => {
  if (skipCodePoints.includes(input.next)) return;

  let tokens = '';

  for (let i = 0; i < longestTextLength; i++) {
    const codePoint = input.peek(i);
    if (skipCodePoints.includes(codePoint)) break;
    tokens += String.fromCodePoint(codePoint);
  }

  while (input.next !== -1) {
    input.advance();
  }

  if (diagrams.includes(tokens)) input.acceptToken(diagramMap[tokens]);
  else input.acceptToken(empty);

  return;
});
