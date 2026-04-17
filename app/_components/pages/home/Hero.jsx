import Image from "next/image";
import Section from "../../ui/Section";
import { CheckMarkIcon } from "../../ui/Icons";


const Hero = ({hero}) => {
    return (
        <Section className="bg-soft">
            <div className="grid grid-cols-[1.3fr_1fr] gap-[100px] items-center">
                <div className="w-full max-w-[476px]">
                    <div className="mb-4">
                         <h1 className="text-display mb-4">{hero?.heading}</h1>
                        <div className="text-lg" dangerouslySetInnerHTML={{ __html: hero?.description }} />
                    </div>
                    <div>
                        <ul className="flex">
                            {
                                hero.terms && 
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
                <div className="relative w-full">
                    <Image src={hero.image}  width={100} height={100} alt='' sizes="100vw" unoptimized className="w-full"/>
                </div>
            </div>
      </Section>
    )
}
export default Hero;