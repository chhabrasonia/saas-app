import Container from "./Container"

const Section = ({className = '',  children, ...props}) => {
   return(
   <section className = {`md:py-[60px] py-10 ${className}`} {...props}>
        <Container>
            {children}
        </Container>
    </section>
   );
}

export default Section