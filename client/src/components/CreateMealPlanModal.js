import React, { useContext, useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MealPlansContext } from "../context/MealPlansContext";

export default function CreateMealPlanModal(props){
    const [ mealPlanData, setMealPlanData ] = useState([]);
    const { createMealPlan } = useContext(MealPlansContext);

    const handleFormChange = (e) => {
        setMealPlanData({
            ...mealPlanData,
            [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit = () => {
        createMealPlan(mealPlanData);
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
                            <Form.Text className="text-muted">
                            Meal plans expire after 30 days
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group 
                            className="mb-3"
                            onChange={handleFormChange}
                            >
                            <Form.Label>Total Price</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="0.00" 
                                name="total_price"
                                type="number" 
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                <br/>
                <span>

                <p>[ Add an assign to restaurant Switch check here ]</p>
                </span>
                
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