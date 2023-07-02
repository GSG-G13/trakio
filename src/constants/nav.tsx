import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MdDashboard } from 'react-icons/md';

const NAV_LIST = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
  {
    title: 'Tasks',
    path: '/mytask',
    icon: (
      <FormatListNumberedIcon sx={{ fontSize: 24, color: 'custom.white' }} />
    ),
  }, {
    title: 'Projects',
    path: '/myprojects',
    icon: (
      <MdDashboard style={{ fontSize: 24 }} sx={{ color: 'custom.white' }} />
    ),
  },
  {
    title: 'Account',
    path: '/account',
    icon: <AccountCircleIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
];

export default NAV_LIST;
