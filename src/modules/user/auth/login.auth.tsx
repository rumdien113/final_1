import { NavLink, useNavigate } from 'react-router-dom';
// import '../../../styles/login-register.scss'
import { useState } from 'react';
import { Tooltip, useToast } from '@chakra-ui/react';
const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const toast = useToast({
//     position: 'top'
//   });
//   const navigate = useNavigate()
//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     if (!(username.trim().length > 0 && password.trim().length > 0)) {
//       toast({
//         title: 'Thiếu thông tin',
//         description: "Yêu cầu điền đầy đủ tất cả thông tin có kí hiệu * phía sau",
//         status: 'warning',
//         duration: 2000,
//         isClosable: true,
//       })
//       return;
//     }
//     toast({
//       title: 'Đăng nhập thành công',
//       description: "Đăng nhập thành công . Chào mừng bạn đến với THDD",
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     })
//     navigate('/')
//   }
  return (
//     <main className='relative min-w-screen '>
//         <video
//         disablePictureInPicture={true}
//         typeof='video/mp4'
//         src={VideoBg}
//         autoPlay={true}
//         controls={false}
//         loop={true}
//         muted={true}
//         className='md:absolute top-0 left-0 w-screen -z-50 cursor-none pointer-events-none'></video>
//       <div className="md:h-screen flex flex-col justify-center items-center ">
//         <div className="wrap space-y-5 md:space-y-14 flex flex-col items-center px-7 py-8 rounded-lg">
//           <Tooltip label='Trang chủ'>
//             <NavLink to='/'>
//               <img src={Logo} alt="logo" className='logo w-24 h-24 rounded-full' />
//             </NavLink>
//           </Tooltip>
//           <div className="gr-form space-y-5">
//             <h1 className='font-extrabold text-2xl text-cyan-800 md:text-white text-center'>Chào mừng trở lại</h1>
//             <form className='form flex flex-col items-center space-y-4'>
//               <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                 <input type="text" required name='username'
//                   className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                   onChange={(e: any) => setUsername(e.target.value)} />
//                 <label htmlFor="username" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Tài khoản người dùng <span className='text-yellow-500'>*</span></label>
//               </div>
//               <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                 <input type="password" required name='password'
//                   className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                   onChange={(e: any) => setPassword(e.target.value)}
//                 />
//                 <label htmlFor="password" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Mật khẩu <span className='text-yellow-500'>*</span></label>
//               </div>
//               <button
//                 className={`bg-custom-2 btn-submit-on w-72 h-12  rounded-sm text-white font-bold text-xl`}
//                 onClick={(e) => onSubmit(e)}>
//                 Đăng nhập
//               </button>
//             </form>
//             <p className='text-sm text-center'>
//               <span className="text-cyan-800 md:text-white"> Bạn chưa có tài khoản?&nbsp;</span>
//               <NavLink to='/register' className='color-custom-1 border-b-[1px] border-b-cyan-700'>Đăng kí ngay </NavLink>
//             </p>
//           </div>
//         </div>
    <div>Login</div>
  )
}
export default LoginPage;