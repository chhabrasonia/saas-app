import Image from "next/image";
import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const GetStartedSection = ({data}) => {
    if (!data) return null;
    return (
        <Section className="bg-soft">
            <div className="grid md:grid-cols-[1.45fr_1fr] lg:gap-[149px] md:gap-20 items-center">
                <div>
                    <Heading 
                        title={data.heading} 
                        description={data.description} 
                        align="left" large={true} 
                        className="mb-6" 
                    />
                    <div className="flex gap-4">
                        {
                            data.buttons.length > 0 && 
                            data.buttons.map( (button,index) => 
                                <Button
                                    key={button.label}
                                    size="lg"
                                    variant= {(index + 1) % 2 === 0 ? 'outline' : 'primary'}
                                >
                                    {button.label}
                                </Button>
                            )
                        }
                    </div>
                </div>
                <div>
                    <Image className="w-full h-auto" src={data.image.url} alt={data.image.alt} width={353} height={336} />
                </div>
            </div>
      </Section>
    )
}
export default GetStartedSection;