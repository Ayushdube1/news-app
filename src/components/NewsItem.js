import React, { Component } from 'react'

export default class NewsItem extends Component {
   
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/2ec6/live/788c84b0-7762-11ef-861f-71b4ea79cd37.jpg"}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description} </p>
    <a href={newsUrl} rel="noreferrer" className="btn btn-primary btn-sm" target ="_blank" >Read More</a>
  </div>
</div>
      </div>
    )
  }
}
