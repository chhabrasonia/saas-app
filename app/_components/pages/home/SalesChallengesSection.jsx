import Heading from "../../ui/Heading";
import IconTextCard from "../../ui/IconTextCard";
import Section from "../../ui/Section";

const SalesChallengesSection  = ({data}) => {
    if (!data) return null;
    return (
        <Section>
            {/* ********* Section Heading ********* */}
            <Heading title={data.heading} description={data.description} className="mb-8"/>
           
            {/* ********* Cards ********* */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 items-center xl:gap-8 gap-5 mb-5">
            {
                data.key_points.length > 0 &&
                data.key_points.map( (item)=> 
                    <IconTextCard key = {item.title} title = {item.title} icon = {item.icon}/>
                )
            }
            </div>
             {/* ********* Text ********* */}
            <div className="text-lg text-center" dangerouslySetInnerHTML={{ __html: data.text }} />
        </Section>
    ) 
}
export default SalesChallengesSection;