import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InputError from "@/Components/InputError"; // Import the InputError component

const Input = ({
    type = 'text',
    name,
    value,
    defaultValue,
    className,
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
    errorMessage,
}) => {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError ? `border border-red-600 bg-white focus:border-alerange` : `input-${variant}`} ${className} `}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {isError && <InputError message={errorMessage} className="mt-1" />}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    variant: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string, 
};

export default Input;
