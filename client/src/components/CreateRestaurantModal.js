import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CreateRestaurantModal = (props) => {
    const [ restaurantData, setRestaurantData ] = useState({
        name: "",
        description: "",
        address: "",
        image_url: "",
        icon_url: ""
    });

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
                <Form>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantName"
                                >
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    />
                            </Form.Group>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantDescription"
                                >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantAddress"
                                >
                                <Form.Label>Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Street, City, State ZIP" 
                                    />
                            </Form.Group>
                        </Col>
                    </Row>
                <br/>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantImage"
                                >
                                <Form.Label>Feature Image URL</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="paste link here" 
                                    />
                                <div id="restaurant-preview-container">
                                    <img 
                                        className={restaurantData.image_url ? "restaurant-image-preview" : "image-placeholder"} 
                                        alt="Restaurant image preview"
                                        src={restaurantData.image_url}
                                        />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group 
                                className="mb-3" controlId="formRestauarantLogo"
                                >
                                <Form.Label>Logo URL</Form.Label>
                                <Form.Control 
                                    type="text" 
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-feedplan-dark" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
    </Modal>
    );
}

export default CreateRestaurantModal;