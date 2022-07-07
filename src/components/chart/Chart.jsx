import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/*const data = [
  { name: "January", Total: 1200},
  { name: "February", Total: 2100},
  { name: "March", Total: 800},
  { name: "April", Total: 1600},
  { name: "May", Total: 900},
  { name: "June", Total: 1700},
  { name: "July", Total: 2100},
  { name: "August", Total: 700},
  { name: "September", Total: 1600},
  { name: "October", Total: 500},
  { name: "November", Total: 700},
  { name: "December", Total: 1100}
];
*/

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Julu',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = ({ aspect, title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" className="chartGrid"/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
         
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart