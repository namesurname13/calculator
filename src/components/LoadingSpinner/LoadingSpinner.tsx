import React from 'react';
import {Spinner} from "react-bootstrap";
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
    return (
        <Spinner animation={"border"} role={"status"} variant={'primary'} className={"spinner"}>
            <span className={"visually-hidden"}>Loading...</span>
        </Spinner>
    );
};

export default LoadingSpinner;