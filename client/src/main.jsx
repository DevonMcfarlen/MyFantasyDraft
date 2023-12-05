import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import pages 
import Cards from './pages/Cards.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<LandingPage/>
      },
      {
        path:'cards',
        element: <Cards/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'profile',
        element: <Profile/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
// )



