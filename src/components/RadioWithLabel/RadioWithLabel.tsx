import { RadioField } from "./RadioWithLabel.styled";

interface RadioWithLabelProps {
  name: string;
  label: string;
}

export const RadioWithLabel = ({ label, name }: RadioWithLabelProps) => {
  return (
    <RadioField>
      <label>{label}</label>
      <div className="fields">
        <div className="field">
          <input
            type="radio"
            id={`yes${name}`}
            value={`yes${name}`}
            name={name}
          />
          <label htmlFor={`yes${name}`}>Sim</label>
        </div>
        <div className="field">
          <input
            type="radio"
            id={`no${name}`}
            value={`no${name}`}
            name={name}
          />
          <label htmlFor={`no${name}`}>Não</label>
        </div>
      </div>
    </RadioField>
  );
};
