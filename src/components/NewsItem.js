import React from "react";

const NewsItem =(props)=> {

    let { title, description, imageUrl, url, author, publishedAt } =  props;
    return (
      <div>
        <div className="card" style={{ width: `20rem`, height: `20rem` }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read in detail...
            </a>
            <p className  ="card-text"><small className="text-body-secondary"> by {!author?"Unknown":author} on {publishedAt}</small></p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
