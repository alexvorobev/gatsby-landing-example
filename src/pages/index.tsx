import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";

import siteData from "../data";
import { Global, css } from "@emotion/react";
import { HeroSection } from "../components/HeroSection";
import { FAQSection } from "../components/FAQSection/FAQSection";

type TestimonialItemType = {
  name: string;
  position: string;
  text: string;
};

type TestimonialsBlockType = {
  id: string;
  type: "testimonials";
  title: string;
  subtitle?: string;
  testimonials: Array<TestimonialItemType>;
};

type FAQItemType = {
  question: string;
  answer: string;
};

type FAQBlockType = {
  id: string;
  type: "faq";
  title: string;
  subtitle?: string;
  questions: FAQItemType[];
};

type FeatureItemType = {
  title: string;
  subtitle: string;
  icon: string; // Feather Icon key
};

type FeaturesBlockType = {
  id: string;
  type: "features";
  title: string;
  subtitle?: string;
  features: FeatureItemType[];
};

type CallToActionBlockType = {
  id: string;
  type: "callToAction";
  title: string;
  subtitle?: string;
  callToAction: string;
};

type ContactBlockType = {
  id: string;
  type: "contact";
  title: string;
  subtitle?: string;
};

type NavMenuItemType = {
  title: string;
  blockId: string;
};

type NavMenuType = {
  items: NavMenuItemType[];
};

type ContentBlockAlignment = "left" | "right";

type ContentBlockType = {
  id: string;
  type: "content";
  title: string;
  subtitle?: string;
  content: string;
  alignment: ContentBlockAlignment;
};

type BlockType =
  | TestimonialsBlockType
  | FAQBlockType
  | FeaturesBlockType
  | CallToActionBlockType
  | ContactBlockType
  | ContentBlockType;

const IndexPage: React.FC<PageProps> = () => {
  const blocksList = siteData.blocks as BlockType[];
  const renderBlock = React.useCallback((block: BlockType) => {
    if (block.type === "faq") {
      const faqBlockData: FAQBlockType = block;

      return (
        <FAQSection
          title={faqBlockData.title}
          subtitle={faqBlockData.subtitle}
          questions={faqBlockData.questions}
        />
      );
    }
  }, []);

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${siteData.colorTheme.background};
            font-family: "SF UI Text", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            margin: 0;
            padding: 0;
            min-height: "100vh";
            max-width: "100vw";

            --primary: ${siteData.colorTheme.primary};
            --secondary: ${siteData.colorTheme.secondary};
            --accent: ${siteData.colorTheme.accent}CC;
            --accent-hover: ${siteData.colorTheme.accent};
            --text: ${siteData.colorTheme.text};
            --background: ${siteData.colorTheme.background};
            --link: ${siteData.colorTheme.link};
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <main>
        <Header
          items={siteData.navMenu.items}
          title={siteData.title}
          callToAction={siteData.callToActions}
        />
        <HeroSection
          title={siteData.title}
          subtitle={siteData.subtitle}
          callToAction={siteData.callToActions}
        />
        {blocksList.map((block: BlockType) => renderBlock(block))}
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
