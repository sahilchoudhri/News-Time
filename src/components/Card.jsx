import React from 'react'

function Card(props) {
  const { item } = props;

  const img = item?.urlToImage;
  const title = item?.title ?? 'Untitled';
  const description = item?.description ?? 'No description available.';
  const url = item?.url;
  const publishedAt = item?.publishedAt?.slice(0, 10) ?? 'No date available.';
  const author = item?.author ?? 'Unknown';

  return (
    img && (
      <div className='bg-white/30 max-w-[350px] relative text-white p-4 pb-8 rounded-lg shadow-md cursor-pointer hover:bg-white/20 transition-all duration-200' >
        <img src={img} alt='news' className='aspect-[16/9] object-cover shadow-lg rounded-t-lg' />
        <div className='p-4 flex flex-col gap-4 ' >
          <h1 className='text-lg font-bold' >{title.length > 100 ? title.substring(0, 100) + '...' : title}</h1>
          <div className='flex justify-between font-semibold items-center' >
            <p className='text-sm' >{author.length > 20 ? author.substring(0, 20) + '...' : author}</p>
            <p className='text-sm' >{publishedAt}</p>
          </div>
          <p className='text-sm' >{description}...</p>
          <button className='absolute bottom-4 right-4 bg-blue-500 lg:bottom-0 lg:w-full lg:right-0 lg:rounded-t-none hover:bg-blue-700 transition-all duration-200 text-sm font-medium text-white py-1 px-2 rounded-lg' onClick={() => url && window.open(url)} >Read More</button>
        </div>
      </div>
    )
  )
}

export default Card