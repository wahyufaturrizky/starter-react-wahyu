import { ColorNeutralPalette } from "styles/Colors";
import { MarginEnum } from "styles/Spacer";
import { TitleProps } from "./Title.type";

const Title = (props: TitleProps) => {
  const TitleTag = `h${props.level ?? "1"}` as keyof JSX.IntrinsicElements;
  return props.label ? (
    <TitleTag
      style={{
        color: props.color ?? ColorNeutralPalette.gray10,
        textAlign: props.textAlign ?? "left",
        marginLeft: props.marginLeft ?? MarginEnum["0x"],
        marginRight: props.marginRight ?? MarginEnum["0x"],
        marginTop: props.marginTop ?? MarginEnum["0x"],
        marginBottom: props.marginBottom ?? MarginEnum["0x"],
      }}
    >
      {props.label}
    </TitleTag>
  ) : (
    <TitleTag
      style={{
        color: props.color ?? ColorNeutralPalette.gray6,
        textAlign: props.textAlign ?? "left",
      }}
    >
      {props.children}
    </TitleTag>
  );
};

export default Title;
