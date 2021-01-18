import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import { SIGN_UP_REQUEST } from '../reducers/user';

const Signup = () => {
    const dispatch = useDispatch();
    const { me, signUpDone, signUpError } = useSelector(
        (state) => { return state.user; },
    );
    const { register, watch, handleSubmit, errors } = useForm();
    console.log(watch('email'));

    const password = useRef();
    password.current = watch('password');

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    const onSubmit = (data) => {
        console.log('data', data);
        dispatch({
            type: SIGN_UP_REQUEST,
            data,
        });
    };

    return (
        <AppLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label><br />
                    <input
                        name="email"
                        type="email"
                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    /><br />
                    {errors.email && <p>this email field is required</p>}
                </div>
                <div>
                    <label>Nickname</label><br />
                    <input
                        name="nickname"
                        ref={register({ required: true, maxLength: 10 })}
                    />
                    {errors.nickname && errors.nickname.type === 'required'
                        && <p>This filed is required</p>}
                    {errors.nickname && errors.nickname.type === 'maxLenght'
                        && <p>Your input exceed maximum length</p>}
                </div>
                <div>
                    <label>Password</label><br />
                    <input
                        name="password"
                        type="password"
                        ref={register({ required: true, minLength: 6 })}
                    />
                    {errors.password && errors.password.type === 'required'
                        && <p>This filed is required</p>}
                    {errors.password && errors.password.type === 'minLength'
                        && <p>Password must have at least 6 characters</p>}
                </div>
                <div>
                    <label>PasswordConfirm</label><br />
                    <input
                        name="password_confirm"
                        type="password"
                        ref={register({
                            required: true,
                            validate: (value) => { return value === password.current; } })}
                    />
                    {errors.password_confirm && errors.password_confirm.type === 'required'
                        && <p>This filed is required</p>}
                    {errors.password_confirm && errors.password_confirm.type === 'validate'
                        && <p>the passwords do not match </p>}
                </div>
                <button type="submit">submit</button>
            </form>
        </AppLayout>
    );
};

export default Signup;