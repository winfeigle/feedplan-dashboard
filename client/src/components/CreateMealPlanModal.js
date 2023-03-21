import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CreateMealPlanModal(props){
    const [ mealPlanData, setMealPlanData ] = useState([]);

    const handleFormChange = () => {

    }

    const handleFormSubmit = () => {

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
                Create New Meal Plan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                        <Form.Group 
                            className="mb-3" 
                            controlId="formMealPlanName"
                            onChange={handleFormChange}
                            >
                            <Form.Label>Meal Plan Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name"
                                />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group 
                            className="mb-3" 
                            controlId="formMealPlanQuantity"
                            onChange={handleFormChange}
                            >
                            <Form.Label>Number of meals</Form.Label>
                            <Form.Control 
                                type="number" 
                                name="quantity"
                                />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group 
                            className="mb-3" 
                            controlId="formMealPlanQuantity"
                            onChange={handleFormChange}
                            >
                            <Form.Label>Total Price</Form.Label>
                            <Form.Control 
                                type="currency" 
                                name="total_price"
                                />
                        </Form.Group>
                    </Row>
                <br/>
                <span>

                <p>[ Add an assign to restaurant Switch check here ]</p>
                </span>
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