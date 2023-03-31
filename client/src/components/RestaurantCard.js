import React, { useContext, useState } from "react";
import { Badge, Button } from 'react-bootstrap';
import FormatAddress from "../helpers/FormatAddress";
import EditRestaurant from "./EditRestaurant";
import { RestaurantsContext } from "../context/RestaurantsContext";


const RestaurantCard = ({ restaurant }) => {
    const [modalShow, setModalShow] = useState(false);
    const { deleteRestaurant } = useContext(RestaurantsContext);

    const handleRestaurantEdit = () => {
        setModalShow(true)
    }

    const handleRestaurantDelete = () =>{
        deleteRestaurant(restaurant.id)
    }

    return(
        <div 
            key={restaurant.id}
            id={restaurant.live ? "live" : "draft"}
            className="restaurant-card"
            >
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
                <div className="restaurant-stats-container">
                    <div className="restaurant-stat">
                        <p><b>{restaurant.menu_items}</b> menu items</p>
                        </div>
                    <div className="restaurant-stat">
                        <p><b>{restaurant.meal_plans}</b> meal plans</p>
                        </div>
                </div>
            <div className="horizontal-line-break"></div>
                <div className="restaurant-button-group">
                    <Button
                        id="edit-button" 
                        onClick={handleRestaurantEdit}
                        variant="outline-feedplan-dark"
                        >edit</Button>
                    {!restaurant.live && <Button
                        id="delete-button"
                        variant="outline-danger"
                        onClick={handleRestaurantDelete}
                        >Delete</Button>}
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