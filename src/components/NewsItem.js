import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card my-2" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex: '1'}}>
                {source}
              </span>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toLocaleString("en-US")}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem