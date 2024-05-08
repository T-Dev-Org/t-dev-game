import React from 'react';
import { Link } from 'react-router-dom';
import "./NextLevelButton.css"

const NextLevelButton = ({ to }) => {
    return (
        <div className="container-button">
            <Link to={to} className="button-next">Siguiente</Link>
        </div>
    );
};

export default NextLevelButton;
