import React from 'react'
import "./topbar.css"
{/*import { AssignmentIndIcon } from "@mui/icons-material";*/ }

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className = "topbarWrapper">
                <div className = "topLeft">
                    <span className="logo">VHR</span>
                </div>
                {/*<AssignmentIndIcon/> */}
                <div className="topRight">Welcome to your Dashboard</div>
            </div>
        </div>
    )
}




