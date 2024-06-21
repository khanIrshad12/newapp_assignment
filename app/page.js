'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard/NewsCard";
import Loading from "./loading";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import SearchBox from "./components/SearchBox/SeachBox";
export default function Home() {
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getNews = async (page, query = null) => {
    try {
      setLoader(true)
      const res = await axios.get(`/api/newApi?page=${page}&q=${query}`);
      const data = res.data;
      setNewsData(data.articles);
      setTotalPages(Math.ceil(data.totalResults / 10));
    } catch (error) {
      console.log("falied to get news data from API", error);
    } finally {
      setLoader(false)
    }
  }

  const handlePrevious = () => {

    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  useEffect(() => {
    if (input.length > 0) {
      getNews(page, input)
    } else {
      getNews(page)
    }
  }, [page, input])


  return (
    <>
      <h1 className="Inline-block text-center text-3xl font-bold underline py-2">News App</h1>
      <div className="flex justify-end my-2">
        <SearchBox getNews={getNews} page={page} setInput={setInput} input={input} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        {newsData.map((article) => (
          <NewsCard key={article.title} article={article} />
        ))}

      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-4 py-2 flex items-center hover:bg-black hover:text-white uppercase text-black rounded mr-2 disabled:opacity-50"
        >
          <FaArrowLeft className="px-2  w-8" />  Previous
        </button>
        <span className="px-4 py-2 bg-black text-white rounded">{page}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 flex items-center uppercase hover:bg-black hover:text-white  text-black rounded ml-2 disabled:opacity-50"
        >
          Next <FaArrowRightLong className="px-2  w-8" />
        </button>
      </div>

      {loader && <Loading />}
    </>
  );
}
