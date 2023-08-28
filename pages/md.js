import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import gfm from 'remark-gfm'; // Plugin for GitHub Flavored Markdown


const markdown = `

# Table of contents
1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>
Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>
The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>
This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>
The second paragraph text
`

export default function App() {
    return (
        <div>
          <h1>Sample Markdown Page</h1>
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[gfm]} // Use the remark-gfm plugin
          />
        </div>
      );
}
