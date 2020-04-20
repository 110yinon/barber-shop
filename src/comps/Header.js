import React from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Header = () => {
    return (
        <div className="header grid">
            <h3 className="full-name">Yossi Yakir</h3>
            <h1 className="barber-shop">Barber Shop</h1>
            <div className="phone">
                <IoIosCall className="call" />
                <p>‏053-673-4408‏</p>
            </div>
            <div className="socials">
                <FaFacebookSquare className="facebook" />
                <FaInstagram className="instagram" />
            </div>

        </div>
    );
}
export default Header;