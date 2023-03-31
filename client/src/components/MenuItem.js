import React, { useContext, useState } from "react";
import EditMenuItem from "./EditMenuItem";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from "react-bootstrap/esm/CardImg";

import { MenuContext } from "../context/MenuContext";
import { RestaurantsContext } from "../context/RestaurantsContext";

export default function MenuItem({ menu_item }){
    const [modalShow, setModalShow] = useState(false);
    
    const { deleteMenuItem } = useContext(MenuContext);
    const { loadRestaurants } = useContext(RestaurantsContext)

    const handleDelete = () => {
        deleteMenuItem(menu_item.id);
        loadRestaurants();
    }

    const handleEdit = () => {
        setModalShow(true)
    }

    return(
        <Card style={{ 
                width: '350px',
                marginRight: '1rem'
                }}>
        <CardImg src={menu_item.image_url} alt="menu item" id="meal-image"/>
        
        <div style={{ padding: "1.25rem 2rem 0.5rem", fontSize: ".9rem"}}>
            <Card.Text style={{ fontWeight: "bold" }}>
                {menu_item.name}
            </Card.Text>
            <Card.Text>
                {menu_item.description}
            </Card.Text>
            <Card.Text style={{ position: "absolute", top: "10px", right: "10px", color: "#665BF7", border: "solid #665BF7 1px", fontSize: ".75rem", borderRadius: "5px", padding: "5px 15px", width: "fit-content"}}>
                <b>Prep time:</b> {menu_item.preparation_time} minutes
            </Card.Text>
            
        </div>
        <Card.Body>
            <Button 
                style={{width: "100%" }} variant="outline-feedplan-dark"
                onClick={handleEdit}
                >edit</Button>
        <Button 
            onClick={handleDelete} variant="outline-danger" style={{marginLeft: "0.75rem"}}
            >delete</Button>
        </Card.Body>
        <EditMenuItem
            menu_item={menu_item}
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
      </Card>
    );
}