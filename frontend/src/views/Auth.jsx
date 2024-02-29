/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import LoginForm from '../Components/auth/LoginForm';
import RegisterForm from '../Components/auth/RegisterForm';

const Auth = ({authRoute}) => {
    let body;
    body = (
        <>
        Note with me!
        {authRoute === 'login' && <LoginForm/>}
        {authRoute === 'register' && <RegisterForm/>}
        </>
      );
  return (
    <div className='landing'>
        <h1>LearnList</h1>
        {body}
    </div>
  )
}

export default Auth;