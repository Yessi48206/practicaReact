import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTarea from './ListaTarea';
const FormularioTarea = () => {
    //buscar la tarea de localStorage si es q existe
    const tareaLocalstorage= JSON.parse(localStorage.getItem("listaTarea")) || [] ;
    //zona donde agregamos la mayoria de la logica
    const [tarea, setTarea] = useState('');
    const [arregloTarea, setArregloTarea] = useState(tareaLocalstorage);
// ciclo de vida de un component

useEffect(()=>{
    //guardar el arreglo en el localStorage
    localStorage.setItem('listaTarea',JSON.stringify(arregloTarea));

},[arregloTarea])

    const handleSubmit =(e)=>{
        e.preventDefault();
    
        //arregloTarea.push() no puedo usar el push en un state
        setArregloTarea([...arregloTarea, tarea]);
        //limpiar el imput
        setTarea('');
    }
    const borrarTarea = (nombre)=> {
        let arregloModificado = arregloTarea.filter((item)=> item !== nombre ) ;
        //actualizar el state
        setArregloTarea(arregloModificado);

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
        <ListaTarea arregloTareas={arregloTarea} borrarTarea={borrarTarea} ></ListaTarea>
        
        </>
    );
};

export default FormularioTarea;