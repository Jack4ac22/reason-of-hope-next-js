// components/notion/renderBlock.js

import React from 'react';

const HeadingOne = ({ objectElement }) => <h1>{extractText(objectElement)}</h1>;
const HeadingTwo = ({ objectElement }) => <h2>{extractText(objectElement)}</h2>;
const HeadingThree = ({ objectElement }) => <h3>{extractText(objectElement)}</h3>;
const OrderedList = ({ children }) => <ol>{children}</ol>;
const UnOrderedList = ({ children }) => <ul>{children}</ul>;
const ListItem = ({ objectElement }) => <li>{extractText(objectElement)}</li>;
const Paragraph = ({ objectElement }) => <p>{extractText(objectElement)}</p>;
const LinkComponent = ({ objectElement }) => {
  const url = objectElement[type]?.url || '';
  const label = extractText(objectElement);
  return <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>;
};
const ImageComponent = ({ url, alt }) => <img src={url} alt={alt} className="my-4" />;
const Quote = ({ objectElement }) => <blockquote>{extractText(objectElement)}</blockquote>;
const CodeBlock = ({ objectElement }) => {
  const language = objectElement.code.language || 'text';
  const code = extractText(objectElement);
  return <pre><code className={`language-${language}`}>{code}</code></pre>;
};

function extractText(block) {
  const type = block.type;
  return block[type]?.rich_text?.map(rt => rt.plain_text).join('') || '';
}

export function renderBlock(block) {
  const { type, id } = block;
  if (!block[type]) return null;

  switch (type) {
    case 'paragraph':
      return <Paragraph key={id} objectElement={block} />;
    case 'heading_1':
      return <HeadingOne key={id} objectElement={block} />;
    case 'heading_2':
      return <HeadingTwo key={id} objectElement={block} />;
    case 'heading_3':
      return <HeadingThree key={id} objectElement={block} />;
    case 'bulleted_list_item':
      return <UnOrderedList key={id}><ListItem objectElement={block} /></UnOrderedList>;
    case 'numbered_list_item':
      return <OrderedList key={id}><ListItem objectElement={block} /></OrderedList>;
    case 'quote':
      return <Quote key={id} objectElement={block} />;
    case 'code':
      return <CodeBlock key={id} objectElement={block} />;
    case 'image': {
      const source = block.image.type === 'external'
        ? block.image.external.url
        : block.image.file.url;
      return <ImageComponent key={id} url={source} alt={block.image.caption?.[0]?.plain_text || ''} />;
    }
    case 'bookmark':
    case 'embed':
    case 'video':
      return <LinkComponent key={id} objectElement={block} />;
    default:
      return <p key={id}>❗ Unsupported block type: <code>{type}</code></p>;
  }
}
