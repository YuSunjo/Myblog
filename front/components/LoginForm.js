import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const LoginButton = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { loginLoading, logInError } = useSelector((state) => { return state.user; });
    const { register, watch, errors, handleSubmit } = useForm();
    console.log(`${watch('email')}`);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    const onSubmit = useCallback((data) => {
        console.log('data', data);
        dispatch(loginRequestAction(data));
    }, []);

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
                    <button type="submit" loading={loginLoading}>로그인</button>
                </LoginButton>
            </form>
        </>
    );
};

export default LoginForm;