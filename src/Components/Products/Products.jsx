import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Details from "../../Details/Details";

const Products = () => {
  const [products,setProduct] = useState([]);
   
  useEffect(()=>{
    fetch('./Products.json')
    .then(res => res.json())
    .then(data =>setProduct(data))
  },[]);

    return (
              <div className="flex justify-center ">
                 <div className="m-4">
                   <Details></Details>
                 </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-5xl">
                    {
                     products.map(product => <Product product={product} key={Product.product_id}></Product>)
                     }
                  </div>
              </div>
           
        
    );
};

export default Products;