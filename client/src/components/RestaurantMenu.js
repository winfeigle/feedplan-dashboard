import React, { useContext, useEffect } from "react";
import {  MenuContext } from "../context/MenuContext";
import MenuItem from "./MenuItem";

import { Button } from "react-bootstrap";

export default function RestaurantMenu({ restaurant }){
    const { loadMenu, menu } = useContext(MenuContext);

    useEffect(() => {
        loadMenu(restaurant.id)
    }, [])

    console.log(menu)

    const renderMenu = menu.map((menu_item) => {
        return(
            <MenuItem 
                key={menu_item.id} 
                menu_item={menu_item}
                />
        );
    })


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
                    {renderMenu}
            </div>
        </div>
    );
}