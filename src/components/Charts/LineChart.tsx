import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Line, LineChart, XAxis, YAxis,
} from 'recharts';

interface DataPoint {
  name: string;
  pv: number;
}

const LineCharts = () => {
  const data: DataPoint[] = [
    {
      name: 'Sat',
      pv: 3,
    },
    {
      name: 'Sun',
      pv: 5,
    },
    {
      name: 'Mon',
      pv: 2,
    },
    {
      name: 'Tues',
      pv: 4,
    },
    {
      name: 'Wed',
      pv: 5,
    },
    {
      name: 'Thurs',
      pv: 6,
    },
    {
      name: 'Fri',
      pv: 4,
    },
  ];

  return (
    <Box sx={{ background: '#2C2D2F', borderRadius: '20px', padding: '10px' }}>
      <LineChart width={600} height={230} data={data} style={{ marginLeft: '-40px' }}>
        <XAxis
          dataKey="name"
          style={{
            stroke: '#fff',
            fontWeight: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
          }}
        />
        <YAxis style={{ stroke: '#fff' }} />
        {/* <CartesianGrid stroke="#eee" strokeDasharray="0 0" /> */}
        <Line type="monotone" dataKey="pv" stroke="#FFDA3C" />
      </LineChart>
    </Box>
  );
};

export default LineCharts;
