import Link from "next/link";
// import Spinner from "./Spinner";

export default function Button({
    href = null,
    children,
    variant = "primary",
    className = "",
    disabled = false,
    size = "md",
    ...props
}) {
    const sizeClasses = {
        sm: "h-8 font-medium px-4 sm:px-5",
        md: "h-10 font-medium px-4 sm:px-5",
        lg: "h-12 font-semibold text-base px-6 sm:px-10",
    }[size] || "h-9 font-medium px-4 sm:px-5";

    const styleClasses = {
        primary  : 'bg-primary text-white border hover:border-primary hover:bg-transparent hover:text-primary',
        outline  : 'border border-primary text-primary hover:bg-primary hover:text-white',
    }

    return href ? (
        <Link
            href={href}
            className={`whitespace-nowrap rounded transition duration-300 ease-in-out flex items-center justify-center text-center ${sizeClasses} ${styleClasses[variant]} ${className} ${
                disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
            }`}
            {...props}
        >
            {children}
        </Link>
    ) : (
        <button
            className={`whitespace-nowrap rounded cursor-pointer transition duration-300 ease-in-out ${sizeClasses} ${styleClasses[variant]} ${className}`}
            {...props}
            disabled={disabled}
        >
            {
                children
            }
        </button>
    );
}