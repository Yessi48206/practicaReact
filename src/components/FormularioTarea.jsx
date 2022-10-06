import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormularioTarea = () => {
    return (
       <Form className='my-5'>
        <Form.Group className='mb-3 d-flex ' controlId="fromTarea">
        {/*esto es un imput */}
        <Form.Control type="text" placeholder='Ingresa una tarea' />
        <Button variant='primary' type='submit'>Enviar</Button>
        </Form.Group>
       </Form>
    );
};

export default FormularioTarea;