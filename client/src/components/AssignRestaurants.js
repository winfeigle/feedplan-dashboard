import React, { useState } from "react";
import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AssignRestaurants({ meal_plan_id }){
    const [show, setShow] = useState(false);
    const { restaurants } = useContext(RestaurantsContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderRestaurants = restaurants.map((restaurant) =>{
        return(
            <Form.Check 
                type="switch"
                id="restaurant-switch"
                label={restaurant.name}
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
                        {renderRestaurants}
                    </Form>
                </Modal.Body>


                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}