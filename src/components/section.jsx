import { sectionStyle } from "../styles/main-style";
import SectionLayout from "./main-components/section-layout";

export default function Section(props) {
  return (
    <section className={`${sectionStyle} ${props.uniqueStyle? props.uniqueStyle : ""}`}>
      <SectionLayout>{props.children}</SectionLayout>
    </section>
  );
}
