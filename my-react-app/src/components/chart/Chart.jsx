import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


export default function Chart(){
    const data = [
        {
          name: 'Jan',
          averageSalary: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          averageSalary: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          averageSalary: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          averageSalary: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          averageSalary: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          averageSalary: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          averageSalary: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          averageSalary: 4000,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Sept',
          averageSalary: 4250,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Oct',
          averageSalary: 3550,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Nov',
          averageSalary: 4325,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Dec',
          averageSalary: 4000,
          pv: 4300,
          amt: 2100,
        },
      ];
    
    return(
        <div className="chart">
            <h3 className= "chartTitle">Payroll Analysis</h3>
             <ResponsiveContainer width= "100%" aspect={4 / 1}>
                 <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="averageSalary" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart> 

             </ResponsiveContainer>  
        </div>
    );

}
    
