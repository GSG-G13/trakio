import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  TaskBoard,
  AccountPage,
  Calendar,
  SignupPage,
  Overview,
  FilePage,
} from '../pages';
import { ProjectsCards, TaskTable } from '../components';

import HomeLayout from '../layout';
import ClientError from '../pages/Errors/clientError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ClientError />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/mytask',
        children: [
          {
            index: true,
            element: <TaskTable />,
          },
          {
            path: 'board',
            element: <TaskBoard />,
          },
          {
            path: 'calendar',
            element: <Calendar />,
          },
        ],
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/myproject',
        element: <ProjectsCards />,
      },
      {
        path: '/project/:id',
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: 'list',
            element: <TaskTable />,
          },
          {
            path: 'board',
            element: <TaskBoard />,
          },
          {
            path: 'calendar',
            element: <Calendar />,
          },
          {
            path: 'files',
            element: <FilePage />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

export default router;
