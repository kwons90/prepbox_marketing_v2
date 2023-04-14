import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout/layout';
import Home from './pages/home';

// If you would like to add more pages, import and add in the (children) array of objects similar to the bellow code that I commentted it out
// => Path must be specified for other pages
// Layout component contains Header Navigation & Footer

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            // { path: 'about', element: <ABout /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
