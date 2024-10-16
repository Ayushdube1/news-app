import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page :1
        }
    }
    async componentDidMount(){
       let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=7d74b1c9d8c34437bad3dc32479d944f&page=${this.state.page}&pageSize=10`;
       let res = await fetch(url);
       let parsedData = await res.json();
       this.setState({
        articles : parsedData.articles,
        
       })
    }
    handleNextClick = async ()=>{
        let url=  `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=7d74b1c9d8c34437bad3dc32479d944f&page=${this.state.page +1}&pageSize=10`;
        let res = await fetch(url);
        let parsedData = await res.json();
        this.setState({
         articles : parsedData.articles,
         page : this.state.page +1
        })
    }
    handlePrevClick = async ()=>{
        let url=  `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=10`;
        let res = await fetch(url);
        let parsedData = await res.json();
        this.setState({
         articles : parsedData.articles,
         page : this.state.page -1
        })
    }
  render() {

    return (
      <div>
        <h1 className ="text-center" style={{marginBottom :"30px"}} >NewsMONK - news api</h1>
        <div className="container ">
            <div className="row my-3">
            {
                this.state.articles.map((element)=>{
                    return <div className="col-md-4" key ={element.url} >
                        <NewsItem title = {element.title} description = {element.description} imageUrl ={element.urlToImage} newsUrl = {element.url} />
                    </div>
                })
            }

                
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil()}  className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
            </div>

        </div>
      </div>
    )
  }
}
