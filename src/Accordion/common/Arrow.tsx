import upArrowIcon from "../assets/svgs/up-arrow.svg";
import downArrowIcon from "../assets/svgs/down-arrow.svg";
import { IconProps } from "./common.type";

function Arrow(props: IconProps) {
  const { isOpen, styles } = props;
  return isOpen ? (
    <img src={upArrowIcon} style={styles} />
  ) : (
    <img src={downArrowIcon} style={styles} />
  );
}

export default Arrow;
