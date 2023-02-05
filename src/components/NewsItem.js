import React from 'react'
import {limitText} from '../helpers'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (  
    <div className='newsItem'>
        <span className="source">{source}</span>
        <div className='imageWrapper'>
            <img src={imageUrl ? imageUrl : 'https://www.woodlandshospital.in/images/academic/unavailable.png'}  className='image' alt={title} />
        </div>
        <div className="content">
            <h4 className='title'>{title.length < 80 ? title: `${limitText(title, 80)}...`}</h4>
            <p className='copy'>{description}</p>
            <p className='author'>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target="_blank" className='button' rel="noreferrer">Read Now</a>
        </div>
    </div>
  )
}

export default NewsItem

