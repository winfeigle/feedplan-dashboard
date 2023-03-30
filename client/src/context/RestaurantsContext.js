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

    const updateRestaurant = (restaurantData) =>{
        fetch(`/restaurants/${restaurantData.id}/update`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(restaurantData)
        }).then((res) => {
            if(res.ok){
                loadRestaurants();
            }else{
                // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                console.log("Something went wrong with restaurants patch...")
            }
        })
    }

    const deleteRestaurant = (restaurant_id) => {
        fetch(`/restaurants/${restaurant_id}`, {
            method: "DELETE"
        }).then(loadRestaurants)
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, loadRestaurants, updateRestaurant, deleteRestaurant }}>
            { children }
        </RestaurantsContext.Provider>
    );
}

export { RestaurantsProvider, RestaurantsContext };