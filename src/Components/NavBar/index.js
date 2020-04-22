import React, { useState, useEffect } from 'react';
import SideBar  from '../../Components/SideBar';
import scrollToTop from '../../Helpers/scrollToTop';
import logo from '../../img/logo.png';



export function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(()=>{
    //Automatically scroll back to the top of the page whenever the page reloads
    scrollToTop();
  });

  return (
    <React.Fragment>
      <div className="d-lg-none d-md-none pt-3 pb-2">
        <div>
          <img  src={logo} alt="Logo" />
        </div>

        <div>
          <button className="navbar-toggler button-bars pr-5" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={() => toggleSidebar()} >
            <span className={`fa ${sidebarVisible ? 'fa-times' : 'fa-bars'}`} id="navicon"></span>
          </button>
        </div>
      </div>
      <div className="background">

        <div>
          <SideBar visible={sidebarVisible} />
        </div>

        <div className='main d-flex flex-column' onClick={()=> setSidebarVisible(false)}>
         
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
