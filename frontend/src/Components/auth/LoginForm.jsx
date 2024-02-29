/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const {username, password} = loginForm;
    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value});
  return (
    <>
    <Form>
          <Form.Group>
              <Form.Control type="text" placeholder='Username' name='username' required value={username} onChange={onChangeLoginForm}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Control type="password" placeholder='Password' name='password' required value={password} onChange={onChangeLoginForm}></Form.Control>
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