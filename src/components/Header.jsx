import React from 'react'

const Header = ({titulo}) => {
    return (
        <nav className="navbar navbar-light bg-light d-flex justify-content-center">
            <h1 className="mb-0">{titulo}</h1>
        </nav>
    )
}

export default Header