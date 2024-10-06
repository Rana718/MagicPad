import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Home from './Home';

const paths = [
  {
    path: '/',
    element: <Home />
  }
];

const BrowserRouter = createBrowserRouter(paths);

function App() {

  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}/>
    </MantineProvider>
  )
}

export default App
