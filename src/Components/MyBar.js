import React from 'react'
import '../Style/style.css'
import End from './End'
import MyToolBar from './MyToolBar'
import MyWhiteBar from './MyWhiteBar'
import Sidebar from './Sidebar'


export default function MyBar() {
    return (
        <div>
            <div className="header">
                <Sidebar />
                <MyWhiteBar />
                <br />

                <MyToolBar />
            </div>


            <End />
        
        </div>
    )
}
