import React from 'react'
import propTypes from 'prop-types'


const New = ({noticia}) => {
    const {urlToImage, content, url, title} = noticia

    const image = (urlToImage) ?
        <img className="card-img-top" src={urlToImage} alt={title} />

    : null;

    return(
        <div className="col-sm-12 col-md-5 col-lg-4 my-2 mx-auto">
            <div className="container card p-3 my-2 h-100">
                {image}
                <div className="card-title my-2 border-bottom">
                    <h6> {title} </h6>
                </div>
                <div className="card-content">
                    <p>
                        {content}
                    </p>
                </div>
                <div className="">
                    <a href={url} >Ver noticia completa</a>
                </div>
            </div>
        </div>
    )
}

New.propTypes = {
    noticia : propTypes.object.isRequired
}

export default New