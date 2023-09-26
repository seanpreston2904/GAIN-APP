import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import LoginPage from './pages/login/LoginPage'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
