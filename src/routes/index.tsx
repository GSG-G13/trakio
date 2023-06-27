import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  TaskBoard,
  AccountPage,
  Calendar,
  SignupPage,
  Overview,
} from '../pages';
import { ProjectsCard, TaskTable } from '../components';
import HomeLayout from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
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
            path: '/mytask/board',
            element: <TaskBoard />,
          },
          {
            path: '/mytask/calendar',
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
        element: <ProjectsCard />,
      },
      {
        path: '/project/:id',
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: '/project/:id/list',
            element: <TaskTable />,
          },
          {
            path: '/project/:id/board',
            element: <TaskBoard />,
          },
          {
            path: '/project/:id/calendar',
            element: <Calendar />,
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
