
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
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Product;