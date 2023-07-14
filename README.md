# codemirror-lang-mermaid

This package implements Mermaid language support for the CodeMirror code editor. Get syntax highlighting for Mermaid diagrams!

## Getting Started

Install the package:
```
npm install codemirror-lang-mermaid
```

Example usage:
```js
import { basicSetup, EditorView } from 'codemirror';
import { mermaid, mindmapTags } from 'codemirror-lang-mermaid';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';

const myHighlightStyle = HighlightStyle.define([
  { tag: mindmapTags.diagramName, color: '#9650c8' },
  { tag: mindmapTags.lineText1, color: '#ce9178' },
  { tag: mindmapTags.lineText2, color: 'green' },
  { tag: mindmapTags.lineText3, color: 'red' },
  { tag: mindmapTags.lineText4, color: 'magenta' },
  { tag: mindmapTags.lineText5, color: '#569cd6' },
]);

new EditorView({
  doc: `mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
`,
  extensions: [basicSetup, mermaid(), syntaxHighlighting(myHighlightStyle)],
  parent: document.body,
});
```

If you run this code in the browser, you should get syntax highlighting!

![Mermaid mindmap syntax highlighting](https://raw.githubusercontent.com/inspirnathan/codemirror-lang-mermaid/main/.github/mindmap-syntax-highlighting.png)

## Supported Diagrams
[Mermaid](https://mermaid.js.org/intro/) contains many different types of diagrams. Each diagram need its own [Lezer](https://lezer.codemirror.net/) grammar file. I'm currently working on building a grammar for each diagram. The following diagrams are supported so far.

- [mindmaps](https://mermaid.js.org/syntax/mindmap.html)
- [pie charts](https://mermaid.js.org/syntax/pie.html)
- [flowchart](https://mermaid.js.org/syntax/flowchart.html)

## Supported Tags
CodeMirror supports the ability to create custom [tags](https://lezer.codemirror.net/docs/ref/#highlight.Tag). These tags are useful for styling tokens from a grammar. I have created tags for each type of Mermaid diagram.

> Note: Each custom tag inherits from a [parent tag](https://github.com/inspirnathan/codemirror-lang-mermaid/blob/main/src/tags/index.ts) if you prefer to use them for styling instead.

### Mindmap
- diagramName
- lineText1
- lineText2
- lineText3
- lineText4
- lineText5

### Pie
- diagramName
- lineComment
- number
- showData
- string
- title
- titleText

### Flowchart
- diagramName
- keyword
- lineComment
- link
- nodeEdge
- nodeEdgeText
- nodeId
- nodeText
- number
- orientation
- string