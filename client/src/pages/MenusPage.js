import React, { useContext, useEffect } from "react";

import { RestaurantsContext } from "../context/RestaurantsContext";
import { MenuContextProvider } from "../context/MenuContext";

import RestaurantMenu from "../components/RestaurantMenu";


export default function MenusPage(){
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        loadRestaurants()
    }, [])

    const renderRestaurants = restaurants.map((restaurant) => {
        return(
            <MenuContextProvider key={restaurant.id} >
                <RestaurantMenu
                    restaurant={restaurant}/>
            </MenuContextProvider>
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