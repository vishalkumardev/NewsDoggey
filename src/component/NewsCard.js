import React from 'react'

function NewsCard(props) {
    var { image, title, content, url } = props;
    return (
        <div className='my-3'>
            <div className="card shadow border border-danger " >
                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body">
                    <h6 className="card-title fw-bold">{title}</h6>
                    <p className="card-text ">{content}</p>
                    <a href={url} className="btn btn-primary ">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard