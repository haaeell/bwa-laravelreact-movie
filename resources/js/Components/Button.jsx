import React from "react";
import PropTypes from 'prop-types';


Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
}


export default function Button({ 
    type = 'submit',
    className = '', 
    variant = 'primary',
    processing, 
    children, }) {
    return (
        <button
            type={type}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-25'} btn-${variant} ${className}`
            }
            disabled={processing}
        >
           
            <span className="text-base font-semibold">
                                     {children}
                                </span>
        </button>
    );
}


