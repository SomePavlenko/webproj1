import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context';
import '../styles/Login.css'
import { useState } from 'react';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [errorAuth, setErrorAuth] = useState('')

    let userdata = {
        login: 'admin',
        password: 'admin'
    }

    const login = () => {
        // alert(JSON.stringify(event))
        // event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        setErrorAuth('')
    }


    const onSubmit = (event) => {
        if (userdata.login === event.login && userdata.password === event.password) {
            login()
        }
        else if (userdata.login === event.login && userdata.password !== event.password) {
            setErrorAuth('Пароль введен не верно')
        }
        else if (userdata.login !== event.login && userdata.password === event.password) {
            setErrorAuth('Логин введен не верно')
        }
        else
            setErrorAuth('Данные не верны')
    }

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm()



    return (
        <>

            <div id="wrapper">
                <h1>Sign In Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} id="signin" method="" action="" autocomplete="off">

                    <input {...register('login', {
                        required: "Уважаемый, поле username обязательно к заполнению",
                        minLength: {
                            value: 3,
                            message: 'Уважаемый, минимальная длинна username 3 символа'
                        }
                    })}
                        type="text" id="user" placeholder="username" />

                    <input
                        {...register('password', {
                            required: "Уважаемый, поле password обязательно к заполнению",
                            minLength: {
                                value: 3,
                                message: 'Уважаемый, минимальная длинна password 3 символа'
                            }
                        })}
                        type="password" id="pass" placeholder="password" />
                    <button type="submit">&#xf0da;</button>
                    <p>forgot your password? <a href="https://www.google.com/">get out</a></p>

                    {errors?.Login || errors.password
                        ?
                        <>
                            {errors?.login?.message && errors?.password?.message
                                ?
                                <p style={{ color: 'brown' }}> Заполните два поля до конца </p>
                                :
                                <p style={{ color: 'brown' }}> {errors?.login?.message || errors?.password?.message}</p>
                            }
                        </>
                        :
                        <>
                            {errorAuth}
                        </>
                    }

                </form>
            </div>

            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </>
    );
};

export default Login;

// <div>
//             <h1>Если ты не гомосек, то зайди за пару сек</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label>
//                     Login
//                     <MyInput
//                         {...register('login', {
//                             required: "Уважаемый, случилась ошибка",
//                             minLength: {
//                                 value: 3,
//                                 message: 'Уважаемый, минимальная длинна 3 символа'
//                             } 
//                         })}
//                     />
//                 </label>
//                 {errors?.login && <p style={{ height: 40 }}> {errors?.login?.message  || 'Error'}</p>}

//                 <label>
//                     Password
//                     <MyInput
//                         {...register('password', {
//                             required: "Уважаемый, случилась ошибка",
//                             minLength: {
//                                 value: 3,
//                                 message: 'Уважаемый, минимальная длинна 3 символа'
//                             }
//                         })}
//                     />
//                 </label>
//                 {errors?.password && <p style={{ height: 40 }}> {errors?.password?.message  || 'Error'}</p>}

//                 <MyButton>Войти</MyButton>
//             </form>
//         </div>