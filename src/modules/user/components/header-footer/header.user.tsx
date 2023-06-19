import './header-footer.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo1 from '../../../../assets/images/logo-1.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export interface INavLink {
  directory: string
  title: string
}
const links: INavLink[] = [
  { directory: '/hoc-tap', title: 'Học tập' },
  { directory: '/tutorial', title: 'Tutorial' },
  { directory: '/chia-se', title: 'Chia sẻ' },
  { directory: '/hoi-dap', title: 'Hỏi đáp' }
]

const Header = () => {
  const [open, setOpen] = useState(false)

  const changeOpen = () => setOpen(!open)
  return (
    <header className="min-w-screen shadow-md bg-color-1 fixed top-0 left-0 right-0 z-50">
      <nav className="lg:container mx-auto flex justify-between lg:px-8">
        <div className="btn-toggle sm:relative lg:fixed w-screen lg:hidden flex bg-color-1 justify-between">
          {!open ? (
            <MenuIcon
              onClick={changeOpen}
              className="text-white my-auto menu-icon"
              style={{ fontSize: '35px' }}
            />
          ) : (
            <CloseIcon
              onClick={changeOpen}
              className="text-white my-auto menu-icon z-20"
              style={{ fontSize: '35px' }}
            />
          )}
          <NavLink to={`/home-page`} className={"bg-color-1 rounded-full my-1"}>
            <img src={logo1} alt="logo" className="w-auto h-10" />
          </NavLink>
        </div>
        <NavLink to='/home-page'>
          <img src={logo1} alt="logo" className="hidden lg:block w-25 my-auto cursor-pointer " />
        </NavLink>
        <div className={`${open ? 'block' : 'hidden'} shadow-2xl lg:shadow-none fixed lg:static my-auto py-4 lg:p-0 bg-color-1 w-[100%] lg:w-auto lg:flex xl:space-x-6 space-y-8 lg:space-y-0`}>
          <ul className={`ul ${open ? 'block' : 'hidden'} w-auto lg:flex lg:space-x-3 xl:space-x-6 space-y-8 lg:space-y-0 my-auto `}>
            {links.map((navLink: INavLink, index: number) => {
              return (
                <li key={index} className='li my-auto text-xl text-white'>
                  <NavLink
                    end={index === 0 ? true : false}
                    to={navLink.directory}
                    className={({ isActive }) => isActive ? 'btn-active font-semibold color-2' : 'btn-link font-semibold color-2'}
                    onClick={changeOpen}
                  >{navLink.title}</NavLink>
                </li>
              )
            })}
            <li className={`li my-auto text-sm`}>
              <NavLink
                to='/dang-nhap'
                className='btn-1 font-semibold text-xl bg-color-2 px-3 py-2 rounded-xl text-white'
                onClick={changeOpen}
              > Đăng nhập </NavLink>
            </li>
            <li className={`li my-auto text-sm`}>
              <NavLink
                to='/dang-ky'
                className='btn-1 font-semibold text-xl bg-color-2 px-3 py-2 rounded-xl text-white'
                onClick={changeOpen}
              > Đăng ký </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="menu sm:hidden lg:flex lg:flex-nowrap color-2 py-2 px-3 rounded-full gap-3">
                {links.map((navLink: INavLink, index: number) => {
                  return (
                    <NavLink
                      end={index === 0 ? true : false}
                      to={navLink.directory}
                      className={({isActive}) => isActive ? 'btn-active font-semibold px-3 py-1 m-auto text-xl bg-slate-800 rounded-full' : 'btn-link font-semibold px-3 py-1 m-auto text-xl bg-slate-800 rounded-full'}
                      onClick={changeOpen}
                    >
                      {navLink.title}
                    </NavLink>
                  )
                })}
              </div>

            </div>
            <div className="gr-2 flex items-center ml-auto gap-5">
              <div className="search relative">
                <input
                  type="text"
                  placeholder='Tìm kiếm'
                  className='relative color-2 text-sm text-neutral-700 w-64 h-10 rounded-2xl outline-none pl-10 text-base'/>
                <SearchIcon className='absolute left-2 top-2'/>
              </div>
              <span>Đăng nhập</span>
              <span>Đăng ký</span>
            </div> */}
      </nav>
    </header>
  )
}
export default Header;