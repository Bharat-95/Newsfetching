import RSSParser from 'rss-parser';

export async function GET() {
  const parser = new RSSParser();
  const rssUrl = 'https://tv9telugu.com/feed'; 
  try {

    const feed = await parser.parseURL(rssUrl);




    const articles = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      creator: item.creator,
      contentEncoded: item['content:encoded'],
      contentSnippet: item.contentSnippet,
    }));

    return new Response(JSON.stringify(articles), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching the RSS feed:', error);
    return new Response('Error fetching the news feed', { status: 500 });
  }
}
