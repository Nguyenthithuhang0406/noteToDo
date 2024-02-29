/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  return (
    <>
    <Form>
          <Form.Group>
              <Form.Control type="text" placeholder='Username' name='username' required></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Control type="password" placeholder='Password' name='password' required></Form.Control>
          </Form.Group>
          <Button variant='success' type='submit'>Login</Button>
    </Form>
    <p>Don't have an account?
        <Link to='/register'>
            <Button variant='info' size='sm' className='ml-2'>Register</Button>
        </Link>
    </p>
    </>
    )
}

export default LoginForm;