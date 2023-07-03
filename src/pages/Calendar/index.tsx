import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Box } from '@mui/material';
import axios from 'axios';
import { task } from '../../interfaces';

const Calendar = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const endpoint = pathname.includes('project')
    ? `/api/project/${id}/task`
    : '/api/tasks';

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => {
        navigator('/', { state: { error: err.response.data.message } });
      });
  }, [pathname]);

  return (
    <Box color="custom.white">
      <FullCalender
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={tasks?.map((item) => ({
          title: `Assignee: ${item.name} | Title: ${item.title}`,
          description: item.name,
          start: item.created_at,
          end: item.due_date,
          color: item.color,
        }))}
      />
    </Box>
  );
};

export default Calendar;
