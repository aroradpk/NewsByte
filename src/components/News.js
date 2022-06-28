import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsByte`;


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsByte`;
    updateNews();
  },[])
  

  // const prevClickHandler = async() => {
  //   setPage(page-1)
  //   updateNews();
  // }

  // const nextClickHandler = async() => {  
  //   setPage(page+1)
  //   updateNews();
  // }
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    if (articles.length >= totalResults){
      setHasMore(false)
      return;
    }
  };

    return (
      <>
        <h1 className="text-center my-3" style={{margin: '35px 0px', paddingTop: '60px'}}>NewsByte - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          // endMessage = {<center><h6 style={{color:'grey'}}>Thats All for Now...</h6></center>}
          >
            <div className="container">
          <div className='row my-3'>
            {articles.map((element) => {
             
              return <div className='col-md-4' key={element.url}> 
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage ? element.urlToImage : "https://www.masscommunicationtalk.com/wp-content/uploads/2011/10/News-handing-665x435.gif"} newsUrl={element.url} author={element.author ? element.author : "Anonymous"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={prevClickHandler}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={nextClickHandler}>Next &rarr;</button>
        </div> */}

      </>
    )
  
}
News.defaultProps = {
  country: "in",
  pageSize: "9"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News