import React from 'react';
import OurStory from './OurStory';
import Mission from './Mission';
import Vision from './Vision';
import Values from './Values';
import Industries from './Industries';
import Team from './Team';
import Commitment from './Commitment';
import Ahead from './Ahead';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Aashirvad Electricals</title>
        <meta name="description" content="Learn about Aashirvad Electricals, our mission, values, and our commitment to providing high-quality electrical products." />
          <meta name="keywords" content="about Aashirvad Electricals, electrical company, electrical products supplier" />
            <meta property="og:title" content="About Us - Aashirvad Electricals" />
              <meta property="og:description" content="Discover our story, mission, and values at Aashirvad Electricals." />
                <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://www.aashirvadelectricals.com/about-us" />
                  </Helmet>
                  <OurStory />
                  <Mission />
                  <Vision />
                  <Values />
                  <Industries />
                  <Team />
                  <Commitment />
                  <Ahead />
                </>
                )
}

                export default AboutUs
