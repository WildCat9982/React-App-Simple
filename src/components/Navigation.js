import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const PADDING_TOP = 64
const Nav = styled.nav`
    padding: 1em;
    background: #7f3e9;

    @media (max-width: 700px) {
        padding-top: ${PADDING_TOP}px;
    }
    @medi (min-width: 700px) {
        postion: fixed;
        width: 220px;
        height: calc(100% -${PADDING_TOP}px);
        overflow-y: scroll;
    }
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333
    }
    a:hover,
    a:focus {
        color: #0077cc;
    }
`


export const Navigation = props => {
    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/">Payment</Link>
                </li>
                <li>
                    <Link to="/mybooks">My Books</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </NavList>
        </Nav>
    )
}

export default Navigation
