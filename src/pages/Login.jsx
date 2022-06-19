import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import '../styles/Login.css'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = event => {
        // alert(JSON.stringify(event))
        // event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }


    const onSubmit = (event) => {
        console.log(event.login, event.password);


        login(event)
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
            <div className='AuthForm'>
                <h1>Если ты не гомосек, то зайди за пару сек</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <label>
                        Login
                        <div className='input'>
                        <MyInput 
                            {...register('login', {
                                required: "Уважаемый, случилась ошибка",
                                minLength: {
                                    value: 3,
                                    message: 'Уважаемый, минимальная длинна 3 символа'
                                }
                            })}
                        />
                        </div>
                    </label>
                    {errors?.login && <p style={{ height: 40 }}> {errors?.login?.message || 'Error'}</p>}

                    <label  className='input' >
                        Password
                        <div className='input'>
                        <MyInput 
                            {...register('password', {
                                required: "Уважаемый, случилась ошибка",
                                minLength: {
                                    value: 3,
                                    message: 'Уважаемый, минимальная длинна 3 символа'
                                }
                            })}
                        />
                        </div>
                    </label>
                    {errors?.password && <p style={{ height: 40 }}> {errors?.password?.message || 'Error'}</p>}
                    <div  className='button'>
                    <MyButton>Войти</MyButton>
                    </div>
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

// return (
//     <div>
//         <h1>Страница для логина</h1>
//         <form onSubmit={login}>
//             <MyInput type='text' placeholder='Введите логин' />
//             <MyInput type='password' placeholder='Введите пароль' />
//             <MyButton>Войти</MyButton>
//         </form>
//     </div>
// );
// };




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