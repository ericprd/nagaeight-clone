import { backgroundStyle } from "../../styles/main-style";

export default function BackgroundSection(props) {
  return <div className={backgroundStyle}>{props.children}</div>;
}
