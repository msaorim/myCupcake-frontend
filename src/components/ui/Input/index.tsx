import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { };
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Input({ ...rest }: InputProps) {
    return (
        <input className={styles.input}{...rest} />
    )
}

export function TextArea({ ...rest }: TextAreaProps) {
    return (
        <textarea className={styles.textarea}{...rest} />
    )
}


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565