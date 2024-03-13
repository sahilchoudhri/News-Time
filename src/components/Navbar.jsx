import React from 'react'
import { useState } from 'react'

function Navbar(props) {

    const {find, setFind} = props
    const [search, setSearch] = useState('')

    const searchHandler = () => {
        setFind(search),
        setSearch('')
    }

  return (
    <div className='bg-blue-900/30 text-white py-4 ' >
        <div className=' flex justify-between items-center w-11/12 max-w-[1100px] mx-auto' >

            <h1 className='text-lg font-bold italic ' >
                <span className='bg-blue-500 p-1 rounded-lg' >News</span>
            <span className='text-blue-500' >Time</span>
            </h1>
            <div className='relative'>
            <input
            type="text" 
            placeholder='Search...' 
            className='py-1 px-2 text-sm appearance-none outline-none bg-transparent ring-2 ring-blue-500 placeholder:text-slate-500 rounded-lg' 
            value={search} onChange={(e) => setSearch(e.target.value)}/>

            <button className='absolute right-0 top-0 bg-blue-500 text-sm font-medium text-white p-1 rounded-r-lg' onClick={() => searchHandler()} >Search</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar