import React, { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CreateMenuItemModal = (props) => {
    const [ menuItem, setMenuItem ] = useState({});
    const { createMenuItem, loadMenu } = useContext(MenuContext);

    const handleFormChange = (e) =>{
        setMenuItem({
            [e.target.name]: e.target.value,
            restaurant_id: props.restaurant.id,
            visible: false,
            ...menuItem
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        createMenuItem(menuItem);
        setMenuItem({});
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
                    <img 
                        id="restaurant-menu-icon"
                        src={props.restaurant.icon_url}
                        alt="restaurant icon"
                        />
                    {props.restaurant.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formMealName"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantAddress"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Preparation Time</Form.Label>
                                <Form.Control 
                                    type="number"
                                    name="preparation_time"
                                    placeholder="minutes" 
                                    />
                            </Form.Group>
                            </Col>
                            <Form.Group 
                                className="mb-3" controlId="formMealDescription"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    name="description"
                                    />
                            </Form.Group>
                    </Row>
                <br/>
                    <Row>
                        <Col>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formRestauarantImage"
                                onChange={handleFormChange}
                                >
                                <Form.Label>Menu Item Image URL</Form.Label>
                                <Form.Control 
                                    type="url"
                                    name="image_url"
                                    placeholder="paste link here" 
                                    />
                                <div id="restaurant-preview-container">
                                    <img 
                                        className={menuItem.image_url ? "restaurant-menu-item-preview" : "image-placeholder"} 
                                        alt="Menu item feature preview"
                                        src={menuItem.image_url}
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

export default CreateMenuItemModal;