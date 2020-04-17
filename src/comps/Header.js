import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header">
            <h3>Yossi Yakir</h3>
            <h1>Barber Shop</h1>
            <p>‏053-673-4408‏</p>
            <FaFacebookSquare className="facebook"/>
        </div>
    );
}
export default Header;