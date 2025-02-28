import React from 'react'
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, path }) => {
    return (
        <Link to={path} className="primaryButton">
            {text}
        </Link>
    );
};

export default PrimaryButton
