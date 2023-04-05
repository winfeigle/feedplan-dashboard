import React, { useContext, useEffect, useState } from "react";
import {  MenuContext } from "../context/MenuContext";
import MenuItem from "./MenuItem";

import { Button } from "react-bootstrap";
import CreateMenuItemModal from "./CreateMenuItemModal";

export default function RestaurantMenu({ restaurant }){
    const { loadMenu, menu } = useContext(MenuContext);
    const [ modalShow, setModalShow ] = useState(false);

    useEffect(() => {
        loadMenu(restaurant.id)
    }, [])

    const renderMenu = menu.map((menu_item) => {
        return(
            <MenuItem 
                key={menu_item.id} 
                menu_item={menu_item}
                />
        );
    })


    return(

        <div class="menu-page-container">
            <div class="dashboard-heading">
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
                    <h2>{restaurant.name}</h2>
                </div>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark" 
                    onClick={() => setModalShow(true)}
                    >
                    add meal
                </Button>
            </div>
            <div class="restaurant-menu-section">
                <div class="menu-container">
                        {renderMenu}
                    </div>
                    <div>
                        <CreateMenuItemModal
                            restaurant={restaurant}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                    </div>
            </div>
                
        </div>
    );
}