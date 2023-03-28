import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

import RestaurantCard from "../components/RestaurantCard";
import { Button } from "react-bootstrap";
import CreateRestaurantModal from "../components/CreateRestaurantModal";

export default function Restaurants(){
    const { user } = useContext(UserContext);
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext);
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
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Restaurants</h2>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark" 
                    onClick={() => setModalShow(true)}
                    >
                    create new
                </Button>
            </div>

            <div className="page-container">
                    {renderRestaurantCards}
            </div>
                
            <div>
                <CreateRestaurantModal
                    show={modalShow}
                    onHide={() => {setModalShow(false)}}
                    />
            </div>
        </div>
    );
}