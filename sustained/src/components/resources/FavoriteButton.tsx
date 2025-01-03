import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { ResourceData } from "./ResourceCard";
import { FaRegStar, FaStar } from "react-icons/fa"

type FavoriteButtonProps = {
    resource: ResourceData;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({resource}) => {
    const db = getDatabase();
    const auth = getAuth();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setIsLoggedIn(true);
            const favoriteRef = ref(db, `users/${user.uid}/favorites/resources/${resource.title}`);
            onValue(favoriteRef, (snapshot) => {
                if (snapshot.exists()) {
                    setIsFavorited(true);
                }
            });
        } else {
            setIsLoggedIn(false);
        }
    }, [auth, db, resource.title]);

    const toggleFavorite = () => {
        const user = auth.currentUser
        if (user) {
            if (isFavorited) {
                const eventRef = ref(db, `users/${user.uid}/favorites/resources/${resource.title}`);
                remove(eventRef);
                setIsFavorited(false);
                console.log("resource successfully unfavorited")
            } else {
                const eventRef = ref(db, `users/${user.uid}/favorites/resources/${resource.title}`);
                set(eventRef, resource);
                setIsFavorited(true);
                console.log("resource successfully favorited")
            }
        } else {
            alert('You must be logged in to favorite resources!');
        }
    };
    
    return (
        <button onClick={toggleFavorite} className="resource-favorite-button">
          {isLoggedIn ? (isFavorited ? <FaStar size={24} color="gold" className="star"/> : <FaRegStar size={24} color="gray" className="star" />) : ''}
        </button>
      );

};

export default FavoriteButton