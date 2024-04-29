import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ 
    type, 
    className = '', 
    isFocused = false, ...props }, ref) {

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    `rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none bg-slate-100 ${className}`
                }
                ref={input}
                style={{ color: 'black' }} 
            />
        </div>
    );
});
