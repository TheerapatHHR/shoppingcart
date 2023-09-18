import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import Items, { loader as itemloader } from './routes/Items'
import Checkout from './routes/Checkout';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Items />, loader: itemloader, 
      children:[
        { path: "/checkout", element: <Checkout /> }
      ]
    }
    ]
  }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
