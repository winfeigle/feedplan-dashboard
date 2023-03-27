import React, { useState } from "react";
import { Badge, Button } from 'react-bootstrap';
import FormatAddress from "../helpers/FormatAddress";
import EditRestaurant from "./EditRestaurant";


const RestaurantCard = ({ restaurant }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleRestaurantEdit = () => {
        setModalShow(true)
    }

    return(
        <div 
            id={restaurant.live ? "live" : "draft"}
            className="restaurant-card"
            key={restaurant.id}
            >
                <div id="edit-button">
                    <Button 
                        onClick={handleRestaurantEdit}
                        variant="dark"
                        >edit
                    </Button>
                </div>
                <div id="status-badge">
                    <Badge
                        bg={restaurant.live ? "success" : "secondary"}>{restaurant.live ? "Live" : "Draft"}
                    </Badge>
                </div>
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
                    <b>{restaurant.name}</b>
                </div>
                <div className="restaurant-info">
                    <span className="restaurant-description">
                        {restaurant.description.length >= 100 ? restaurant.description.slice(0,100) + '... ' : restaurant.description}
                    </span>
                    <FormatAddress rawAddress={restaurant.address}/>
                </div>
            <div className="horizontal-line-break"></div>
                <div className="restaurant-mealplans">
                    {/* Meal plans elements to go here */}
                </div>
                <div className="restaurant-button-group">
                    <Button variant="outline-feedplan-dark">Menu Items</Button>
                </div>
                <EditRestaurant
                    restaurant={restaurant}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
        </div>
    );
}

export default RestaurantCard;