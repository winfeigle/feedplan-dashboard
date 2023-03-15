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
        image_url: "https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_1080,h_810,c_limit/Work%20&%20Class,%20Denver_222889720_551963972502510_7409480855517024306_n.jpg",
        icon_url: "https://images.vexels.com/content/229492/preview/sushi-bar-logo-template-900c33.png"
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
                                <img className="restaurant-image-preview" alt="[Restaurant image preview]" src={restaurantData.image_url}/>
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
                                <img className="restaurant-image-preview" alt="[Restaurant logo preview]" src={restaurantData.icon_url}/>
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