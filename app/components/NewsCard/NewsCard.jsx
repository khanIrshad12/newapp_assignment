import ReadMoreButton from '@/app/components/ReadMoreButton/ReadMoreButton'
import React from 'react'
import LiveTimestamp from '../LiveTimestamp';



const NewsCard = ({article}) => {

  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out ">
      {article.url && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
            <h2 className="font-bold font-serif">{article.title}</h2>
            <section className="mt-2 flex-1">
                <p className="text-sm line-clamp-4">{article.description}</p>
            </section>
            <footer className="text-sm text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                <p>{article.source.name} -</p>
                 <LiveTimestamp time={article.publishedAt} />
            </footer>
        </div>
        {/* Readmore Button */}
        <ReadMoreButton article={article}/>
      </div>
    </article>
  )
}

export default NewsCard