import React from "react";

const RestaurantCard = ({ restaurant }) => {

    return(
        <div 
            className="restaurant-card"
            key={restaurant.id}
            style={{
                padding: "0px 20px"
                }}
            >
            <img 
                src={restaurant.icon_url} 
                style={{
                    width: '50px', 
                    borderRadius: "50%",
                    marginRight: "10px"
                    }}
                />
            <span>
                <b className="card-headings">
                    {restaurant.name}
                </b>
            </span>
        </div>
    );
}

export default RestaurantCard;