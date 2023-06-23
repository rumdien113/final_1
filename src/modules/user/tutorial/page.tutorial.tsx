import { IndexRouteObject, NavLink } from 'react-router-dom';
import C from "../../../assets/images/tutorial/c.png"
import CPP from '../../../assets/images/tutorial/cpp.png';
import JAVA from '../../../assets/images/tutorial/java.png';
import JS from '../../../assets/images/tutorial/js.png';
import PY from '../../../assets/images/tutorial/py.png';
import HTML from '../../../assets/images/tutorial/html.png';
import CSS from '../../../assets/images/tutorial/css.png';
import React from 'react';

export interface INavLink {
	directory: string
	title: string
	image: string
}

const links1: INavLink[] = [
	{ directory: '/C', title: 'C', image: C },
	{ directory: '/Python', title: 'Python', image: PY },
	{ directory: '/Cpp', title: 'C++', image: CPP },
	{ directory: '/Java', title: 'Java', image: JAVA },
	{ directory: '/Javascript', title: 'Javascript', image: JS }
]

const links2: INavLink[] = [
	{ directory: '/Javascript', title: 'Javascript', image: JS },
	{ directory: '/HTML', title: 'HTML', image: HTML },
]

const Tutorial = () => {

	return (
		<main className='lg:mt-24'>
			<section className="base flex flex-col justify-center items-center bg-color-2 font-inter">
				<h2 className='text-white text-4xl font-bold my-8'>Lập trình cơ bản</h2>
				<div className="list flex flex-row flex-wrap justify-center items-center px-10 pb-10">
					{links1.map((navLink: INavLink, index: number) => {
						return (
							<NavLink
								// onClick={}
								key={index}
								end={index === 0 ? true : false}
								to={`/tutorial${navLink.directory}`}
								className='flex flex-col justify-center items-center py-12 font-medium text-xl text-white w-72 border rounded-2xl bg-color-1 mb-5 mx-5'
							>
								<img
									src={navLink.image}
									alt={navLink.title}
									className='mb-4 h-14 w-14'
								/>
								<span>{navLink.title} tutorial</span>
							</NavLink>
						)
					})}
				</div>
			</section>
			<div className='h-16 bg-zinc-700'></div>

			<section className="base flex flex-col justify-center items-center bg-color-2 font-inter">
				<h2 className='text-white text-4xl font-bold my-8'>Lập trình web</h2>
				<div className="list flex flex-row flex-wrap justify-center items-center px-10 pb-10">
					{links2.map((navLink: INavLink, index: number) => {
						return (
							<NavLink
								key={index}
								end={index === 0 ? true : false}
								to={`/tutorial/${navLink.directory}`}
								className='flex flex-col justify-center items-center py-12 font-medium text-xl text-white w-72 border rounded-2xl bg-color-1 mb-5 mx-5'
							>
								<img
									src={navLink.image}
									alt={navLink.title}
									className='mb-4 h-14 w-14'
								/>
								<span>{navLink.title} tutorial</span>
							</NavLink>
						)
					})}
				</div>
			</section>
			<div className='h-16 bg-zinc-700'></div>
		</main>
	)
}

export default Tutorial