import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header } from '../components/Header';
import { GlobalStyles } from '../components/GlobalStyles';
import data from '../data';
import {
  AdvantagesSection,
  HeroSection,
  FAQSection,
  CallToActionSection,
  TestimonialsSection,
  ContentSection,
} from '../components/sections';

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
      case 'testimonials':
        return (
          <TestimonialsSection
            title={block.title}
            subtitle={block.subtitle}
            testimonials={block.testimonials}
          />
        );
      case 'callToAction':
        return (
          <CallToActionSection
            title={block.title}
            subtitle={block.subtitle}
            callToAction={block.callToAction}
          />
        );

      case 'content':
        return (
          <ContentSection
            title={block.title}
            subtitle={block.subtitle}
            content={block.content}
            align={block.alignment}
          />
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
