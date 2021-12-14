import "./chart.css";
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      d1: 5
    };

    this.decrease = this.decrease.bind(this);
  }

  decrease(e) {
    e.preventDefault();
    const d1 = this.state.d1;
    this.setState({ d1: d1 - 1 });
  }

  render() {
    return (
      <div>
        <Chart />
        <LineChart labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']} data={[[this.state.name, this.state.averageSalary, this.state.pv, this.state.amt]]} />
      </div>
    );
  }
}

return (
  <div className="chart">
    <h3 className="chartTitle">Payroll Analysis</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey="averageSalary" stroke="#5550bd" />
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
      </LineChart>

    </ResponsiveContainer>
  </div>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

