'use client'
import { useRouter } from "next/navigation";

const ReadMoreButton = ({ article }) => {
    const router = useRouter();
   /*  console.log( Object.entries(article)
    .map(([key, value]) => {
      if (key === 'source') {
        // Extract 'name' safely and preserve other 'source' properties
        const updatedSource = { ...value, name: value?.name };
        console.log(updatedSource); // Optional chaining for safety
        return `${key}=${updatedSource.name}`; // Encode 'source' as JSON
      } else {
        return `${key}=${value}`; // Handle other key-value pairs normally
      }
    })
    .join("&")); */
    const handleButton = () => {
        const queryString = Object.entries(article)
        .map(([key, value]) => {
          if (key === 'source') {
            // Extract 'name' safely and preserve other 'source' properties
            const updatedSource = { ...value, name: value?.name };
            return `${key}=${updatedSource.name}`; // Encode 'source' as JSON
          } else {
            return `${key}=${value}`; // Handle other key-value pairs normally
          }
        })
        .join("&");
        console.log(queryString);
        const url = `/article?${queryString}`;
        router.push(url)

    }
    return (
        <button className='h-10 bg-orange-400 rounded-b-lg dark:text-gray-900 hover:bg-orange-500' onClick={handleButton}>Read More</button>
    )
}

export default ReadMoreButton