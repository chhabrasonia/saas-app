import Container from "./Container"

const Section = ({className = '',  children, ...props}) => {
   return(
   <section className = {`py-[60px] ${className}`} {...props}>
        <Container>
            {children}
        </Container>
    </section>
   );
}

export default Section