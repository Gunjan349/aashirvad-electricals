import Intro from './Intro';
import ProductsCategories from './ProductsCategories';
import { Helmet } from 'react-helmet'
const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Aashirvad Electricals</title>
        <meta name="description" content="Browse our extensive range of electrical products including LT cables, HT insulators, switches, and more." />
          <meta name="keywords" content="electrical products, LT cables, HT insulators, switches, electrical supplies" />
            <meta property="og:title" content="Products - Aashirvad Electricals" />
              <meta property="og:description" content="Explore our high-quality electrical products including cables, insulators, and switches." />
                <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://www.aashirvadelectricals.com/products" />
                  </Helmet>
                  <Intro />
                  <ProductsCategories />
                </>
                )
}

                export default Products
