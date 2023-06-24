import { createBrowserRouter } from 'react-router-dom';
import { HomePage, TaskBoard } from '../pages';
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
    ],
  },
]);

export default router;
