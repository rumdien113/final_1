import { Route, Routes } from "react-router-dom";
import Header from "./components/header-footer/header.user";
import Footer from "./components/header-footer/footer.user";
import HomePage from "./home/page.home";
import Learn from "./learn/page.learn";
import Tutorial from './tutorial/page.tutorial'
import Share from "./share/page.share";
import Qa from "./ques-ans/page.qa";
// import LessonRoutes from "./lesson/lesson.routes";
import Detail from "./lesson/courses/detail.courses";

const UserRoutes = () => {
    return (
        <>
            <Header />
            <div className="wrap-user pt-12 lg:pt-0">
                <Routes>
                    {/* <Route path="/*" element={<LessonRoutes />} /> */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home-page" element={<HomePage />} />
                    <Route path="/hoc-tap" element={<Learn />}/>
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/tutorial/:id" element={<Detail />} />
                    <Route path="/tutorial/:id/:lesson" element={<Detail />} />
                    <Route path="/chia-se" element={<Share />} />
                    <Route path="/hoi-dap" element={<Qa />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default UserRoutes