import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar";
import Chart from "./components/chart/Chart";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import "./application.css";
import {BrowseRouter as Router, Switch, Route} from "react-router-dom";
import Employees from "./Pages/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
         <Chart/> {/*change this to Employees to see the table */}
       
      </div>
        
      
    </div>
      
    
  );
}

export default App;
