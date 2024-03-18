import React from 'react'
import Card from './Card';

function Cards(props) {
    if (!props) {
        console.error("Cards received null props. This is a bug. Ignoring it.")
        return <div>No data</div>
    }
    const { data } = props;
    if (!data) {
        console.error("Cards received null data prop. This is a bug. Ignoring it.")
        return <div className="text-slate-200 mt-[5rem] text-lg" >API is Paid hence can`t display news on live site.</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8' >
            {
                data.map((item, index) => {
                    if (!item) {
                        console.error(`Cards received null item at index ${index}. This is a bug. Ignoring it.`)
                        return <div className='text-slate-200 mt-[5rem] text-lg ' >No Data</div>
                    }
                    return (
                        <Card key={index} item={item} />
                    )
                })
            }
        </div>
    )
}

export default Cards