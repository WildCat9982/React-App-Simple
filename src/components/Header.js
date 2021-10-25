import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'

const HeaderBar = styled.header`
    width: 100%:
    padding: 0.5em
`

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="SVG logo" height="40" />
        </header>
    )
}
