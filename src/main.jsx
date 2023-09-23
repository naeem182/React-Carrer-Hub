import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Components/Home/Home'
import Root from './Components/Root/Root'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import ErrorPage from './ErrorPage/ErrorPage'
import JobDetails from './JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },

      {
        path: '/job/:id',
        loader: () => fetch('jobs.json'),
        element: <JobDetails></JobDetails>
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
