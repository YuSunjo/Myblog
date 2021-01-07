import React from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const LoginButton = styled.div`
    margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const { register, watch, errors, handleSubmit } = useForm();
    console.log(`${watch('email')}`);

    const onSubmit = (data) => {
        console.log('data', data);
        setIsLoggedIn(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label><br />
                    <input
                        name="email"
                        type="email"
                        ref={register({ required: true })}
                    /><br />
                    {errors.email && <p>this email field is required</p>}
                </div>
                <div>
                    <label>Password</label><br />
                    <input
                        name="password"
                        type="password"
                        ref={register({ required: true })}
                    /><br />
                    {errors.email && <p>this email field is required</p>}
                </div>
                <LoginButton>
                    <button type="submit">로그인</button>
                </LoginButton>
            </form>
        </>
    );
};

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;