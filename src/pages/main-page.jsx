import About from "../components/main-components/about";
import AboutBackground from "../components/main-components/about-background";
import ArticleLayout from "../components/main-components/article-layout";
import BackgroundSection from "../components/main-components/background-section";
import Concept from "../components/main-components/concept";
import ConceptBackground from "../components/main-components/concept-background";
import Intro from "../components/main-components/intro";
import Menu from "../components/main-components/menu";
import OurMenus from "../components/main-components/our-menus";
import OurMenusBackground from "../components/main-components/our-menus-background";
import Section from "../components/section";
import { rightPos } from "../styles/article-style";

export default function MainPages() {
  return (
    <main className='min-h-[100vh] pt-[54px] pb-[15px] lg:pt-[75px] lg:pb-[22px]'>
      <canvas className='w-[calc(100%-44px)] h-[calc(100vh-97px)] fixed top-[75px] left-[22px]'></canvas>
      <div className='overflow-hidden min-h-[calc(100%-97px)]'>
        <Section uniqueStyle='md w-full bg-black '>
          <Intro />
        </Section>

        <Section>
          <BackgroundSection>
            <AboutBackground />
          </BackgroundSection>
          <ArticleLayout pos={rightPos}>
            <About />
          </ArticleLayout>
        </Section>

        <Section>
          <BackgroundSection>
            <ConceptBackground />
          </BackgroundSection>
          <ArticleLayout>
            <Concept />
          </ArticleLayout>
        </Section>

        <Section>
          <BackgroundSection>
            <OurMenusBackground />
          </BackgroundSection>
          <ArticleLayout>
            <OurMenus />
          </ArticleLayout>
        </Section>

        <Section>
          <div className="bg-[url('https://nagaeight.com/themes/nagaeight/assets/img/home/discover_section2.jpg')] absolute top-0 left-0 right-0 bottom-0 w-[200%] -z-[10] bg-cover origin-[50%] scale-100 "></div>
          <Menu />
        </Section>
      </div>
    </main>
  );
}
