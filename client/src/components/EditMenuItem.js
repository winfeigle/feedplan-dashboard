import React, { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const EditMenuItem = (props) => {
    const [ menuItemData, setMenuItemData ] = useState(props.menu_item);
    const { updateMenuItem } = useContext(MenuContext)

    const handleFormChange = (e) =>{
        setMenuItemData({
            ...menuItemData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = () => {
        updateMenuItem(menuItemData);
        setMenuItemData({});
        props.onHide()
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
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
                                    defaultValue={props.menu_item.name}
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
                                    defaultValue={props.menu_item.preparation_time}
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
                                    defaultValue={props.menu_item.description}
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
                                    defaultValue={props.menu_item.image_url}
                                    />
                                <div id="restaurant-preview-container">
                                    <img 
                                        className={props.menu_item.image_url ? "restaurant-menu-item-preview" : "image-placeholder"} 
                                        alt="Menu item feature preview"
                                        src={props.menu_item.image_url}
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

export default EditMenuItem;