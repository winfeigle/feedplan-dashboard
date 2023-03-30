import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CreateRestaurantModal = (props) => {
    const [ restaurantData, setRestaurantData ] = useState({});
    const [ errors, setErrors ] = useState([]);

    const { loadRestaurants } = useContext(RestaurantsContext)

    const handleFormChange = (e) =>{
        setRestaurantData({
            ...restaurantData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        fetch("/restaurants", {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({ ...restaurantData, live: false})
            }).then((r) => {
                if(r.ok){
                    loadRestaurants();
                    setRestaurantData({});
                    props.onHide()
                } else{
                    r.json().then((err) => setErrors(err.errors));
                }
        })
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
            <div id="errors-container">
                { 
                    errors.map((err) => (
                        <div 
                            className="error-message" 
                            key={err}>
                                {err}
                        </div>
                ))
                }
            </div>
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
                                    type="url"
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
                                    type="url" 
                                    name="icon_url"
                                    placeholder="paste link here"
                                    />
                                    <div id="restaurant-preview-container">
                                        <img 
                                            className={restaurantData.icon_url ? "restaurant-icon-preview" : "icon-placeholder"} 
                                            alt="logo preview"
                                            src={restaurantData.icon_url}
                                            />
                                    </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <div id="modal-buttons">
                        <Button 
                            variant="feedplan-purple" 
                            type="submit"
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

export default CreateRestaurantModal;