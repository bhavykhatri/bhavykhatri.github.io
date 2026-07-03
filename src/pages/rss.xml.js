import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Bhavy Khatri',
    description: 'Essays and Hindi-Urdu poetry by Bhavy Khatri.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? '',
      link: `/writing/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en</language>`,
  });
}
