import { NavLink } from "react-router-dom";


const NavBar = () => {
    const links = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='statistics'>Statistics</NavLink></li>
       <li><NavLink to='dashboard'>Dashboard</NavLink></li>

    </>
    return (
        <div className="navbar bg-violet-600 ">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
      </div>

      <div className="navbar-center lg:flex">

       <ul className="menu md:menu-horizontal px-1 text-white ">
           {links}
       </ul>
      </div>
      
      <div className="navbar-end">
      <a className=""> <input type="btn" name="rating-3" className="mask mask-heart bg-white" /></a>
      </div>
     </div>
    );
};

export default NavBar;     
 