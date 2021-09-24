import React from 'react'

export default function SidebarMostRead(props) {
    return (
        <div className="most-read">
            <div>
            <span className="most-read-rank">{props.data.rank}</span>
            </div>
            <div>
            <span className="sidebar-topic-tittle">{props.data.topic} | </span>
            <span>{props.data.body.substring(0, 100)+"..."}</span>
            </div> 
        </div>
    )
}
