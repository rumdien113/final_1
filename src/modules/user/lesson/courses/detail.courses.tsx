import { NavLink, useParams } from 'react-router-dom'
// import data from './listLesson.json'
import { coursesList } from './course';

export interface IData {
  chapter: IChapter[];
}

export interface IChapter {
  title: string;
  lesson: INavLink[];
}

export interface INavLink {
  directory: string;
  subtitle: string;
}

const Detail = () => {
  const userId = useParams();
  // console.log(userId)
  return (
    <section className='mt-24'>
      {coursesList.map((item, index: number) => {
        // console.log(item.name);
        // console.log('=========================')
        // console.log(userId.id)
        if (item.name === userId.id) {
          // console.log(item.chapter)
          return (
            <section className="list w-1/5 bg-color-3 pl-4 pt-4 text-white">
              <div className='overflow-y-auto h-2/3'>
                {item.chapter.map((chap: IChapter, index: number) => {
                  return (
                    <ul className='text-sm' key={index}>
                      <li>{chap.title}</li>
                      {chap.lesson.map((lesson: INavLink) => {
                        return (
                          <ol className='pl-8 list-disc'>
                            <li className='py-3 hover:text-rose-600'>
                              <NavLink to={lesson.directory}>
                                {lesson.subtitle}
// dùng 1 handleOnClick để setState lưu 1 str là directory của lesson
                              </NavLink>
                            </li>
                          </ol>
                        )
                      })}
                    </ul>
                  )
                })}
              </div>
            </section>
          );
        }
        // return null; // Cần có return null nếu không có phần tử phù hợp
      // map lại để tìm khoá học vs state đã lưu
      })}
    </section>
  )

}

export default Detail