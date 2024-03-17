import "./singleProduct.css"
import {Single} from "../../components/index"
import {singleProduct} from "../../DataItemsSideBar"
const SingleProduct = () => {
  return (
    <div className='single-product'>
  <Single data={singleProduct}  />
    </div>
  )
}

export default SingleProduct