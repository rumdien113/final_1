import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UseRoutes from "./user/user.routes"
import Login from './user/auth/register.auth'
import Register from './user/auth/login.auth'
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
                    <Route path="/dang-nhap" element={<Login />}/>
                    <Route path="/dang-ky" element={<Register />}/>
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    )
}
export default ModuleRoutes