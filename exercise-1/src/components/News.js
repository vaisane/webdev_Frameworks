import React from 'react'

export default function News(props) {
    return (
        <div className="main-news">
            <div>{props.data.image}</div>
            <span className="news-topic">{props.data.topic} | </span>
            <span className="news-body">{props.data.body}</span>
            <div className="news-footer">
                <div>{props.data.category}</div>
                <div>{props.data.time}</div>
            </div>        
        </div>
    )
}
