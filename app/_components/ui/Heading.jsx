const Heading = ({title, description, align="center", large = false, className = '', ...props}) => {
    const sizeClasses = {
        title: "text-title",
        display: "text-display",
    };
    return (
        <div className = {`max-w-[906px] w-full mx-auto ${align === 'left' ? 'text-left' :'text-center'} ${className}`} {...props}>
            <h2 className = {`mb-3 ${large ? 'text-display' :  'text-title'}`}> {title} </h2>
            {
                description && (
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                )
            }
        </div>
    )
}
export default Heading;