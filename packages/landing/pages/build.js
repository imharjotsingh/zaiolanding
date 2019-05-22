import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { buildTheme } from 'common/src/theme/build';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Build/build.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Build/Navbar';
import FeatureSection from 'common/src/containers/Build/Features';
import InfoSection from 'common/src/containers/Build/Info';
import DomainSection from 'common/src/containers/Build/Domain';
import PaymentSection from 'common/src/containers/Build/Payment';
import GuaranteeSection from 'common/src/containers/Build/Guarantee';
import FaqSection from 'common/src/containers/Build/Faq';
import ServicesSection from 'common/src/containers/Build/Services';
import BannerSection from 'common/src/containers/Build/Banner';
import PricingSection from 'common/src/containers/Build/Pricing';
import TestimonialSection from 'common/src/containers/Build/Testimonials';
import ContactSection from 'common/src/containers/Build/Contact';
import Footer from 'common/src/containers/Build/Footer';
import TimelineSection from 'common/src/containers/Build/TimelineSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => {
  return (
    <ThemeProvider theme={buildTheme}>
      <ParallaxProvider>
        <Head>
          <title>Zaio</title>
          <meta name="Description" content="Build MVP/Prototype" />
          <meta name="theme-color" content="#133153" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BannerSection />
          <FeatureSection />
          <TimelineSection />
          <PricingSection />
          <TestimonialSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
