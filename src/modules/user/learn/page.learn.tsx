import { NavLink } from "react-router-dom"
import React from 'react'
import c from '../../../assets/images/learn/c.png'
import cpp from '../../../assets/images/learn/cpp.jpg'
import html from '../../../assets/images/learn/html&css.png'
import java from '../../../assets/images/learn/java.jpg'
import js from '../../../assets/images/learn/js.png'
import python from '../../../assets/images/learn/python.jpg'

export interface INavLink {
    directory: string
    title: string
    img: any
}

const links: INavLink[] = [
    { directory: '/lap-trinh-c', title: 'C', img: c },
    { directory: '/lap-trinh-c++', title: 'C++', img: cpp },
    { directory: '/lap-trinh-python', title: 'Python', img: python },
    { directory: '/lap-trinh-java', title: 'Java', img: java },
    { directory: '/lap-trinh-js', title: 'Javascript', img: js },
    { directory: '/lap-trinh-html-css', title: 'HTML-CSS', img: html },
]


const Learn = () => {
    return (
        <section className="bg-color-1 lg:mt-24 text-white px-40">
            <div className="title pt-32">
                <p className="text-4xl font-extrabold text-start text-white ">Các khóa học phổ biến nhất</p>
            </div>
            <div className="list pt-20 grid ms:grid-cols-1 lg:grid-cols-3 items-center gap-3.5">
                {links.map((navlink: INavLink, index: number) => {
                    return (
                        <div className="card p-6 max-w-sm mx-auto rounded-xl shadow-lg mb-16 bg-color-2 ">
                            <NavLink
                                end={index === 0 ? true : false}
                                to={navlink.directory}
                                // className="object-cover w-2/5"
                            >
                                <img src={navlink.img} alt={navlink.title} className="mb-8 object-fill h-48 w-96"/>
                                <p className="text-xl font-semibold">Lập trình {navlink.title} cơ bản</p>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Learn