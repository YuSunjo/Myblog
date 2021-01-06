import React from 'react';
import { useForm } from 'react-hook-form';
import AppLayout from '../components/AppLayout';

const Login = () => {
    const { register, watch, errors, handleSubmit } = useForm();
    console.log(`${watch('email')}`);

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <AppLayout>
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
                <button type="submit">로그인</button>
            </form>
        </AppLayout>
    );
};

export default Login;