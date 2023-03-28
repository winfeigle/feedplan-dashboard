import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AssignRestaurants({ meal_plan_id }){
    const [show, setShow] = useState(false);
    const { restaurants, loadRestaurants } = useContext(RestaurantsContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        loadRestaurants()
    }, [])

    const renderRestaurants = restaurants.map((restaurant) =>{
        return(
            <Form.Check
                key={restaurant.id}
                label={
                    <div className="restaurant-select-container">
                        <span>
                            {restaurant.name}
                        </span>
                        <span className="restaurant-address">       
                            {restaurant.address}
                        </span>
                    </div>
                    }
                name={restaurant.name}
                type="checkbox"
                id={`${restaurant.name}-checkbox`}
                />
        );
    })

    return(
        <div>
            <Button
                id="assign-restaurant-button"
                variant="light"
                onClick={handleShow}
                >
                ＋
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Meal Plan to Restaurants</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <div key="checkbox" className="mb-3">
                            {renderRestaurants}
                        </div>
                        <div className="horizontal-line-break"></div>
                        <Button variant="feedplan-purple" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}