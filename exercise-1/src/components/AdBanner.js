import React from 'react'

export default function AdBanner(props) {
    return (
        <div>
            <div className="ad-notification-banner">
            <p>
            <span className="banner-topic">{props.banner.topic}</span>: &nbsp;
            <span className="banner-body">{props.banner.body}</span>
            </p>
            </div>
        </div>
        
    )
}
