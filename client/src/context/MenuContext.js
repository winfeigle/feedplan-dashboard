import React, { createContext, useState } from "react";

const MenuContext = createContext(null);

const MenuContextProvider = ({ children }) => {
    const [ menu, setMenu ] = useState([]);

    const loadMenu = (restaurant_id) => {
        fetch(`/restaurants/${restaurant_id}/menu`)
            .then((res) => {
                if(res.ok){
                    res.json().then(setMenu);
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with restaurant menu fetch...")
                }
            })
    }

    const deleteMenuItem = (menu_item_id) =>{
        fetch(`/restaurants/delete-menu-item/${menu_item_id}`, {
            method: "DELETE",
        })
    }

    const createMenuItem = (menuItem) => {
        fetch(`/restaurants/${menuItem.restaurant_id}/new-menu-item`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(menuItem)
        })
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => {console.log(data)})
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with adding a menu item...")
                }
            })
            
    }

    return(
        <MenuContext.Provider value={{ menu, loadMenu, deleteMenuItem, createMenuItem }}>
            { children }
        </MenuContext.Provider>
    );

}

export { MenuContext, MenuContextProvider }