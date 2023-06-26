import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage, LoginPage, TaskBoard, AccountPage, Calendar, SignupPage,
} from '../pages';
import { ProjectsCards, TaskTable } from '../components';
import HomeLayout from '../layout';
import data from '../fake';
import Overview from '../pages/Overview';

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
        path: '/projects',
        children: [
          {
            index: true,
            element: <ProjectsCards />,
          },
        ],
      },
      {
        path: '/overview',
        element: <Overview />,
      },
      {
        path: '/tasks',
        children: [
          {
            index: true,
            element: <TaskTable />,
          },
          {
            path: '/tasks/board',
            element: <TaskBoard tasks={data} />,
          },
          {
            path: '/tasks/calendar',
            element: <Calendar tasks={data} />,
          },
        ],
      },
      {
        path: '/account',
        element: <AccountPage />,
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
