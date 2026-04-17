import Heading from "../../ui/Heading";
import IconTextCard from "../../ui/IconTextCard";
import Section from "../../ui/Section";

const SalesChallengesSection  = ({data}) => {
    if (!data) return null;
    return (
        <Section>
            <Heading title={data.heading} description={data.description} className="mb-8"/>
            <div className="grid grid-cols-4 gap-8 mb-5">
            {
                data.key_points&&
                data.key_points.map( (item)=> 
                    <IconTextCard key = {item.title} title = {item.title} icon = {item.icon}/>
                )
            }
            </div>
            <div className="text-lg text-center" dangerouslySetInnerHTML={{ __html: data.text }} />
        </Section>
    ) 
}
export default SalesChallengesSection;