import { TextAreaField } from "./TextAreaWithLabel.styled"

interface TextAreaWithLabelProps {
    label: string,
    inputId: string,
}

export const TextAreaWithLabel = ({label, inputId}: TextAreaWithLabelProps) => {
    return (
        <TextAreaField >
            <label htmlFor={inputId}>{label}</label>
            <textarea id={inputId} rows={5} />
        </TextAreaField>
    )
}