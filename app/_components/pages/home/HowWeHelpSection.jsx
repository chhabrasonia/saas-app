import Image from "next/image";
import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import { CheckMarkIcon } from "../../ui/Icons";

const HowWeHelpSection = ({data}) => {
    if (!data) return null;
    return (
        <Section container="true">
            <Heading title={data.heading} description={data.description} className="mb-10"/>
            <div>
            {
                data.blocks&&
                data.blocks.map( (item,index)=> 
                <div 
                    key={item.title} 
                    className={`items-center grid grid-cols-[2.5fr_3fr] gap-16 pb-32 last:pb-0 
                        ${
                            index % 2 !== 0
                            ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1 grid-cols-[3fr_2.5fr]"
                            : ""
                        }
                    `}
                >
                    <div>
                        <h3 className="text-title mb-6">{item.title}</h3>
                        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html:item.description}}/>
                        <ul className="my-5">
                            {
                                item.key_features &&
                                item.key_features.map( (feature) => 
                                <li 
                                    className="flex gap-1 mb-5 last:mb-0 items-center leading-tight"
                                    key={feature.text}
                                >
                                    <span>
                                        <CheckMarkIcon/>
                                    </span>
                                    {feature.text}
                                </li>)
                            }
                        </ul>
                        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html:item.text}}/>
                    </div>
                    <div>
                        <Image className="w-full h-auto" unoptimized src={item.image.url} alt={item.image.alt} width={1200} height={800}/>
                    </div>
                </div>
                )
            }
            </div>
        </Section>
    )
}
export default HowWeHelpSection;