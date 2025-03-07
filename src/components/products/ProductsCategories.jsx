import { products } from "../utils/constants"

const ProductsCategories = () => {
  return (
    <>
      <div>
        {
          products.map(product => {
            return (
              <div data-aos='fade-right' className="block sm:flex my-16 sm:my-20 bg-white rounded-md shadow-xl p-0 sm:p-10 gap-10">
                <img className="w-full  h-[450px] sm:h-auto sm:w-80 object-cover rounded-md hover:scale-105 duration-300" src={product.image} />
                <div className="p-4 sm:p-0">
                  <h1 className="text-2xl font-semibold text-[#004775] mt-6 sm:mt-0">{product.heading}</h1>
                  <p className="text-lg my-4 leading-relaxed">{product.description}</p>
                  <h3 className="text-xl font-medium mb-2">Key Features</h3>
                  {
                    product.features.map(feature => {
                      return(
                        <ul className="ml-6" style={{listStyle: 'square'}}>
                      
                        <li className="text-lg">{feature}</li>
                      </ul>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductsCategories
