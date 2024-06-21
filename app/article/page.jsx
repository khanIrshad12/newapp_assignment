import React from 'react'
import { notFound } from "next/navigation";
import LiveTimestamp from '../components/LiveTimestamp';

const Article = ({searchParams}) => {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
      ) {
        return notFound();
      }

      const article = searchParams;
    
  return (
    <article>
      <section className="flex flex-col lg:flex-row  pb-24 px-0 lg:pl-10 mt-5">
        {article.urlToImage && (
          <img
            className="h-50 max-w-sm mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.urlToImage}
            alt={article.title}
          />
        )}
        <div className="pl-10 mt-5 ">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="font-bold pl-4">source: {article.source}</h2>
          <p className="pl-4"><LiveTimestamp  time={article.publishedAt}  /></p> 
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
      
    </article>
  )
}

export default Article