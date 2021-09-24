import React from 'react'
import NewsNotificationBanner from './NewsNotificationBanner';
import AdBanner from './AdBanner';



export default function NewsBody() {
    const notificationBannerData  = [
        {topic: "NYT.fi", body: "Nostrud labore ea dolor id qui esse esse enim magna Lorem Lorem est non."},
        {topic: "KORONA", body: "Ad ut aute nostrud pariatur laborum excepteur."},
        {topic: "Lorem ipsum", body: "Aliqua mollit ut qui dolore in."}
      ];
    const adData = [
        {topic: "MAINOS", body: "Osta heti, hyvä hinta!!! -80%!!"}
    ];
    
      console.log(notificationBannerData);
    return (
        <div className="banner-container">
            {notificationBannerData.map(e => <NewsNotificationBanner banner={e} key={e.topic}/>)}
            {adData.map(e => <AdBanner banner={e} key={e.topic}/>)}
        </div>
    )
}
