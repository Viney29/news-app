import React,{useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Loader from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props) => {
  const headingStyles = {
    textAlign: 'center',
    margin: '20px',
    fontSize: '28px',
    lineHeight: '40px',
    textTransform: 'capitalize'
  }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const newsData = async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page={${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(()=>{
      newsData();
    },[])

    const fetchMoreNews = async () => {   
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1) 
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };
  return (
    <div className='news'>
    <h2 className='heading' style={headingStyles}> Top {props.category} - Headlines Today </h2>
    {loading && <Loader/>}
    <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={articles.length !== totalResults}
        loader={<Loader/>}
    > 
      <div className='row'> 
      {articles.map((item) => {
        return <NewsItem title={item.title ? item.title : ''} description={item.description ? item.description : ''} source={item.source.name} imageUrl={item.urlToImage} newsUrl={item.url} date={item.publishedAt} author={item.author}/>
      })}
    </div>
    </InfiniteScroll>
  </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News



