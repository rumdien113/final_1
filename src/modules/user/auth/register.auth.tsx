import { Tooltip, useToast } from '@chakra-ui/react';
import Logo from '../../../assets/images/logo.png'
import VideoBg from '../../../assets/videos/bg-register.mp4'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [verify_password, setVerify_password] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [referrer_code, setReferrer_code] = useState('');
//   const toast = useToast({
//     position: 'top'
//   });
//   const navigate = useNavigate();
//   const isEmail = (email: string) =>
//     /^[A-Z0-9._%+-]+@(gmail.com|vku.udn.vn)$/i.test(email);
//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     if (!(
//       password.trim().length > 0 &&
//       verify_password.trim().length > 0 &&
//       firstName.trim().length > 0 &&
//       lastName.trim().length > 0 &&
//       phone.trim().length > 0 &&
//       email.trim().length > 0 &&
//       username.trim().length > 0)) {
//       toast({
//         title: 'Thiếu thông tin',
//         description: "Yêu cầu điền đầy đủ tất cả thông tin có kí hiệu * phía sau",
//         status: 'warning',
//         duration: 2000,
//         isClosable: true,
//       })
//       return;
//     }
//     if (verify_password.trim() !== password.trim()) {
//       toast({
//         title: 'Lỗi mật khẩu xác thực',
//         description: "Mật khẩu xác thực không trùng khớp với mật khẩu bạn đặt",
//         status: 'error',
//         duration: 2000,
//         isClosable: true,
//       })
//       return;
//     }
//     if (!isEmail(email)) {
//       toast({
//         title: 'Lỗi email',
//         description: "Địa chỉ email nhập vào chưa hợp lệ. Email sẽ có dạng như abc@gmail.com hoặc abc@vku.udn.vn",
//         status: 'error',
//         duration: 2000,
//         isClosable: true,
//       })
//       return;
//     }
//     toast({
//       title: 'Tạo tài khoản thành công',
//       description: "Tạo tài khoản thành công . Chào mừng bạn đến với THDD",
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     })
//     navigate('/')
//   }
//   return (
//     <main className="relative min-w-screen">
//       <video
//         disablePictureInPicture={true}
//         typeof='video/mp4'
//         src={VideoBg}
//         autoPlay={true}
//         controls={false}
//         loop={true}
//         muted={true}
//         className='md:absolute top-0 left-0 w-screen -z-50 cursor-none pointer-events-none'></video>
//       <div className="md:h-screen flex flex-col justify-center items-center">
//         <div className="wrap space-y-5 md:space-y-10 flex flex-col items-center px-7 py-8 rounded-lg">
//           <Tooltip label='Trang chủ'>
//             <NavLink to='/'>
//               <img src={Logo} alt="logo" className='logo w-24 h-24 rounded-full' />
//             </NavLink>
//           </Tooltip>
//           <div className="gr-form space-y-5">
//             <h1 className='font-extrabold text-2xl text-cyan-800 md:text-white text-center'>Tạo tài khoản của bạn</h1>
//             <form className='form flex flex-col items-center space-y-6'>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" required name='username'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setUsername(e.target.value)} />
//                   <label htmlFor="username" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Tài khoản người dùng <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" required name='firstName'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setFirstName(e.target.value)} />
//                   <label htmlFor="firstName" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Họ và tên đệm <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" required name='lastName'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setLastName(e.target.value)} />
//                   <label htmlFor="lastName" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Tên <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" required name='phone'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setPhone(e.target.value)} />
//                   <label htmlFor="phone" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Số điện thoại <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="password" required name='password'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setPassword(e.target.value)} />
//                   <label htmlFor="password" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Mật khẩu <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="password" required name='password_verify'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setVerify_password(e.target.value)} />
//                   <label htmlFor="password_verify" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Nhập lại mật khẩu <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" required name='email'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setEmail(e.target.value)} />
//                   <label htmlFor="email" className='label absolute top-3 left-3 cursor-none pointer-events-none text-gray-500'>Địa chỉ email <span className='text-yellow-500'>*</span></label>
//                 </div>
//                 <div className="gr-input relative flex flex-col border-[1px] border-cyan-800 rounded-sm">
//                   <input type="text" name='referrer_code'
//                     className='input outline-none  rounded-sm pl-2 w-72 h-12'
//                     onChange={(e: any) => setReferrer_code(e.target.value)}
//                     placeholder='Mã người giới thiệu (Không bắt buộc)'
//                   />
//                 </div>
//               </div>
//               <button
//                 className={`bg-custom-2 btn-submit-on w-72 h-12  rounded-sm text-white font-bold text-xl`}
//                 onClick={(e) => onSubmit(e)}>
//                 Đăng nhập
//               </button>
//             </form>
//             <p className='text-sm text-center'>
//               <span className="text-cyan-800 md:text-white"> Bạn đã có tài khoản?&nbsp;</span>
//               <NavLink to='/login' className='color-custom-1 border-b-[1px] border-b-cyan-700'>Đăng nhập ngay </NavLink>
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
const RegisterPage = () => {
    return (
        <div>Rgister Page</div>
    )
}

export default RegisterPage;