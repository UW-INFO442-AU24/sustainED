import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Event } from './eventcards';
import { FaRegStar, FaStar } from "react-icons/fa"

type FavoriteButtonProps = {
    event: Event;
}

const EventFavoriteButton: React.FC<FavoriteButtonProps> = ({event}) => {
    const db = getDatabase();
    const auth = getAuth();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setIsLoggedIn(true);
            const favoriteRef = ref(db, `users/${user.uid}/favorites/events/${event.id}`);
            onValue(favoriteRef, (snapshot) => {
                if (snapshot.exists()) {
                    setIsFavorited(true);
                }
            });
        } else {
            setIsLoggedIn(false);
        }
    }, [auth, db, event.id]);

    const toggleFavorite = () => {
        const user = auth.currentUser
        if (user) {
            if (isFavorited) {
                const eventRef = ref(db, `users/${user.uid}/favorites/events/${event.id}`);
                remove(eventRef);
                setIsFavorited(false);
                console.log("event successfully unfavorited")
            } else {
                const eventRef = ref(db, `users/${user.uid}/favorites/events/${event.id}`);
                set(eventRef, event);
                setIsFavorited(true);
                console.log("event successfully favorited")
            }
        } else {
            alert('You must be logged in to favorite events!');
        }
    };
    
    return (
        <button onClick={toggleFavorite} className="favorite-button">
          {isLoggedIn ? (isFavorited ? <FaStar size={24} color="gold" className="star"/> : <FaRegStar size={24} color="gray" className="star" />) : ''}
        </button>
      );

};

export default EventFavoriteButton