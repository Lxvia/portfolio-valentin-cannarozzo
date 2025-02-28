import React from 'react'
import styles from '../styles/components/PrimaryButton.module.scss'
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, path }) => {
    return (
        <Link to={path} className={styles.primaryButton}>
            {text}
        </Link>
    );
};

export default PrimaryButton
