import { ReactComponent as AccountCircleIcon } from "assets/icons/account_circle.svg";
import { ColorNeutralPalette } from "styles/Colors";
import { SizeEnum } from "styles/Spacer";
import { IconPropsInterface } from "./Icon.type";

const Icon = ({ name, size, color }: IconPropsInterface) => {
  const svgIconProps = {
    fill: color || ColorNeutralPalette.gray6,
    height: size || SizeEnum["5x"],
    width: size || SizeEnum["5x"],
  };

  const iconName = {
    accountCircle: <AccountCircleIcon {...svgIconProps} />,
  };

  return iconName[name];
};

export default Icon;
