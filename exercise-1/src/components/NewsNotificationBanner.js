import React from 'react'

export default function NewsNotificationBanner(props) {

    return (
        <div className="news-notification-banner">
            <p>
            <span className="banner-topic">{props.banner.topic}</span>: &nbsp;
            <span className="banner-body">{props.banner.body}</span>
            </p>
        </div>
        
    )
}

