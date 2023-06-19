import { NavLink } from 'react-router-dom'
import data from './listLesson.json'

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

const Python = () => {
    return (
        <nav className="list w-1/5 bg-color-3 pl-8 pt-4">
            <div className='overflow-y-auto h-2/3'>
                {data.chapter.map((chap: IChapter, index: number) => {
                    return (
                        <ul className='text-base' key={index}>
                            <li>{chap.title}</li>
                            {chap.lesson.map((lesson: INavLink) => {
                                return (
                                    <ol className='pl-12 list-disc'>
                                        <li className='py-3 hover:text-rose-600'>
                                            <NavLink to={lesson.directory}>
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
        </nav>
    )
}

export default Python