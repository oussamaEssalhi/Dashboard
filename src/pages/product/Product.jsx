
import "./product.css";
import {Add, Table} from "../../components/index";
import {columnsProduct,products} from '../../DataItemsSideBar'
import { useState } from "react";


const Products = () => {
  const [open , setOpen]=useState(false);
  
  return (
    <div className="product">
      <div className="product-info">
        <h1>product</h1>
        <button onClick={()=>{setOpen(true)}}>Add product</button>
      </div>
      <div className="table-product">
        <Table  dataRow={products} dataColumn={columnsProduct} />
      </div>
      {open&&<Add handelclick={setOpen} title="product" columns={columnsProduct}/>}
    </div>
  );
};

export default Products;
