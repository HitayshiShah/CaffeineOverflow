import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className = "topbarWrapper">
                <div className = "topLeft">
                    <span className="logo">CompanyName</span>
                </div>
                <div className = "topRight">Welcome to the Dashboard</div>
            </div>
        </div>
    )
}




