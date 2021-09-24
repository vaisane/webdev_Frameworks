import React from 'react'
import {newsFeedData} from './newsData'
import {sideBarData} from './newsData'
import News from './News';
import SidebarMostRead from './SidebarMostRead';
export default function NewsContainer() {
    
   
    return (
        <div className="news-container">
            <div className="news-feed">
            {newsFeedData.map(e => <News data={e} key={e.topic}/>)}
            </div>
            <div className="sidebar-container">
            <div className="sidebar-header">Top 5 luetuimmat</div>
            {sideBarData.map(e => <SidebarMostRead data={e} key={e.topic}/>)}
            </div>
        </div>
    )
}
