import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantCard from "../components/RestaurantCard";
import { Button } from "react-bootstrap";
import CreateRestaurantModal from "../components/CreateRestaurantModal";

export default function Restaurants(){
    const { user } = useContext(UserContext)
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext)
    const [modalShow, setModalShow] = useState(false);

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
        <div className="restaurants-page">
            <h2 className="dashboard-heading" 
            variant="feedplan-dark-mist">
                Restaurants</h2>

                <div className="restaurants-container">
                    {renderRestaurantCards}
                    {renderRestaurantCards}
                    {renderRestaurantCards}
                </div>
                <div>
                    <Button
                        variant="outline-feedplan-dark" onClick={() => setModalShow(true)}
                        style={{ marginTop: "3rem"}}>
                        Create Restaurant
                    </Button>

                    <CreateRestaurantModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
        </div>
    );
}