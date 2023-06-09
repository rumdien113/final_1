import './header-footer.scss'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../../assets/images/logo.png'
import { INavLink } from  './header.user'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { isEmail } from '../../../../utils/validate'

const links: INavLink[] = [
    { directory: '/', title: 'Trang chủ' },
    // { directo }
]
interface ILinkConnect {
    directory: string,
    icon: any
}
const linkConnects: ILinkConnect[] = [
    {
        directory: 'https://www.facebook.com/Rumdien',
        icon: <FacebookIcon style={{
            fontSize: '50px'
        }} />
    },
    {
        directory: 'https://www.instagram.com/matthaeus_tien_dat/',
        icon: <InstagramIcon style={{
            fontSize: '50px'
        }} />
    },
    {
        directory: 'https://github.com/rumdien113',
        icon: <GitHubIcon style={{
            fontSize: '50px'
        }} />
    },
]

const Footer = () => {
    const [email, setEmail] = useState()
    const toast = useToast({
        position: 'top'
    })
    const handleSubmit = () => {
        if(!email) {
            toast({
                title: 'Lỗi trống vùng dữ liệu',
                description: 'Vui lòng nhập email vào chỗ trống',
                status: 'error',
                duration: 2000,
                isClosable: true
            })
            return
        }
        if(isEmail(email)) {
            toast({
                title: 'Thành công',
                description: `Đã đăng kí nhận thông báo thành công với email: ${email}`,
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        } else {
            toast({
                title: 'Lỗi biểu thức',
                description: 'Email không hợp lệ, vui lòng kiểm tra lại',
                status: 'error',
                duration: 2000,
                isClosable: true
            })
        }
    }
    return (
        <footer className="min-w-screen color-1">
            <div className="container mx-auto text-white lg:grid lg:grid-cols-3 lg:gap-8 py-5 px-6 flex flex-col justify-center items-center space-y-6">
                <div className="gr-1 flex flex-col items-center lg:block font-1 space-y-2 text-sm">
                    <NavLink to={`/`}>
                        <img src={logo} alt="logo" className='w-24 h-24 rounded-full' />
                    </NavLink>
                    <p>Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</p>
                    <p>Copyright 2023 &copy; Coding</p>
                </div>
                <div className="gr-2 flex flex-col items-center lg:block space-y-2 text-sm">
                    {links.map((link: INavLink, index: number) => {
                        return (
                            <div className="gr-link transition-all hover:scale-105" key={index}>
                                <NavLink to={link.directory} className={`font-1`}>
                                    {link.title}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
                <div className="gr-3 flex flex-col items-center lg:block space-y-2">
                    <h1 className="hashtag font-semibold text-xl xl:text-2xl">#mylifemycoding</h1>
                    <div className="gr-connect">
                        <h2 className="text-sm font1">Kết nối với chúng tôi</h2>
                        <div className="gricon-connect flex justify-center items-center lg:block">
                            {linkConnects.map((item: ILinkConnect, index: number) => {
                                return (
                                    <NavLink to={item.directory} key={index}>
                                        {item.icon}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    <div className="gr-follow-me flex flex-col items-center lg:block">
                        <label>Theo dõi tin tức của chúng tôi</label>
                        <div className="gr-input relative inline-block pl-1">
                            <input type="text" placeholder='Nhập email của bạn' className='color-custom-1 text-sm text-neutral-700 w-64 h-10 rounded-2xl outline-none pl-4' onChange={(e: any) => { setEmail(e.target.value) }} />
                            <button className='btn-register-footer color-1 w-20 h-10 absolute right-0 rounded-2xl hover:scale-105 transition-all text-sm font-1' onClick={handleSubmit}>Đăng kí</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer