import { ExternalTokenizer } from '@lezer/lr';
import { TitleText } from './pie.grammar.terms';

export const titleText = new ExternalTokenizer((input) => {
  if (input.next === 10) {
    input.acceptToken(TitleText);
    return;
  }

  if (input.next === -1) return;

  while (input.next !== 10 && input.next !== -1) {
    input.advance();
  }

  input.acceptToken(TitleText);
});
