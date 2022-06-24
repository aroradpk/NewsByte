import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize: "9"
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsByte`;
  }

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f93c6c49346499a8c4834528b9321c1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults : parsedData.totalResults, loading : false })
  }

  async componentDidMount() {
    this.updateNews();
  }

prevClickHandler = async() => {
  this.setState({page : this.state.page - 1});
  this.updateNews();
}

nextClickHandler = async() => {
  this.setState({page : this.state.page + 1});
  this.updateNews();
}

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsByte - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row my-3'>
          {!this.state.loading && this.state.articles.map((element) => {
            let { url, title, description, urlToImage } = element
            return <div className='col-md-4' key={url}>
              <NewsItem title={element.title ? title.slice(0, 46) : ""} description={element.description ? description.slice(0, 88) : ""} urlToImage={element.urlToImage ? urlToImage : "https://www.masscommunicationtalk.com/wp-content/uploads/2011/10/News-handing-665x435.gif"} newsUrl={url} author={element.author?element.author:"Anonymous"} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClickHandler}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClickHandler}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News