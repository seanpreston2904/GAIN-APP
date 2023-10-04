import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import LoginPage from './pages/login/LoginPage'
import MealCreator from './pages/dashboard/mealcreator/MealCreator'
import Home from './pages/dashboard/home/Home'
import AccountSettings from './pages/accountSettings/AccountSettings'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "accountsettings",
      element: <AccountSettings/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "mealcreator",
          element: <MealCreator/>
        },
        {
          path: "",
          element: <Home/>
        }
      ]
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
