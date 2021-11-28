import "./sidebar.css"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="Item">
                            Users
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}