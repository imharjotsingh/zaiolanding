import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Box2 from 'reusecore/src/elements/Box2';

import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import FeatureBlock2 from '../../../components/FeatureBlock2';

import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="LEARN MORE" {...btnStyle} />
      <Button
        title="WATCH WORKS"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            
            <FeatureBlock 
              title={
                <Heading
                  content="Looking for tech services?"
                  {...title}
                />
              }
              description={
                <Text
                  content="Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly ."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
          <Box2 className="col" {...col}>
            
            <FeatureBlock2 style={{color: "white"}}
              title2={
                <Heading
                  content="Looking for tech services?"
                  {...title}
                />
              }
              description2={
                <Text
                  content="Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly ."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box2>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
   // color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    //color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  title2: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description2: {
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
