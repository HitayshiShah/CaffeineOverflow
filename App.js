import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar";
import Chart from "./components/chart/Chart";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import "./application.css";
import Employees from "./Pages/Employees/Employees";


 export default function App() {
  return ( 
    <div className="App">
          <Topbar/>
          <div className="container">
              <Sidebar />
              {/* <Chart />*/}
             
      </div>
    </div> 
  );
}






