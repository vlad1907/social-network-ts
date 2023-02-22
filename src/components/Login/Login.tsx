import React from 'react';
import {Field, Form, Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';
import s from './Login.module.css'
import a from '../common/Button/Button.module.css'
import {FormControl} from '../common/FormControl/FormControl';
import {connect, useDispatch} from 'react-redux';
import {getCaptchaUrl, login} from '../../redux/auth-reducer';
import {AppRootStateType} from '../../redux/store';

type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: (status?: any) => void) => void
    isAuth: boolean
    captchaUrl: string | null
}
type MapStateTotPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const Login = ({login, isAuth, captchaUrl}: LoginType) => {
    const dispatch = useDispatch();
    const initialValues: InitialValuesType = {
        email: 'free@samuraijs.com',
        password: 'free',
        rememberMe: false,
        captcha: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required').min(5, 'Minimum 5 symbols'),
    })
    const onSubmit = (values: InitialValuesType, {setSubmitting, setStatus}: FormikHelpers<InitialValuesType>) => {
        login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
        setSubmitting(false)
        dispatch(getCaptchaUrl(''))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.formContainer}>
            <h1>LOG IN</h1>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnBlur
                    onSubmit={onSubmit}>
                {(formik: FormikProps<FormikValues>) => {
                    const {isSubmitting, status} = formik
                    return (
                        <Form>
                            <div>
                                <p>{'To log in get registered '}
                                    <a style={{color: 'white'}} href={'https://social-network.samuraijs.com/'}
                                       target={'_blank'}
                                       rel="noopener noreferrer">here
                                    </a>
                                </p>
                                <p>or use common test account credentials:</p>
                                <p>Email: free@samuraijs.com</p>
                                <p>Password: free</p>
                            </div>
                            <div>
                                <FormControl control={'input'} name={'email'} placeholder={'email'}/>
                            </div>
                            <div>
                                <FormControl control={'password'} name={'password'} placeholder={'password'}/>
                            </div>
                            <div style={{marginBottom: '8px'}}>
                                <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                                <label htmlFor={'rememberMe'}> remember me</label>
                            </div>
                            <div className={s.captchaBlock}>
                                {captchaUrl && <img className={s.captchaImg} src={captchaUrl} alt={'security'}/>}
                                {captchaUrl &&
                                    <div>
                                        <FormControl control={'input'} name={'captcha'} placeholder={''}/>
                                    </div>
                                }
                            </div>
                            <div>
                                <button className={a.button} type={'submit'} disabled={isSubmitting}>
                                    Login
                                </button>
                            </div>
                            {status
                                ? <span style={{color: 'red'}}>Your email or password is incorrect</span>
                                : <span style={{margin: '8px', width: '300px'}}></span>}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): MapStateTotPropsType => {
    return {isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl}
}
export default connect(mapStateToProps, {login})(Login);
