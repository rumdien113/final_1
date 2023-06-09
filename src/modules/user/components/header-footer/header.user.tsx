import './header-footer.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';

export interface INavLink {
  directory: string
  title: string
}
const links: INavLink[] = [
  { directory: '/hoc-tap', title: 'Học tập' },
  { directory: '/tutorial', title: 'Tutorial'},
  { directory: '/chia-se', title: 'Chia sẻ' },
  { directory: '/hoi-dap', title: 'Hỏi đáp'}
]

const Header = () => {
  const [open, setOpen] = useState(false)

  const changeOpen = () => setOpen(!open)
  return (
    <header className="min-w-screen color-1">
        <div className="container text-white grid grid-cols-2 py-5 px-6 flex items-center">
            <div className="gr-1 flex items-center place-content-center gap-10">
              <NavLink to={`/`} className={"flex items-center"}>
                <img src={logo} alt="logo" className="w-20 h-20 rounded-full"/>
                <span className="mr-auto text-4xl">WrCoding</span>
              </NavLink>
              <div className="menu sm:hidden lg:flex lg:flex-nowrap color-2 py-2 px-3 rounded-full gap-3">
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
            </div>
        </div>
    </header>
  )
}
export default Header;