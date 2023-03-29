import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import AssignedRestaurantCheckBox from "./AssignedRestaurantCheckBox";

import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AssignRestaurantsModal({ mealplan }){
    // hide/show modal
    const [show, setShow] = useState(false);

    const { restaurants, loadRestaurants } = useContext(RestaurantsContext);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    useEffect(() => {
        loadRestaurants()
    }, [])

    const renderRestaurants = restaurants.map((restaurant) =>{
        return(
            <AssignedRestaurantCheckBox 
                key={restaurant.id}
                mealplan={mealplan}
                restaurant={restaurant}
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
                <Modal.Header>
                <Modal.Title>{`Assign ${mealplan.name} meal plan`}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form >
                        <div key="checkbox" className="mb-3">
                            {renderRestaurants}
                        </div>
                        <div className="horizontal-line-break"></div>
                        <div id="modal-buttons">
                            <Button 
                                type="submit"
                                variant="feedplan-purple">
                                Done
                            </Button>
                            <Button variant="outline-danger">delete</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}