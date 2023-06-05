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
  ContactSection,
} from '../components/sections';
import { Footer } from '../components/Footer';

const ALLOW_URL_DATA = true;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [pageData, setPageData] = React.useState<any>({});
  const params = React.useMemo(() => new URLSearchParams(location.search), [location]);
  const urlData = React.useMemo(() => params.get('data'), []);

  React.useEffect(() => {
    if (ALLOW_URL_DATA && urlData) {
      setPageData(JSON.parse(urlData));
    } else {
      setPageData(data);
    }
  }, [urlData]);

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
            image={block.images}
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
          title={pageData?.title ?? ''}
          items={pageData?.navMenu?.items}
          callToAction={pageData?.callToAction}
        />
        <HeroSection title={pageData?.title} subtitle={pageData?.subtitle} image={pageData?.img} callToAction={pageData?.callToAction} />
        {pageData?.blocks?.map((block: any) => (
          <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
        ))}
        <ContactSection
          title={pageData?.contactForm?.title}
          subtitle={pageData?.contactForm?.subtitle}
          callToAction={pageData?.callToAction}
        />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
