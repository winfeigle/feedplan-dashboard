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

    return(
        <MenuContext.Provider value={{ menu, loadMenu }}>
            { children }
        </MenuContext.Provider>
    );

}

export { MenuContext, MenuContextProvider }