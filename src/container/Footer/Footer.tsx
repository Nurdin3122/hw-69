import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
                <div className="text-center p-3">
                    <Link to="/" className="text-body" >Home</Link>
                </div>
        </>
    );
};

export default Footer;