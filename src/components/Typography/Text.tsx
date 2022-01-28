import {
  ColorCalendulaGoldPalette,
  ColorDaybreakBluePalette,
  ColorDustRedPalette,
  ColorNeutralPalette,
  ColorPolarGreenPalette,
} from "styles/Colors";
import { MarginEnum } from "styles/Spacer";
import { TextProps } from "./Text.type";

const Text = (props: TextProps) => {
  const TextTag = `${
    props.type === "code"
      ? "code"
      : props.type === "keyboard"
      ? "keyboard"
      : props.type === "underline"
      ? "u"
      : props.type === "delete"
      ? "del"
      : props.type === "strong"
      ? "strong"
      : props.type === "italic"
      ? "i"
      : props.type === "link"
      ? "a"
      : "p"
  }` as keyof JSX.IntrinsicElements;
  return props.label ? (
    <TextTag
      target={props.type === "link" ? props.target : undefined}
      href={props.type === "link" ? props.href : undefined}
      style={{
        textDecoration:
          props.type === "underline"
            ? "underline"
            : props.type === "delete"
            ? "line-through"
            : undefined,
        border:
          props.type === "code" || props.type === "keyboard"
            ? `1px solid ${ColorNeutralPalette.gray6}`
            : undefined,
        borderRadius:
          props.type === "code" || props.type === "keyboard" ? 2 : undefined,
        fontSize:
          props.type === "code" || props.type === "keyboard" ? 12 : undefined,
        backgroundColor:
          props.type === "code"
            ? ColorNeutralPalette.gray4
            : props.type === "keyboard"
            ? ColorNeutralPalette.gray3
            : undefined,
        cursor: props.type === "disabled" ? "not-allowed" : undefined,
        opacity: props.type === "disabled" ? 0.4 : undefined,
        userSelect: props.type === "disabled" ? "none" : undefined,
        color:
          props.type === "success"
            ? ColorPolarGreenPalette.green6
            : props.type === "warning"
            ? ColorCalendulaGoldPalette.gold6
            : props.type === "danger"
            ? ColorDustRedPalette.red6
            : props.type === "link"
            ? ColorDaybreakBluePalette.blue6
            : props.color ?? ColorNeutralPalette.gray10,
        textAlign: props.textAlign ?? "left",
        marginLeft: props.marginLeft ?? MarginEnum["0x"],
        marginRight: props.marginRight ?? MarginEnum["0x"],
        marginTop: props.marginTop ?? MarginEnum["0x"],
        marginBottom: props.marginBottom ?? MarginEnum["0x"],
      }}
    >
      {props.label}
    </TextTag>
  ) : (
    <TextTag
      target={props.type === "link" ? props.target : undefined}
      href={props.type === "link" ? props.href : undefined}
      style={{
        textDecoration:
          props.type === "underline"
            ? "underline"
            : props.type === "delete"
            ? "line-through"
            : undefined,
        border:
          props.type === "code" || props.type === "keyboard"
            ? `1px solid ${ColorNeutralPalette.gray6}`
            : undefined,
        borderRadius:
          props.type === "code" || props.type === "keyboard" ? 2 : undefined,
        fontSize:
          props.type === "code" || props.type === "keyboard" ? 12 : undefined,
        backgroundColor:
          props.type === "code"
            ? ColorNeutralPalette.gray4
            : props.type === "keyboard"
            ? ColorNeutralPalette.gray3
            : undefined,
        cursor: props.type === "disabled" ? "not-allowed" : undefined,
        opacity: props.type === "disabled" ? 0.4 : undefined,
        userSelect: props.type === "disabled" ? "none" : undefined,
        color:
          props.type === "success"
            ? ColorPolarGreenPalette.green6
            : props.type === "warning"
            ? ColorCalendulaGoldPalette.gold6
            : props.type === "danger"
            ? ColorDustRedPalette.red6
            : props.type === "link"
            ? ColorDaybreakBluePalette.blue6
            : props.color ?? ColorNeutralPalette.gray10,
        textAlign: props.textAlign ?? "left",
        marginLeft: props.marginLeft ?? MarginEnum["0x"],
        marginRight: props.marginRight ?? MarginEnum["0x"],
        marginTop: props.marginTop ?? MarginEnum["0x"],
        marginBottom: props.marginBottom ?? MarginEnum["0x"],
      }}
    >
      {props.children}
    </TextTag>
  );
};

export default Text;
