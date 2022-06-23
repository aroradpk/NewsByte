import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6f93c6c49346499a8c4834528b9321c1&page=1&pageSize=20";
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults : parsedData.totalResults })
  }

prevClickHandler = async() => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f93c6c49346499a8c4834528b9321c1&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles })
}

nextClickHandler = async() => {
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f93c6c49346499a8c4834528b9321c1&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page + 1,
       articles: parsedData.articles })
  }
  
}

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Newsaholic - Top Headlines</h1>
        <div className='row my-3'>
          {this.state.articles.map((element) => {
            let { url, title, description, urlToImage } = element
            return <div className='col-md-4' key={url}>
              <NewsItem title={element.title ? title.slice(0, 46) : ""} description={element.description ? description.slice(0, 88) : ""} urlToImage={element.urlToImage ? urlToImage : "https://www.masscommunicationtalk.com/wp-content/uploads/2011/10/News-handing-665x435.gif"} newsUrl={url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClickHandler}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.nextClickHandler}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News