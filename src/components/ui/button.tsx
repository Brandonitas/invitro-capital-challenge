//Create a button component that is used in the app

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}
    
const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClasses = 'cursor-pointer inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses = {
        primary: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500',
        secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-500',
        outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    };
    
    const sizeClasses = {
        sm: 'text-xs px-3 py-1.5 rounded-full',
        md: 'text-sm px-4 py-2 rounded-full',
        lg: 'text-base px-6 py-3 rounded-full',
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;