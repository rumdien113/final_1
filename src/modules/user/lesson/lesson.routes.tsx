import { Route, Routes } from 'react-router-dom'
    import Python from './python/python.leson.tsx'
import Intro from './python/python.lesson/gioithieu'

const LessonRoutes = () => {
    return (
        <>
            <div className="mt-24 flex text-white">
                <Python />
                <Routes>
                    <Route path="/gioi-thieu" element={<Intro />} />
                    {/* <Route path="/hoc-tap" element={<Learn />}/>
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/chia-se" element={<Share />} />
                    <Route path="/hoi-dap" element={<Qa />} /> */}
                </Routes>
            </div>
            {/* <div className="wrap-user pt-12 lg:pt-0">
            </div> */}
        </>
    )
}

export default LessonRoutes