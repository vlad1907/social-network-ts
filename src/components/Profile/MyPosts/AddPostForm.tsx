import React from 'react';
import {Field, Form, Formik} from "formik";
import a from "../../common/FormControl/Textarea/Textarea.module.css";
import s from "../../common/Button/Button.module.css";

type AddPostFormType = {
    addPost: (values: string) => void
}
type InitialValuesType = {
    newMessage: string
}
export const AddPostForm = (props: AddPostFormType) => {
    const initialValues: InitialValuesType = {
        newMessage: ''
    }
    let addNewMessage = (values: InitialValuesType) => {
        props.addPost( values.newMessage );
    }

    return (
        <Formik
            initialValues = {initialValues}
            onSubmit={(values, {resetForm}) => {
                addNewMessage(values);
                resetForm({values: {newMessage: ''}})
            }}>
            <Form>
                <Field
                    className={a.textarea}
                    name={'newMessage'}
                    id={'newMessage'}
                    as={'textarea'}
                    placeholder={"what's going on ..."}
                />
                <div>
                    <button className={s.button} type={'submit'}>Post</button>
                </div>
            </Form>
        </Formik>
    );
}

