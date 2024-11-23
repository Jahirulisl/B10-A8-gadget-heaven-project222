

const Footer = () => {
    return (
        <div>
          <div className="text-center bg-base-200 p-4 ">
            <h2 className="font-bold text-3xl">Gadget Heaven</h2>
            <p className="mt-4">Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider"></div>
          </div>
          
         <footer className="footer bg-base-200 p-10  gap-8  justify-items-center mx-auto ">
         <nav>
          <h6      className="footer-title">Services</h6>
         <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
         <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>

        <a className="link link-hover">About us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Contact</a>
      
       </nav>

      <nav>
        <h6 className="footer-title font-bold text-black">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link   link-hover">Cookie policy</a>
      </nav>
   </footer>
 </div>
    );
};

export default Footer;
