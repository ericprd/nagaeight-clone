import { sectionStyle } from "../styles/main-style";
import BackgroundSection from "./main-components/background-section";
import SectionLayout from "./main-components/section-layout";
import MainLayout from "./main-components/section-layout";

export default function Section(props) {
  return (
    <section className={`${sectionStyle} ${props.uniqueStyle}`}>
      <SectionLayout>{props.children}</SectionLayout>
    </section>
  );
}
