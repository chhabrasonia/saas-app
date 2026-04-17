import Image from "next/image";
import Section from "../../ui/Section";
import { CheckMarkIcon } from "../../ui/Icons";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";


const Hero = ({hero}) => {
    return (
        <Section className="bg-soft">
            <div className="grid md:grid-cols-[1.3fr_1fr] lg:gap-[100px] gap-[50px] items-center">
                <div className="w-full max-w-[476px]">
                    {/* Heading */}
                    <div className="mb-4">
                         <h1 className="text-display mb-4">{hero?.heading}</h1>
                        <div className="lg:text-lg text-base" dangerouslySetInnerHTML={{ __html: hero?.description }} />
                    </div>
                    <div>
                    {/* form */}
                    <div>
                        <form>
                            <div className="grid md:grid-cols-[1.5fr_1fr] gap-1 mb-2">
                                <TextInput placeholder="Start Free Trial"/>
                                <Button size="lg">Start Free Trial</Button>
                            </div>
                        </form>
                    </div>
                    {/* terms */}
                        <ul className="md:flex pt-3 md:pt-0 space-y-2 md:space-y-0">
                            {
                                hero.terms.length > 0 && 
                                hero.terms.map((term,index) => 
                                    <li key = {index} className="pr-3 leading-none flex text-sm items-center">
                                        <span className="mr-1"><CheckMarkIcon/></span>
                                        {term.text}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="relative w-full hidden md:block">
                    <Image src={hero.image}  width={100} height={100} alt='' sizes="100vw" unoptimized className="w-full"/>
                </div>
            </div>
      </Section>
    )
}
export default Hero;