import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Box } from '@mui/material';
import axios from 'axios';
import { task } from '../../interfaces';
import ENDPOINTS from '../../constants/endpoints';

const Calendar = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const endpoint = pathname.includes('project')
    ? `${ENDPOINTS.PROJECT}/${id}/task`
    : ENDPOINTS.TASKS;

  useEffect(() => {
    axios
      .get(endpoint, {
        withCredentials: true,
      })
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigator('/', { state: { error: err.response.data.message } });
        }
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
