import React from 'react';
// para un solo impor de lista import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroup } from 'react-bootstrap'; 
import ItemTarea from './ItemTarea';

const ListaTarea = ({arregloTareas,borrarTarea}) => {
    return (
        //ul
        <ListGroup>
        {//tarea= cada elemento del arreglo    posision=cada posicion del arreglo
        //un bucle con map
          arregloTareas.map((tarea,posicion)=> <ItemTarea key={ posicion } nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
       
      </ListGroup>
    );
};

export default ListaTarea;