import React from 'react'
import propTypes from 'prop-types'

import New from './New'

const Newslist = ({news}) => {
    return(
            <div className="row p-3 justify-content-center">
                {news.map(noticia => {
                    return (
                        <New key={noticia.url} noticia={noticia} />
                    )
                })}
            </div>
    )
}

Newslist.propTypes = {
    news : propTypes.array.isRequired
}


export default Newslist