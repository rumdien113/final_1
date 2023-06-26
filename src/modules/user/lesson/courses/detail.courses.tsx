import { NavLink, useParams } from 'react-router-dom'
// import data from './listLesson.json'
import { coursesList } from './course';
import { useState } from 'react';
import CourseItem from './courseItem.courses';

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
  content: string;
}

const Detail = () => {
  const userId = useParams();
  const [fan, setFan] = useState({}) //lesson in  courses
  const [bee, setBee] = useState("") //subTitle in lesson

  const changeFan = (title: string) => setFan(title)
  const changeBee = (subTitle: string) => setBee(subTitle)
  // console.log(userId)
  return (
    <main className='mt-24 flex bg-color-3'>
      <section className='w-1/5'>
        {coursesList.map((item) => {
          if (item.name === userId.id) {
            return (
              <section className="list bg-color-3 pl-4 pt-4 text-white">
                <div className='overflow-y-auto h-96 pr-4'>
                  {item.chapter.map((chap, index: number) => {
                    return (
                      <ul className='text-sm' key={index}>
                        <li>
                          {chap.title}
                        </li>
                        {chap.lesson.map((lesson) => {
                          return (
                            <ol className='pl-8 list-disc'>
                              <li className='py-3 hover:text-rose-600'>
                                <NavLink
                                  to={`/tutorial/${userId.id}${lesson.directory}`}
                                  onClick={() => {
                                    changeFan(chap.title),
                                      changeBee(lesson.subtitle)
                                  }
                                  }
                                >
                                  {lesson.subtitle}
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
        })}
      </section>
      <section>
        {coursesList.map((item) => {
          return (
            <div>
              {item.chapter.map((chap) => {
                if (chap.title === fan) {
                  return (
                    <div key={chap.title}>
                      {chap.lesson.map((lesson) => {
                        if (lesson.subtitle === bee) {
                          // console.log(lesson.subtitle);
                          return <CourseItem key={lesson.subtitle} course={lesson} />;
                        }
                        return null;
                      })}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )
          // Trả về null nếu không có phần tử phù hợp
        })}
      </section>
    </main>
  )
}

export default Detail