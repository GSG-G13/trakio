import NAV_LIST from './nav';

const DRAWER_WIDTH = 260;

const PRIORITIES = [
  {
    id: 1,
    priority: 'high',
    color: '#F8524B',
  },
  {
    id: 2,
    priority: 'medium',
    color: '#FF8800',
  },
  {
    id: 3,
    priority: 'low',
    color: '#06C270',
  },
];
const SECTIONS = [
  {
    id: 1,
    section: 'To-Do',
  },
  {
    id: 2,
    section: 'Doing',
  },
  {
    id: 3,
    section: 'Reviewing',
  },
  {
    id: 4,
    section: 'Done',
  },
];

export {
  NAV_LIST, DRAWER_WIDTH, PRIORITIES, SECTIONS,
};
