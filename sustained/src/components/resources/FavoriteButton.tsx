import React, { useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa"

export function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    // edit to save to firebase database
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    if (isFavorite) {
        return (
            <button className='favorite-button' aria-label='Unfavorite the resource?' onClick={toggleFavorite}>
                <FaStar /> Favorited
            </button>
        )
    } else {
        return (
            <button className='favorite-button' aria-label='Favorite the resource?' onClick={toggleFavorite}>
                <FaRegStar /> Favorite?
            </button>
        )
    }
}