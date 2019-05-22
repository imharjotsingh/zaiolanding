import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { rentTheme } from 'common/src/theme/rent';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Rent/rent.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Rent/Navbar';
import FeatureSection from 'common/src/containers/Rent/Features';
import InfoSection from 'common/src/containers/Rent/Info';
import DomainSection from 'common/src/containers/Rent/Domain';
import PaymentSection from 'common/src/containers/Rent/Payment';
import GuaranteeSection from 'common/src/containers/Rent/Guarantee';
import FaqSection from 'common/src/containers/Rent/Faq';
import ServicesSection from 'common/src/containers/Rent/Services';
import BannerSection from 'common/src/containers/Rent/Banner';
import PricingSection from 'common/src/containers/Rent/Pricing';
import TestimonialSection from 'common/src/containers/Rent/Testimonials';
import ContactSection from 'common/src/containers/Rent/Contact';
import Footer from 'common/src/containers/Rent/Footer';
import TimelineSection from 'common/src/containers/Rent/TimelineSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => {
  return (
    <ThemeProvider theme={rentTheme}>
      <ParallaxProvider>
        <Head>
          <title>Zaio</title>
          <meta name="Description" content="Rent A Team" />
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
