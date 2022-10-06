import React from 'react';
// para un solo impor de lista import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroup } from 'react-bootstrap'; 
import ItemTarea from './ItemTarea';

const ListaTarea = () => {
    return (
        //ul
        <ListGroup>
        
        <ItemTarea></ItemTarea>
      </ListGroup>
    );
};

export default ListaTarea;