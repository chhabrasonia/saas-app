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
        md: "h-9 font-medium px-4 sm:px-5",
        lg: "h-10 font-semibold text-base px-6 sm:px-8",
    }[size] || "h-9 font-medium px-4 sm:px-5";

    return href ? (
        <Link
            href={href}
            className={`whitespace-nowrap ${sizeClasses[size]} ${className} ${
                disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
            }`}
            {...props}
        >
            {children}
        </Link>
    ) : (
        <button
            className={`whitespace-nowrap ${sizeClasses[size]} ${className}`}
            {...props}
            disabled={disabled}
        >
            {
                children
            }
        </button>
    );
}