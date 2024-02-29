/* eslint-disable no-unused-vars */
import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
    return (
        <>
        <Form>
              <Form.Group>
                  <Form.Control type="text" placeholder='Username' name='username' required></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Control type="password" placeholder='Password' name='password' required></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Control type="password" placeholder='confirm Password' name='confirmPassword' required></Form.Control>
              </Form.Group>
              <Button variant='success' type='submit'>Register</Button>
        </Form>
        <p> You're already created Account?
            <Link to='/login'>
                <Button variant='info' size='sm' className='ml-2'>Login</Button>
            </Link>
        </p>
        </>
        )
}

export default RegisterForm;