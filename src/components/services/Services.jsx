import Intro from './Intro'
import Categories from './Categories'
import { Helmet } from 'react-helmet'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Aashirvad Electricals</title>
        <meta name="description" content="Discover our range of services including installation, maintenance, and consultation for electrical products." />
          <meta name="keywords" content="electrical services, installation, maintenance, electrical consultation" />
            <meta property="og:title" content="Services - Aashirvad Electricals" />
              <meta property="og:description" content="Learn about our professional electrical services including installation and maintenance." />
                <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://www.aashirvadelectricals.com/services" />
                  </Helmet>
                  <Intro />
                  <Categories />
                </>
                )
}

                export default Services
