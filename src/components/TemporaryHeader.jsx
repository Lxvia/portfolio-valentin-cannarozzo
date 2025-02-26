import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const TemporaryHome = () => {
    return (
        <div className="temporaryHeaderContainer">
            <div className="temporaryHeader">
                <h1>Valentin <br />Cannarozzo.</h1>
                <h3>Portfolio d&rsquo;Art en préparation</h3>
                <p>En attendant, vous pouvez me contacter par mail et sur mes réseaux&nbsp;:</p>
                <div className="icons">
                    <a href="https://www.instagram.com/valentin.cnrz/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} color="#144619" />
                    </a>
                    <a href="mailto:cannarozzovalentin@gmail.com">
                        <FaEnvelope size={30} color="#144619" />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default TemporaryHome
