import "./sidebar.css"
import Topbar from "../../components/topbar/Topbar";
import Employees from "../../Pages/Employees/Employees";
import Chart from "../../components/chart/Chart";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: "/",
        main: () => < Chart />,
        sidebar: () => <div></div>
       
    },
    {
        path: "/Employees",
        main: () => < Employees />,
        sidebar: () => <div></div>
        
    }
];

export default function Sidebar() {
    return (
        <Router>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebarList">
                    <h2 className="sidebarTitle">Navigation</h2>
                    <ul className="nav">
                        <li>
                            <Link to="/">DashBoard</Link>
                        </li>
                        <li><Link to="/Employees">Employees</Link></li>
                    </ul>


                    <Routes>
                        {routes.map(({ path, sidebar }) => (
                            <Route
                                key={path}
                                path={path}
                                element={sidebar()}
                            />
                        ))}
                    </Routes>
                </div>
                </div>
                </div>
                
                <Routes>
                    
                    {routes.map(({ path, main }) => (
                        <Route
                            key={path}
                            path={path}
                            element={main()}
                        />
                    ))}
                </Routes>
                
        </Router>
    );
}
    






