import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../Utility/addToDb";
import Product from "../Product/Product";

const DashBoard = () => {
    const[readList,setReadList] =useState([]);

   

   const allProducts = useLoaderData();
   useEffect(()=>{
    const storedReadList= getStoredReadList();

    const storedReadListInt =storedReadList.map(id =>parseInt(id));

    console.log(storedReadList,storedReadListInt,allProducts);
    const readProductList =allProducts.filter(product => storedReadListInt.includes(product.product_id));

    setReadList(readProductList);

   },[])
 
    const handleSort = sortType => {
      setSort(sortType);
    }
    return (
        <div>
             <div className="justify-items-center bg-violet-600 text-white p-6">
                 <h2 className="font-bold text-3xl">Dashboard</h2>
                 <p className="mt-4">Explore the latest gadgets that will take your  experience to the next level. From smart devices to the coolest  accessories, we have it all!</p>
                 <div className="flex gap-8 mt-4 ">
                     <button className="border px-4 rounded-full">Cart</button>
                     <button  className="border px-4 rounded-full">Wishlist</button>
                  </div>
                </div>
                  <h2 className="font-bold text-3xl m-8">Card</h2>
                  <div className="m-8 flex  justify-between">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto">
                        {
                          readList.map(product => <Product key={product.product_id} product={product}></Product>)  
                        }
                    </div>
                 
               </div>
        </div>
    );
};

export default DashBoard;