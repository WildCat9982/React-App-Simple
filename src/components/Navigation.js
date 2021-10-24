import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = props => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Payment</Link>
                </li>
                <li>
                    <Link to="/mybooks">My Books</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
