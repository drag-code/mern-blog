import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="border-b-4 border-green-700 text-center fixed top-0 left-0 right-0 bg-gray-800 font-bold text-lg text-white">
            <ul className="inline-block pt-4 pb-4 ">
                <Link to="/" className="pl-6 pr-8">Home</Link>
                <Link to="/articles" className="pl-6 pr-8">Articles</Link>
                <Link to="/about" className="pl-6 pr-8">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar;
