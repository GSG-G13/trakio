import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage, LoginPage, TaskBoard, AccountPage,
} from '../pages';
import { ProjectsCard, TaskTable } from '../components';
import HomeLayout from '../layout';
import data from '../fake';

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
        element: <ProjectsCard />,
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
]);

export default router;
