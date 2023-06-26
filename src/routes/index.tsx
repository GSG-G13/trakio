import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage, LoginPage, TaskBoard, AccountPage, Calendar, SignupPage
} from '../pages';
import { ProjectsCard, TaskTable } from '../components';
import HomeLayout from '../layout';
import data from '../fake';
import AddProject from '../components/AddProject';

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
            element: <ProjectsCard />,
          },
          {
            path: '/projects/addProject',
            element: <AddProject />,
          },
        ],
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
