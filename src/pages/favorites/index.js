import React, { useEffect } from 'react'

export const Favorites = () => {
    useEffect(() => {
        document.title = "My Favorites"   
    })
    return (
        <div>
            <p>These are my favorite books</p>
        </div>
    )
}

export default Favorites;