import React from "react";
import { Badge, Button } from 'react-bootstrap';


const RestaurantCard = ({ restaurant }) => {

    const formatAddress = () => {
        let street = restaurant.address.split(", ", 1)+ ","
        let city = restaurant.address.match(/([^,]+)/g)[1]
        let state = restaurant.address.match(/([^,]+)/g)[2]

        return(
            <span className="restaurant-address">
                <p>
                    <b>{street}</b>
                {`${city}, ${state}`}
                </p>
            </span>
        );
    }

    return(
        <div 
            className="restaurant-card"
            key={restaurant.id}
            >
                <div className="card-headings">
                    <img 
                        src={restaurant.icon_url} 
                        alt="restaurant logo"
                        style={{
                            width: '50px', 
                            borderRadius: "50%",
                            marginRight: "10px"
                            }}
                        />
                    <b>{restaurant.name}</b>
                    <Badge 
                        className="status-badge" 
                        bg={restaurant.live ? "success" : "secondary"}>{restaurant.live ? "Live" : "Unpublished"}
                    </Badge>
                </div>
                <div className="restaurant-info">
                    <span className="restaurant-description">
                        {restaurant.description.slice(0,100) + '... '}
                    </span>
                    {formatAddress()}
                </div>
                <div className="mealplans-carousel">

                </div>
                <div className="restaurant-button-group">
                    <Button variant="outline-feedplan-dark-mist">Menu Items</Button>
                </div>
        </div>
    );
}

export default RestaurantCard;