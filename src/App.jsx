import { useEffect, useState } from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar";

function App() {

  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [find, setFind] = useState('india');


  async function fetchNews ()
  {
    setIsLoading(true);
    try {
      const fetchdata = await fetch(`https://newsapi.org/v2/everything?q=${find}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_APP_API_KEY}`);
      const output = await fetchdata.json();
      console.log(output.articles);
      setData(output.articles);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {

    fetchNews();

  },[find])

  return (

    <div className="flex flex-col min-h-screen grad ">
      <Navbar find={find} setFind={setFind} />
      <ul className='flex flex-wrap justify-center items-center pt-8 px-12 gap-6' >
            <li className='bg-white/30 text-white p-2 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-200 text-xs font-semibold ' onClick={() => setFind('india')} >National</li>
            <li className='bg-white/30 text-white p-2 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-200 text-xs font-semibold' onClick={() => setFind('stockmarket')} >Buisness</li>
            <li className='bg-white/30 text-white p-2 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-200 text-xs font-semibold' onClick={() => setFind('bollywood')} >Entertainment</li>
            <li className='bg-white/30 text-white p-2 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-200 text-xs font-semibold' onClick={() => setFind('doctor')} >Health</li>
            <li className='bg-white/30 text-white p-2 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-200 text-xs font-semibold' onClick={() => setFind('cricket')} >Sports</li>
        </ul>
      <div className="flex justify-center items-center w-11/12 max-w-[1180px] mx-auto" >

        {isLoading ? <div className="animate-spin rounded-full border-4 border-white border-l-blue-500 w-12 h-12 mt-[10rem] " /> : <Cards data={data} />}

      </div>
    
    </div>
  )
}

export default App
