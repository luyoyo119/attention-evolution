import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET() {
  const allCollections = ['decode', 'radar', 'deepread', 'evolution', 'workshop'] as const;
  const articles = (await Promise.all(
    allCollections.map(c => getCollection(c, ({ data }) => !data.draft))
  )).flat();

  const sorted = articles.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.url,
    items: sorted.map(a => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/${a.collection}/${a.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
