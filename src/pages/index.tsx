import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header } from '../components/Header';
import { GlobalStyles } from '../components/GlobalStyles';
import data from '../data';
import { HeroSection } from '../components/sections';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header
          title={data.navMenu.title}
          items={data.navMenu.items}
          callToAction={data.callToAction}
        />
        <HeroSection title={data.title} subtitle={data.subtitle} callToAction={data.callToAction} />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
