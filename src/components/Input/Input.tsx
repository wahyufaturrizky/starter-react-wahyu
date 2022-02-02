import { BorderRadiusEnum, PaddingEnum } from "styles/Spacer";
import { InputProps } from "./Input.type";

const Input = (props: InputProps) => {
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        className="input"
        style={{
          width: "100%",
          padding: `${PaddingEnum["2x"]} ${PaddingEnum["4x"]}`,
          borderRadius: props.borderRadius ?? BorderRadiusEnum["0x"],
        }}
        name={props.name}
        id={props.id}
        placeholder={props.placeHolder ?? "Placeholder here"}
        value={props.value}
        required={props.required}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
