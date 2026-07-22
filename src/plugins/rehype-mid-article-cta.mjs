const ctaNode = {
  type: 'element',
  tagName: 'aside',
  properties: {
    className: ['article-cta'],
    dataPagefindIgnore: ''
  },
  children: [
    {
      type: 'element',
      tagName: 'p',
      properties: { className: ['article-cta__eyebrow'] },
      children: [{ type: 'text', value: 'Need agency account infrastructure?' }]
    },
    {
      type: 'element',
      tagName: 'strong',
      properties: {},
      children: [{ type: 'text', value: 'Keep campaigns moving with an operating model built for scale.' }]
    },
    {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [{ type: 'text', value: 'Compare AGrowth solutions for Meta, Google Ads, TikTok Ads, and multi-platform account operations.' }]
    },
    {
      type: 'element',
      tagName: 'a',
      properties: { href: 'https://agrowth.io/', rel: ['external'] },
      children: [{ type: 'text', value: 'Explore AGrowth solutions →' }]
    }
  ]
};

export default function rehypeMidArticleCta() {
  return (tree) => {
    if (!Array.isArray(tree.children) || tree.children.length === 0) return;

    const h2Indexes = tree.children
      .map((node, index) => node.type === 'element' && node.tagName === 'h2' ? index : -1)
      .filter((index) => index >= 0);

    const insertAt = h2Indexes.length >= 2
      ? h2Indexes[Math.ceil(h2Indexes.length / 2)]
      : Math.ceil(tree.children.length / 2);

    tree.children.splice(insertAt, 0, structuredClone(ctaNode));
  };
}
