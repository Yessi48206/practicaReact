import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTarea from './ListaTarea';
const FormularioTarea = () => {
    //zona donde agregamos la mayoria de la logica
    const [tarea, setTarea] = useState('');
    const [arregloTarea, setArregloTarea] = useState([])

    const handleSubmit =(e)=>{
        e.preventDefault();
    
        //arregloTarea.push() no puedo usar el push en un state
        setArregloTarea([...arregloTarea, tarea]);
        //limpiar el imput
        setTarea('');
    }
    return (
        <>
        <Form className='my-5' onSubmit={handleSubmit} >
         <Form.Group className='mb-3 d-flex ' controlId="fromTarea">
         {/*esto es un imput */}
         <Form.Control type="text" placeholder='Ingresa una tarea'  onChange={(e)=>setTarea(e.target.value)} value={tarea} />
         <Button variant='primary' type='submit'>Enviar</Button>
         </Form.Group>
        </Form>
        <ListaTarea arregloTareas={arregloTarea}></ListaTarea>
        
        </>
    );
};

export default FormularioTarea;