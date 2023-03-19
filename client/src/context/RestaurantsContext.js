import { createContext, useState } from "react";

const RestaurantsContext = createContext(null);

const RestaurantsProvider = ({ children }) => {
    const [ restaurants, setRestaurants ] = useState([]);

    const loadRestaurants = (user_id) => {
        fetch(`/admin/${user_id}/restaurants`)
            .then((res) => {
                if(res.ok){
                    res.json().then(setRestaurants)
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with restaurants fetch...")
                }
            })
    }

    const loadMenuItems = (restaurant_id) => {

    }

    const createRestaurant = (restaurantData) =>{
        fetch("/restaurants", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(restaurantData)
        })
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, loadRestaurants, createRestaurant }}>
            { children }
        </RestaurantsContext.Provider>
    );
}

export { RestaurantsProvider, RestaurantsContext };