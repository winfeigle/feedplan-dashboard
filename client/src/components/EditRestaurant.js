import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const EditRestaurant = (props) => {
    const [ restaurantData, setRestaurantData ] = useState(props.restaurant);
    const { updateRestaurant } = useContext(RestaurantsContext)

    const handleFormChange = (e) =>{
        setRestaurantData({
            ...restaurantData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        updateRestaurant(restaurantData);
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
                    <b 
                        style={{ 
                            color: "#665BF7",
                            backgroundColor: "#665BF720",
                            padding: ".5rem 1rem",
                            borderRadius: "5px",
                            }}
                        >{restaurantData.name}
                        </b>
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
                                    defaultValue={props.restaurant.name}
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
                                    defaultValue={props.restaurant.description}
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
                                    defaultValue={props.restaurant.address}
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
                                    type="url"
                                    name="image_url"
                                    placeholder="paste link here" 
                                    />
                                <div id="restaurant-preview-container">
                                    <img 
                                        className={props.restaurant.image_url ? "restaurant-image-preview" : "image-placeholder"} 
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
                                    type="url" 
                                    name="icon_url"
                                    placeholder="paste link here"
                                    />
                                    <div id="restaurant-preview-container">
                                        <img 
                                            className="restaurant-icon-preview"
                                            alt="logo preview"
                                            src={restaurantData.icon_url}
                                            />
                                    </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <Form.Select
                        onChange={handleFormChange}
                        name="live"
                        value={restaurantData.live}
                        aria-label="Live status selection"
                        >
                        <option 
                            value="true"
                            >Live
                            </option>
                        <option 
                            value="false"
                            > Draft
                            </option>
                        </Form.Select>
                    <br/>
                <div id="modal-buttons">
                    <Button 
                        variant="feedplan-purple" 
                        type="submit"
                        onClick={props.onHide}
                        >
                            Submit
                        </Button>
                    <Button variant="outline-feedplan-dark" onClick={props.onHide}>Cancel</Button>
                </div>
                </Form>
            </Modal.Body>
    </Modal>
    );
}

export default EditRestaurant;