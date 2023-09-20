import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

const NavBar = () => {
    const [open ,setOpen]=useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/blog/:id', name: 'Blog Post', id: 'blog-post' }
    ];

    return (
        <nav className="bg-red-700 p-4">
           <div className="md:hidden text-2xl " onClick={()=> setOpen(!open)}>
            {
                open === true? <RiCloseFill></RiCloseFill> 
                :<RiMenu2Fill></RiMenu2Fill>
            }
            
           </div>
            <ul className={`md:flex hover:text-yellow absolute duration-1000  text-white font-semibold ${open? 'top-32':'-top-64'} bg-red-700 px-6 md:static`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>) 
            }
            </ul>
        </nav>
    );
};

export default NavBar;