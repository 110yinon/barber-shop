import React from 'react';
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Header = () => {
    return (
        <div className="header">
            <h3>Yossi Yakir</h3>
            <h1>Barber Shop</h1>
            <p>‏053-673-4408‏</p>
            <IoIosCall className="call"/>
            <FaFacebookSquare className="facebook"/>
            <FaInstagram className="instagram"/>
        </div>
    );
}
export default Header;