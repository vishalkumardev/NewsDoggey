import React from 'react'
import NewsCard from './NewsCard';
// import Data from './Data'
import { useState, useEffect } from 'react';




function Newsitem(props) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [Data, setData] = useState([])
  const news = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b2bec38269a4a7ab665833a16afe05f`;
    const data = await fetch(url);
    props.setProgress(30);
    const parseddata = await data.json();
    props.setProgress(70);
    setData(parseddata.articles);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - `;
    news();
  }, [])




  return (
    <div className="container">
      <div className="row ">
        {Data.map((element) => {
          return <div className="col-lg-3 col-md-4 col-sm-6" key={element.url} >
            <NewsCard
              title={element.title}
              content={element.content}
              image={element.urlToImage}
              url={element.url} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Newsitem