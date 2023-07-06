// import { Course } from './course.type'
import { INavLink } from './detail.courses'

interface CourseType {
    course: INavLink
    content?: string
}

const CourseItem = ({ course }: CourseType) => {
    console.log("course.subtitle")
    { console.log(course) }
    return (
        <div className='mt-21 text-white bg-color-3 w-full h-full p-12'>
            <div className='py-32'>
                <h1 className='text-6xl font-bold text-center mb-8 '>{course.subtitle}</h1>
                {course.content.split('\n').map((line, index) => (
                    <p className='leading-loose text-justify text-xl px-16' key={index}>{line}</p>
                    // <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default CourseItem