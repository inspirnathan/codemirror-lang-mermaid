import { ExternalTokenizer } from '@lezer/lr';
import { TitleText } from './pie.grammar.terms';

const newline = 10;

export const titleText = new ExternalTokenizer((input) => {
  let { next } = input;

  if (next === newline) {
    input.acceptToken(TitleText);
    return;
  }

  while (input.next !== newline && input.next !== -1) {
    input.advance();
  }

  input.acceptToken(TitleText);
});
