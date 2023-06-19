import React from 'react'
import cmt from './dtcomment.json'
import tag from './dttag.json'
import avatar from '../../../assets/images/avatar.png'
import Like from '@mui/icons-material/ThumbUp';
import Dislike from '@mui/icons-material/ThumbDownAlt';
import Cmt from '@mui/icons-material/Comment';

const Qa = () => {
    return (
        <main className="bg-color-1 lg:mt-24 text-white">
            <section className="flex flex-col lg:flex-row mx-auto lg:space-x-4 py-12 w-full lg:max-w-screen-2xl max-w-full sm:px-2 lg:px-0">
                <div className='quest md:w-full lg:w-9/12'>
                    <div className="item  -mt-8">
                        {cmt.quest.map((item, index: number) => {
                            return <div key={index} className='bg-color-2 border-solid rounded border-slate-700 border-2 mt-8 py-4 px-8'>
                                <div className='info flex space-x-2.5'>
                                    <img src={avatar} alt="avatar" className='rounded-full w-16'/>
                                    <div className="user">
                                        <h1 className='font-semibold text-2xl'>{item.name}</h1>
                                        <p className='font-normal text-xs mt-2'>{item.day}</p>
                                    </div>
                                </div>
                                <h1 className='font-semibold text-3xl mt-4 mb-4'>{item.title}</h1>
                                <p className='text-base my-2'>{item.content}</p>
                                <p className='text-base mb-3 text-blue-700'>{item.hashtag}</p>
                                <hr className='my-6 w-full '/>
                                <div className="react grid grid-cols-3 gap-x-1">
                                    <div className="like">
                                        <Like />
                                        <span>{item.like}</span>
                                    </div>
                                    <div className="dislike">
                                        <Dislike />
                                        <span>{item.dislike}</span>
                                    </div>
                                    <div className="comment">
                                        <Cmt />
                                        <span>{item.cmt}</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="tag bg-color-2 border-solid rounded border-slate-700 border-2 md:w-full lg:h-1/2 lg:w-3/12 p-8 mt-8 lg:-mt-0.5">
                    <span className='text-2xl font-bold'>Danh sách Tag phổ biến:</span>
                    <hr className='my-6 w-full '/>
                    <div className='flex flex-wrap '>
                        {tag.tag.map((item) => {
                            return <div className='bg-zinc-500 py-1.5 px-5 mr-2 mb-2 font-bold text-lg rounded-md'>{item}</div>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Qa