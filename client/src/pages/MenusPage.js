import React, { useContext, useEffect } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantMenu from "../components/RestaurantMenu";

export default function MenusPage(){
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        loadRestaurants()
    }, [])

    const renderRestaurants = restaurants.map((restaurant) => {
        return(
            <RestaurantMenu key={restaurant.id} restaurant={restaurant}/>
        );
    })

    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Menus</h2>
            </div>
            <div className="menu-page-container">
                { renderRestaurants }
            </div>
        </div>
    );
}