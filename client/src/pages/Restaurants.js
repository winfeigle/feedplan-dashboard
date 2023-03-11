import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

export default function Restaurants(){
    const { user } = useContext(UserContext)
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        loadRestaurants(user.id)
    }, [])

   

    return(
        <div>
            <div className="restaurant-container-TEST">
                {restaurants.map((restaurant) => {
                    return(
                        <div className="restaurant-card-TEST" 
                        key={restaurant.id}
                        style={{
                            padding: "0px 20px"
                            }}
                        >
                            <img 
                                src={restaurant.icon_url} style={{
                                    width: '50px', borderRadius: "50%",
                                    marginRight: "10px"
                                    }}
                                />
                            <p>{restaurant.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}