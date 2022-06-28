import React from 'react'

const NewsItem = (props) => {
 
    let { title, description, urlToImage, newsUrl, author, date, source } = props
    return (
      <div>
        <div className="card my-2" >
          <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0' }}>
        <span className="position-absolute  badge rounded-pill bg-danger">
                {source}
              </span>
              </div>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toLocaleString("en-US")}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>

        </div>
      </div>
    )
 
}

export default NewsItem