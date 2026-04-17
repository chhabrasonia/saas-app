import Image from "next/image";
import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const GetStartedSection = ({data}) => {
    if (!data) return null;
    return (
        <Section className="bg-soft">
            <div className="grid grid-cols-[1.45fr_1fr] gap-[149px] items-center">
                <div>
                    <Heading 
                        title={data.heading} 
                        description={data.description} 
                        align="left" large={true} 
                        className="mb-6" 
                    />
                    <div>
                        {
                            data.buttons && 
                            data.buttons.map( (button) => 
                                <Button
                                    key={button.label}
                                >
                                    {button.label}
                                </Button>
                            )
                        }
                    </div>
                </div>
                <div>
                    <Image className="w-full h-auto" src={data.image.url} alt={data.image.alt} width={353} height={336}  unoptimized/>
                </div>
            </div>
      </Section>
    )
}
export default GetStartedSection;