import React,{useState, useEffect} from 'react';


const Header =()=>{

    return(
        <>
        <header>
    <div id="logo">
       <h1><i class="fa fa-globe"></i><a href="#">Know-The-World</a></h1>
    </div>
    <nav>
       <span id="hamburger"><i class="fa fa-bars"></i></span>
        {/* <ul>
            <li><a href="#">Welcome</a></li>
            <li><a href="#">Dropdown</a></li>
            <li><a href="#">Left Siedbar</a></li>
            <li><a href="#">Right Sidebar</a></li>
            <li><a href="#">No Sidebar</a></li>
        </ul> */}
    </nav>
        </header >
        </>
    )

}

export default Header