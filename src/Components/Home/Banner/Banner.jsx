import BannerImg  from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='justify-center'>

        <div className="hero  bg-pink-500 text-white ">
           <div className="hero-content text-center">
              <div className="max-w-md">

               <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>

               <p className="py-6 text-sm">
               Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
               </p>

               <button className="btn bg-white text-pink-500 my-8">Get Started</button>
               <br /><br /><br />

            </div>
       </div>
     </div>  { <div className="-mt-20  justify-center border rounded-lg p-4" >
          <img className=' rounded-2xl mx-auto' src={BannerImg} alt="" />
        </div>
       }
</div>
    );
};

export default Banner;