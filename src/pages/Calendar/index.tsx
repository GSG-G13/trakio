import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Box } from '@mui/material';
import THEME from '../../theme';
import iTask from '../../interfaces';

const Calendar = ({ tasks }: iTask) => {
  const colors: string[] = ['#FF0000',
    '#00FF00',
    '#0000FF',
    '#FF00FF',
    '#00FFFF',
    '#800080',
    '#FFA500',
    '#008000',
    '#800000',
    '#FFC0CB',
    '#000080'];

  return (
    <Box color={THEME.palette.custom.gray}>
      <FullCalender
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={
          tasks?.map((task) => ({
            title: task.title,
            start: task.created_at,
            end: task.due_date,
            color: colors[Math.floor(Math.random() * colors.length)],
          }))
        }
      />
    </Box>
  );
};

export default Calendar;
