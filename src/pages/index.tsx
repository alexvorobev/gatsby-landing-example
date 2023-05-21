import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";

import siteData from "../data";
import { Global, css } from "@emotion/react";
import { HeroSection } from "../components/HeroSection";

const IndexPage: React.FC<PageProps> = () => {
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
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
