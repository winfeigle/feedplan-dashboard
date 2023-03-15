import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CreateRestaurantModal = (props) => {
    const [ restaurantData, setRestaurantData ] = useState({});

    const { createRestaurant } = useContext(RestaurantsContext)

    const handleFormChange = (e) =>{
        setRestaurantData({
            ...restaurantData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createRestaurant(restaurantData);
        setRestaurantData({});
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add a restaurant
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantName"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    />
                            </Form.Group>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantDescription"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    name="description"
                                    />
                            </Form.Group>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantAddress"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Address</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="address"
                                    placeholder="Street, City, State ZIP" 
                                    />
                            </Form.Group>
                        </Col>
                    </Row>
                <br/>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantImage"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Feature Image URL</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="image_url"
                                    placeholder="paste link here" 
                                    />
                                <div id="restaurant-preview-container">
                                    <img 
                                        className={restaurantData.image_url ? "restaurant-image-preview" : "image-placeholder"} 
                                        alt="Restaurant feature preview"
                                        src={restaurantData.image_url}
                                        />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantLogo"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Logo URL</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="icon_url"
                                    placeholder="paste link here"
                                    />
                                    <div id="restaurant-preview-container">
                                        <img 
                                            className={restaurantData.icon_url ? "restaurant-icon-preview" : "image-placeholder"} 
                                            alt="Restaurant icon preview"
                                            src={restaurantData.icon_url}
                                            />
                                    </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="feedplan-purple" type="submit">
                        Submit
                    </Button>
                    <Button variant="outline-feedplan-dark" onClick={props.onHide} className="mx-1">Cancel</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-feedplan-dark" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
    </Modal>
    );
}

export default CreateRestaurantModal;