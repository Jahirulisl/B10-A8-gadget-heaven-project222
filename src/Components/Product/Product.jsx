
const Product = ({product}) => {
    const {product_image,product_title,category,price}= product;
    return (
        <div className="card bg-base-100 border ">
        <figure>
          <img className="h-[322px] w-[380px] p-4"
            src= {product_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product_title}
          </h2>
          <p>{}</p>
          <p>{  <p>Price ${price}</p>}</p>
          <div className="card-actions">
            <button  className="badge badge-outline text-violet-800 mt-4 font-semibold">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Product;