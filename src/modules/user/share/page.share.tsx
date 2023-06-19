import React from 'react'
import tag from './dttag.json'
import blog from './share'

const Share = () => {
    return (
        <main className="bg-color-1 lg:mt-24 text-white">
            <section className="flex flex-col lg:flex-row mx-auto lg:space-x-4 py-12 w-full lg:max-w-screen-2xl max-w-full sm:px-2 lg:px-0">
                <div className='blog md:w-full lg:w-9/12'>
                    <div className="item -mt-8">
                        {blog.map((item) => {
                            return <div className='bg-color-2 flex border-solid rounded border-slate-700 border-2 mt-8 py-2 px-1 cursor-pointer'>
                                <img src={item.imgURL} alt="blog" className='blog-image h-60 w-2/3 object-cover rounded-lg mx-2'/>
                                <div className='description'>
                                    <p className='font-bold text-3xl mb-3'>{item.title}</p>
                                    <p className='font-semibold text-base text-blue-500 mb-1.5'>{item.author}</p>
                                    <p className='font-normal text-base mb-2'>{item.description}</p>
                                    <p className='text-slate-500'>{item.date}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="tag bg-color-2 border-solid rounded border-slate-700 border-2 md:w-full h-1/2 lg:w-3/12 p-8 mt-8 lg:-mt-0.5">
                    <span className='text-2xl font-bold'>Danh sách Tag phổ biến:</span>
                    <hr className='my-6 w-full '/>
                    <div className='flex flex-wrap '>
                        {tag.tag.map((item) => {
                            return <div className='bg-zinc-500 py-1.5 px-5 mr-2 mb-2 font-bold text-lg rounded-md cursor-pointer'>{item}</div>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Share