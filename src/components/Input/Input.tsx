import { ColorDustRedPalette } from "styles/Colors";
import {
  BorderRadiusEnum,
  MarginEnum,
  PaddingEnum,
  SizeEnum,
} from "styles/Spacer";
import { InputProps } from "./Input.type";

const Input = (props: InputProps) => {
  return (
    <div
      style={{
        marginBottom: props.marginBottom ?? MarginEnum["0x"],
        marginRight: props.marginRight ?? MarginEnum["0x"],
        marginLeft: props.marginLeft ?? MarginEnum["0x"],
        marginTop: props.marginTop ?? MarginEnum["0x"],
      }}
    >
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        className="input"
        disabled={props.disabled}
        style={{
          width: "100%",
          padding:
            props.size === "small"
              ? props.icon
                ? `${PaddingEnum["0x"]} ${PaddingEnum["2x"]} ${PaddingEnum["0x"]} ${PaddingEnum["3x"]}`
                : `${PaddingEnum["0x"]} ${PaddingEnum["2x"]}`
              : props.size === "large"
              ? props.icon
                ? `${PaddingEnum["4x"]} ${PaddingEnum["4x"]} ${PaddingEnum["4x"]} 48px`
                : `${PaddingEnum["4x"]} ${PaddingEnum["2x"]}`
              : props.icon
              ? `${PaddingEnum["2x"]} ${PaddingEnum["4x"]} ${PaddingEnum["2x"]} 40px`
              : `${PaddingEnum["2x"]} ${PaddingEnum["4x"]}`,
          borderRadius: props.borderRadius ?? BorderRadiusEnum["0x"],
          marginTop: props.label ? MarginEnum["2x"] : MarginEnum["0x"],
          fontSize: props.size === "large" ? SizeEnum["4x"] : undefined,
          cursor: props.disabled ? "not-allowed" : undefined,
          backgroundImage: props.icon ? `url(${props.icon})` : undefined,
          backgroundPosition: props.icon
            ? props.size === "large"
              ? `${MarginEnum["3x"]} ${MarginEnum["3x"]}`
              : props.size === "small"
              ? `${MarginEnum["0.5x"]} ${MarginEnum["0.5x"]}`
              : `${MarginEnum["1x"]} ${MarginEnum["1x"]}`
            : undefined,
          backgroundSize: props.size === "small" ? SizeEnum["1x"] : undefined,
          backgroundRepeat: props.icon ? "no-repeat" : undefined,
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
