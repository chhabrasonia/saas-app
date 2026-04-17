const TextInput = ({ type = "text", className = "", ...props }) => {
    return (
        <div>
            <input 
                type = {type} 
                className = {`border w-full rounded border-gray-400 h-12 px-4 focus:outline-none${className} `}  
                {...props}
            />
        </div>
    );
}
export default TextInput;