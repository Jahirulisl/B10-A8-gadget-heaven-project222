

const NavBar = () => {
    return (
        <div className="navbar bg-pink-500">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      <div className="navbar-center lg:flex">

       <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
       </ul>
      </div>
      <div className="navbar-end">
      <a className="btn">Button</a>
      </div>
     </div>
    );
};

export default NavBar;