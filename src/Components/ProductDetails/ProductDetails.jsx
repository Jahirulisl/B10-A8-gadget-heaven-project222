import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const {product_id} = useParams();

  const data = useLoaderData();

  const id = parseInt(product_id);

  const product = data.find(product => product.product_id===id);

  const {product_id:newProduct_id,product_image,product_title,price,description,specification,rating} =product;
    return (
      <div>
      <div className='w-full h-60 p-4 text-center bg-pink-800 text-white'>
        <h2 className='font-bold text-3xl'>Product Details</h2>
        <p className='text-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      <div className='flex justify-center border p-4 gap-8'>
          <div className='-mt-8'>
           <img src={product_image} alt="" />
          </div>

          <div className='mt-4'>
           <p className='font-semibold text-2xl mt-4'>{product_title}</p>
           <p className='mt-4'>price : $ {price}</p>
           <button className='rounded-full bg-amber-100 px-4 py-1 mt-4'>In Stock</button>
           <p>{description}</p>
            <br/>
           <div>
            <h2>Specification</h2>
            <li>{specification[0]}</li>
            <li>{specification[1]}</li>
            <li>{specification[2]}</li>
            <li>{specification[3]}</li>
       </div>

       <br />

      <div>
          <h2>Rating</h2>
          <div className='flex gap-4 mt-4'>
          <div className="rating">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

            <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked />
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <input type="radio" name="rating-2" className="mask mask-star-2    bg-orange-400" />
           </div>

             <div>
                {rating}
             </div>

           </div>
          <div className='font-bold bg-pink-500 text-white text-center mt-4 rounded-full'>
             <button>Add To Card</button>
          </div>  
       </div>
      </div>
   </div>
 </div> 
    );
  }

export default ProductDetails;