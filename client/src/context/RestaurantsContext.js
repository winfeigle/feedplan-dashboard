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

    const createRestaurant = (newRestaurant) =>{
        setRestaurants((restaurants) => [...restaurants, newRestaurant])
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
                res.json().then((data) => console.log(data))
            }else{
                // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                console.log("Something went wrong with restaurants patch...")
            }
        })
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, loadRestaurants, createRestaurant, updateRestaurant }}>
            { children }
        </RestaurantsContext.Provider>
    );
}

export { RestaurantsProvider, RestaurantsContext };