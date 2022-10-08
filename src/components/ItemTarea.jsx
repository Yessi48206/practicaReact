import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = ({nombreTarea}) => {
  return (

  <ListGroup.Item className='d-flex justify-content-between'>
    {nombreTarea}
<Button>Borrar</Button>
  </ListGroup.Item>
  )
};

export default ItemTarea;
