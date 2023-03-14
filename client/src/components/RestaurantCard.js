import React from "react";

const RestaurantCard = ({ restaurant }) => {

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
}

export default RestaurantCard;