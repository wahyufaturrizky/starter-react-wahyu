import Spinner from "components/Loader/Spinner";
import { useState } from "react";
import { ColorDaybreakBluePalette, ColorNeutralPalette } from "styles/Colors";
import { BorderRadiusEnum, MarginEnum, PaddingEnum } from "styles/Spacer";
import { ButtonNormalPropsInterface } from "./Button.Normal.type";

const ButtonNormal = (props: ButtonNormalPropsInterface) => {
  const [hover, setHover] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);
  return (
    <button
      disabled={props.loading || props.disabled}
      style={{
        alignItems: props.icon ? "center" : undefined,
        display: props.icon ? "flex" : undefined,
        marginLeft: props.marginLeft ?? MarginEnum["0x"],
        marginRight: props.marginRight ?? MarginEnum["0x"],
        marginTop: props.marginTop ?? MarginEnum["0x"],
        marginBottom: props.marginBottom ?? MarginEnum["0x"],
        width: props.block ? "100%" : undefined,
        cursor: props.loading || props.disabled ? "not-allowed" : "pointer",
        fontSize: props.size === "large" ? 16 : 14,
        paddingLeft: props.icon
          ? PaddingEnum["0.5x"]
          : props.size === "small"
          ? PaddingEnum["1x"]
          : props.size === "large"
          ? PaddingEnum["2.5x"]
          : PaddingEnum["2.5x"],
        paddingRight: props.icon
          ? PaddingEnum["0.5x"]
          : props.size === "small"
          ? PaddingEnum["1x"]
          : props.size === "large"
          ? PaddingEnum["2.5x"]
          : PaddingEnum["2.5x"],
        paddingTop: props.icon
          ? PaddingEnum["0.5x"]
          : props.size === "small"
          ? PaddingEnum["0.5x"]
          : props.size === "large"
          ? PaddingEnum["1x"]
          : PaddingEnum["0.5x"],
        paddingBottom: props.icon
          ? PaddingEnum["0.5x"]
          : props.size === "small"
          ? PaddingEnum["0.5x"]
          : props.size === "large"
          ? PaddingEnum["1x"]
          : PaddingEnum["0.5x"],
        backgroundColor: props.ghost
          ? "transparent"
          : props.variant === "secondary" ||
            props.variant === "dashed" ||
            props.variant === "text" ||
            props.variant === "link"
          ? ColorNeutralPalette.gray1
          : props.color
          ? props.color
          : ColorDaybreakBluePalette.blue6,
        color:
          props.variant === "secondary" ||
          props.variant === "dashed" ||
          props.variant === "link"
            ? props.color
              ? props.color
              : ColorDaybreakBluePalette.blue6
            : props.variant === "text"
            ? props.color
              ? props.color
              : ColorNeutralPalette.gray12
            : ColorNeutralPalette.gray1,
        border: `${
          props.variant === "text" || props.variant === "link" ? "0px" : "1px"
        } ${props.variant === "dashed" ? "dashed" : "solid"} ${
          props.color ?? ColorDaybreakBluePalette.blue6
        }`,
        opacity:
          pressed || props.loading || props.disabled
            ? 0.4
            : hover
            ? 0.7
            : undefined,
        borderRadius:
          props.shape === "round"
            ? BorderRadiusEnum["wide"]
            : props.shape === "circle"
            ? "100%"
            : 2,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...props}
    >
      {props.icon}
      {props.loading && <Spinner color={props.color} {...props} />}
      {props.loading ? " Loading ..." : props.label}
    </button>
  );
};

export default ButtonNormal;
