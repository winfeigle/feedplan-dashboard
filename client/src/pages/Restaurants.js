import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants(){
    const { user } = useContext(UserContext)
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        loadRestaurants(user.id)
    }, [])

    const renderRestaurantCards = restaurants.map((restaurant) => {
        return(
            <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant}
                />
        );
    });

   

    return(
        <div className="restaurants-container">
            <h2 className="dashboard-heading" variant="feedplan-dark-mist">Restaurants</h2>
            {renderRestaurantCards}
        </div>
    );
}