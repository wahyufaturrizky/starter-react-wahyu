import { ColorDaybreakBluePalette, ColorNeutralPalette } from "styles/Colors";
import "./Spinner.css";
import { SpinnerPropsInterface } from "./Spinner.type";

const Spinner = (props: SpinnerPropsInterface) => {
  return (
    <div className="lds-ring">
      <div
        style={{
          borderColor: `${
            props.variant === "primary" || props.variant === undefined
              ? ColorNeutralPalette.gray1
              : props.color
              ? props.color
              : ColorDaybreakBluePalette.blue6
          } transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${
            props.variant === "primary" || props.variant === undefined
              ? ColorNeutralPalette.gray1
              : props.color
              ? props.color
              : ColorDaybreakBluePalette.blue6
          } transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${
            props.variant === "primary" || props.variant === undefined
              ? ColorNeutralPalette.gray1
              : props.color
              ? props.color
              : ColorDaybreakBluePalette.blue6
          } transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${
            props.variant === "primary" || props.variant === undefined
              ? ColorNeutralPalette.gray1
              : props.color
              ? props.color
              : ColorDaybreakBluePalette.blue6
          } transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
