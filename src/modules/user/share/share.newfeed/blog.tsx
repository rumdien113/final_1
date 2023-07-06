import { useParams } from 'react-router-dom'
import shareList from '../share'

const Blog = () => {
    const { blogId } = useParams()
    const selectedBlog = shareList.find(item => item.id === blogId);
    // console.log(blogId)  
    return (
        <section className='mt-24 flex bg-color-3'>
            {selectedBlog && (
                <div className='text-white py-32'>
                    <h2 className='text-white font-black text-4xl pb-8'>{selectedBlog.title}</h2>
                    {selectedBlog.content.map((leaf, index) => (
                        <p key={index} className='leading-loose text-justify text-xl px-36 pb-4'>{leaf}</p>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Blog
