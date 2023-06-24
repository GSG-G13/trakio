import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Bar,
  BarChart,
  Legend, Tooltip, XAxis, YAxis,
} from 'recharts';

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  wv: number;
}

const BarCharts = () => {
  const data: DataPoint[] = [
    {
      name: '0',
      uv: 8,
      pv: 9,
      wv: 4,
    },
    {
      name: '1',
      uv: 10,
      pv: 8,
      wv: 6,
    },
    {
      name: '2',
      uv: 2,
      pv: 9,
      wv: 4,
    },
    {
      name: '3',
      uv: 3,
      pv: 8,
      wv: 4,
    },
  ];

  return (
    <Box sx={{ background: '#2C2D2F', borderRadius: '20px', padding: '10px' }}>
      <BarChart
        width={470}
        height={230}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ marginLeft: '-40px' }}
      >
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
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#FFDA3C" />
        <Bar dataKey="uv" fill="#7C80B1" />
        <Bar dataKey="wv" fill="#D8D8D4" />
      </BarChart>
    </Box>
  );
};

export default BarCharts;
