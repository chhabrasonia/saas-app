import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";
import footerBg from "../../../public/images/footer-bg.svg";

const Footer = async ({data}) => {
   
     const{ settings } = data.data;
     {
        JSON.stringify(data);
     }
    if( !data ) return null;

    return (
        <footer className="pt-16 pb-34 text-sm bg-brand text-gray-50 bg-bottom bg-repeat-x" style={{
          backgroundImage: `url(${footerBg.src})`,
        }}> 
            <Container>
            <div className="flex justify-between pb-5">
                <div>
                    <div className="text-sm" dangerouslySetInnerHTML= {{__html: settings.address}} />
                </div>
                <div>

                </div>
                <div>
                   <ul className="flex gap-5 items-center">
                     {
                        settings.social_links && 
                            settings.social_links.map((item) => (
                                <li key={item.icon}><Link href={item.link}><span><Icon name={item.icon}/></span></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </Container>
        </footer>
    )
}

export default Footer