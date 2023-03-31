import React, { useContext } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MenuContext } from "../context/MenuContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

export default function MenuItem({ menu_item }){
    const { deleteMenuItem } = useContext(MenuContext);
    const { loadRestaurants } = useContext(RestaurantsContext)

    const handleDelete = () => {
        deleteMenuItem(menu_item.id);
        loadRestaurants();
    }

    return(
        <Card 
            style={{ 
                width: '14rem',
                marginRight: '1rem'
                }}>
            <Card.Img variant="top" src={menu_item.image_url} />
            <Card.Body>
                <Card.Title>{menu_item.name}</Card.Title>
                <Card.Text>{menu_item.description.slice(0, 50) + '...'}</Card.Text>
                <Button variant="outline-feedplan-purple">edit</Button>
                <Button onClick={handleDelete}>delete</Button>
            </Card.Body>
        </Card>
    );
}