import { foldService } from '@codemirror/language';

function countLeadingSpaces(str: string) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      count++;
    } else if (str[i] === '\t') {
      count += 4;
    } else {
      break;
    }
  }

  return count;
}

export const foldByIndent = () => {
  return foldService.of((state, lineStart, lineEnd) => {
    const line = state.doc.lineAt(lineStart);
    const lineCount = state.doc.lines;
    let indents = countLeadingSpaces(line.text);
    let foldStart = lineStart;
    let foldEnd = lineEnd;

    let nextLine = line;
    while (nextLine.number < lineCount) {
      nextLine = state.doc.line(nextLine.number + 1);
      let nextIndents = countLeadingSpaces(nextLine.text);
      if (nextIndents > indents) {
        foldEnd = nextLine.to;
      } else {
        break;
      }
    }

    if (
      state.doc.lineAt(foldStart).number === state.doc.lineAt(foldEnd).number
    ) {
      return null;
    }

    foldStart = line.to;

    return { from: foldStart, to: foldEnd };
  });
};
