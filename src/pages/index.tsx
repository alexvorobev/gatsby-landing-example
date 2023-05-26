import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header } from '../components/Header';
import { GlobalStyles } from '../components/GlobalStyles';
import data from '../data';
import { AdvantagesSection, HeroSection } from '../components/sections';
import { FAQSection } from '../components/sections/FAQSection';

const IndexPage: React.FC<PageProps> = () => {
  const renderBlock = (block: any) => {
    switch (block.type) {
      case 'features':
        return (
          <AdvantagesSection
            title={block.title}
            subtitle={block.subtitle}
            features={block.features}
          />
        );
      case 'faq':
        return (
          <FAQSection title={block.title} subtitle={block.subtitle} questions={block.questions} />
        );
      default:
        return null;
    }
  };

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
        {data.blocks.map((block: any) => (
          <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
        ))}
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
