import { NavLink } from "react-router-dom";


const NavBar = () => {
    const links = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='statistics'>Statistics</NavLink></li>
       <li><NavLink to='dashboard'>Dashboard</NavLink></li>
       <li><NavLink to='listedProducts'>ListedProduct</NavLink></li>
     
    </>
    return (
        <div className="navbar bg-pink-500">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      <div className="navbar-center lg:flex">

       <ul className="menu md:menu-horizontal px-1 ">
           {links}
       </ul>
      </div>
      <div className="navbar-end">
      <a className="btn">Button</a>
      </div>
     </div>
    );
};

export default NavBar;     
