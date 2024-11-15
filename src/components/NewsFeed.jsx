import React, { useState, useEffect, useCallback } from 'react';
import NewsCard from './NewsCard';
import Skeleton from './Loader/Skeleton';

const NewsFeed = ({category, onArticleSelect, selectedArticle }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log('category:', articles);

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);//
      const data = await response.json();
      setArticles(data.articles || []);
      console.log('data:', data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching news:", error);
    }
  }, [category]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const narticles = [{
    author:'Rauank Mishra',
    title: 'One person dead following two explosions near Brazil’s supreme court - CNN',
    description: 'One person has been found dead following two explosions near Brazil’s Supreme Court and Congress in Brasilia, CNN Brasil reports.',
    urlToImage: 'https://via.placeholder.com/150',
    url: 'https://www.google.com',
    source: { name: 'CNN'}  ,
    publishedAt: "2024-11-14T01:33:00Z",
  },
  {
    title: 'Ozempic and Wegovy may be beneficial in fighting alcohol addiction: Study - The Hill',
    description: 'The weight loss drugs Ozempic and Wegovy may be beneficial for people struggling with alcohol addiction, a study published Wednesday in JAMA Psychiatry said. The study examined about 228,000 people in Sweden who had alcohol use disorder and Type 2 diabetes. T…',
    urlToImage: 'https://via.placeholder.com/150',
    url: 'https://www.google.com',
    source: { name: 'CNN'} ,
    publishedAt: "2024-11-14T01:33:00Z",
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    urlToImage: 'https://via.placeholder.com/150',
    url: 'https://www.google.com',
    source: { name: 'CNN'}  ,
  }]

  return (
    <section className={`${selectedArticle ? 'sm:w-1/2': 'w-full sm:max-w-5xl mx-auto'} h-auto flex gap-y-4 flex-col rounded-xl`}>
      {/* className='h-auto relative max-w-5xl mx-auto p-4 rounded-xl' */}
      {/* <NewsCard articles={articles} /> */}
      {
        loading ? <Skeleton /> : articles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            onClick={() => onArticleSelect(article)}
          />
        ) )
      }
    </section>
  );
};

export default NewsFeed;
