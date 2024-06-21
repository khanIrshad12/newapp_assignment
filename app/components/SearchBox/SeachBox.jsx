'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = ({ getNews, page, setInput,input }) => {
   
    const router = useRouter();
    const handleSearch = (e) => {
      e.preventDefault();
      if (!input) return;
      getNews(page, input);
     // router.push(`/search?term=${input}`);
    };
    return (
      <form
        onSubmit={handleSearch}
        className=" px-5 flex justify-between items-center "
      >
        <input
          type="text"
          placeholder="Search keywords..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" outline-none w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 bg-transparent dark:text-orange-400  flex-1"
        />
        <button
          type="submit"
          disabled={!input}
          className="text-orange-400 disabled:text-gray-400"
        >
          Search
        </button>
      </form>
    );
  };
  
  export default SearchBox;