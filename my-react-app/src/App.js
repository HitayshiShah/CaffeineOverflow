import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar";
import Chart from "./components/chart/Chart";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import "./application.css";
import { Router, Switch, Route, Routes } from "react-router-dom";
import Employees from "./Pages/Employees/Employees";

import RecordList from "./components/recordList";

// function App() {
//   return (
//     <div className="App">
//       {/* <Topbar/> */}
//       <div className="container">
//         {/* <Sidebar/>
//          <Chart/> change this to Employees to see the table */}

//       </div>

//     </div>


//   );
// }

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/">
          <RecordList />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
