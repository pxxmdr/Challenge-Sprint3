import { InputField } from "./InputWithLabel.styled"

interface InputWithLabelProps {
    label: string,
    inputId: string,
    type: string
}

export const InputWithLabel = ({label, inputId, type}: InputWithLabelProps) => {
    return (
        <InputField >
            <label htmlFor={inputId}>{label}</label>
            <input id = {inputId} type={type} />
        </InputField>
    )
}