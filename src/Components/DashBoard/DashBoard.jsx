
const DashBoard = () => {

   


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
               <div className="m-8 flex  justify-between">
                   <div>Cart</div>
                     <div className="flex justify-end gap-4">
                      <button className="font-bold">Total cost: 999.99</button>
                      <button className="outline px-4 rounded-full text-violet-700">Sort by Price</button>
                      <button className="bg-violet-700 text-white px-4 py-2 rounded-full">Purchase</button>
                     </div>
               </div>
        </div>
    );
};

export default DashBoard;