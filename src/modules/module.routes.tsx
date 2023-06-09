import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UseRoutes from "./user/user.routes"
import LoginPage from './user/auth/login.auth'
import RegisterPage from './user/auth/register.auth'
const theme = extendTheme({
    component: {
        Popover : {
            variants: {
                responsive: {
                    popper : {
                        maxWidth: 'unset',
                        width: 'unset'
                    }
                }
            }
        }
    }
})
const ModuleRoutes = () => {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Routes>
                    <Route path="/*" element={<UseRoutes />}/>
                    <Route path="/dang-nhap" element={<LoginPage />}/>
                    <Route path="/dang-ki" element={<RegisterPage />}/>
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}
export default ModuleRoutes