import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner1 from "./Spinner1";
import PropTypes from 'prop-types'


const News =(props)=> {

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(false)
const [page, setPage ]= useState(1)
const [noArticles, setNoArticles] = useState(0)



useEffect(()=>{
  const fetchData = async ()=>{

  
  let url =
  `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${page}&pageSize=${ props.pageSize}`;
let data = await fetch(url);
let parsedData = await data.json();
setArticles(parsedData.articles)
setNoArticles(parsedData.totalResults)
  }
  fetchData();
  //eslint-disable-next-line
},[])


  const handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${page - 1}&pageSize=${ props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setPage(page -1)
    setArticles(parsedData.articles)
    setLoading(false)
   
  };

  const handelNextClick = async () => {
    

      let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apiKey}&page=${
        page + 1
      }&pageSize=${ props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();

      setPage(page+1)
      setArticles(parsedData.articles)
      setLoading(false)
      
  };

    return (
      <>
        <div className="container my-2 ">
          <h2 className="text-center" style={{margin:'35px 0px',marginTop:'70px'}}>NewsMonkey - Top Headlines </h2>
        {loading && <Spinner1/>}
          <div className="row">
            { !loading && articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 50) + "...."}
                    //   description={element.description.slice(0, 10) + "...."}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author ={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between" >
        <button type="button" disabled={page===1} className="btn btn-dark my-3" onClick={handelPreviousClick}>Previous</button>
        <button type="button" disabled={page+1>= Math.ceil(noArticles/  props.pageSize)} className="btn btn-dark my-3" onClick={handelNextClick}>Next</button>
        </div>
      </>
    );
  
}

News.defalutProps = {
  country: 'in',
  pageSize: 12,
category: 'general',
  }
  

News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string,


}

export default News;
