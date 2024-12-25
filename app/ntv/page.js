'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the news data from the API route
    fetch('/api/fetchNtv')
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-gray-600 mt-12">Loading news...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h1>
      {news.length === 0 ? (
        <p className="text-center text-xl text-gray-500">No news available.</p>
      ) : (
        <ul className="space-y-20">
          {news.map((article, index) => (
            <li key={index} className="border-b border-gray-300 pb-6 mb-6">
              {/* Display Image with controlled size */}
              {article.image && (
                <div className="mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={100}  // Set image width to a smaller size
                    height={100} // Set image height to a smaller size
                    className="object-cover rounded-md"
                  />
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{article.title}</h2>

              {/* Content */}
              <div
                dangerouslySetInnerHTML={{ __html: article.contentEncoded }}
                className="text-gray-700 text-base leading-relaxed"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsPage;
