import React from "react";

import { Button } from "react-bootstrap";

export default function RestaurantMenu({ restaurant }){


    return(
        <div className="page">
            <div className="dashboard-heading">
                <div className="card-headings">
                    <img
                        id="restaurant-icon"
                        src={restaurant.icon_url} 
                        alt="restaurant logo"
                        style={{
                            width: '50px', 
                            borderRadius: "50%",
                            marginRight: "10px"
                            }}
                        />
                    <h3>{restaurant.name}</h3>
                </div>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark"
                    >
                    Add menu item
                </Button>
            </div>
            <div className="page-container">
                [Render Restaurant's Menu Items here]
            </div>
        </div>
    );
}