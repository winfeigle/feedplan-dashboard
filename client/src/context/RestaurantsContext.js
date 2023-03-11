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
                    console.log("Something went wrong")
                }
            })
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, loadRestaurants }}>
            { children }
        </RestaurantsContext.Provider>
    );
}

export { RestaurantsProvider, RestaurantsContext };