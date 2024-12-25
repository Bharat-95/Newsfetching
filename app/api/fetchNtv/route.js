import RSSParser from 'rss-parser';

export async function GET() {
  const parser = new RSSParser();
  const veluguUrl = 'https://www.ntvtelugu.com/feed';

  try {
    // Fetch and parse the Velugu feed
    const veluguFeed = await parser.parseURL(veluguUrl);
    const veluguArticles = veluguFeed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      creator: item.creator,
      contentEncoded: item['content:encoded'],
      contentSnippet: item.contentSnippet,
    }));

    // Return the Velugu articles as JSON
    return new Response(JSON.stringify(veluguArticles), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching the Velugu RSS feed:', error);
    // Return a JSON error response
    return new Response(
      JSON.stringify({ error: 'Error fetching the Velugu news feed', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
