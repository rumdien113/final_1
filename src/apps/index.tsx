import { BrowserRouter, useRoutes } from 'react-router-dom';
import '../styles/App.scss'
import HomePage from "./pages";
import { ChakraProvider } from '@chakra-ui/react';
const RouteSetUp = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: ''}
  ]);
  return routes;
}
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RouteSetUp />
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;