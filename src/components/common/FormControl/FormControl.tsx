import React from 'react';
import {Textarea} from './Textarea/Textarea';
import {Input} from './Input/Input';

type FormControlType = {
    control: string
    name: string
    placeholder: string
    error?: boolean
}

export const FormControl = (props: FormControlType) => {
    const {control, ...rest} = props
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        default:
            return null
    }
}