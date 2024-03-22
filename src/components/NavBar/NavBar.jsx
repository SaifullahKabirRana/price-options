import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '/404' }
    ];

    return (
        <nav className="p-6">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden ">
                {
                    open === true ? <IoCloseSharp></IoCloseSharp> : <GiHamburgerMenu></GiHamburgerMenu>
                }

            </div>
            <ul className={`md:flex md:gap-4 absolute md:static bg-sky-200 px-4 py-2 rounded-xl text-black font-medium shadow-xl border border-white
            ${open ? "top-14" : "-top-60"} duration-1000
            `} >
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>

        </nav>
    );
};


export default NavBar;