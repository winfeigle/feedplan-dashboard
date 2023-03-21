import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MenuItem({ menu_item }){

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
                <Button variant="outline-feedplan-purple">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}