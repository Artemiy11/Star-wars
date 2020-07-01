import React from 'react';
import './errorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-block">
            <img className="error-image" src="https://img.icons8.com/ios/100/100000/death-star.png" alt="error"/>
            <span className="error">Something has gone terribly wrong</span>
            <span className="error">(We already have sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;