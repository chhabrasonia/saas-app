import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";
import footerBg from "../../../public/images/footer-bg.svg";

const Footer = async ({sitedata, menu}) => {
    const{ settings } = sitedata.data;
    const currentYear = new Date().getFullYear();
    if( !sitedata ) return null;

    return (
        <footer className="md:pt-16 py-10 md:pb-34  text-xs bg-brand text-gray-50 bg-bottom bg-repeat-x" style={{
          backgroundImage: `url(${footerBg.src})`,
        }}> 
            <Container>
            <div className="md:flex space-y-8 md:space-y-0 justify-between pb-5">
                <div>
                    <div className="pb-2" dangerouslySetInnerHTML= {{__html: settings.address}} />
                    <p>©2016 {currentYear} {settings.copyright}</p>
                </div>
                <div>
                    <ul className="sm:flex gap-4">
                        {
                            menu &&  
                            menu.map( item => (
                                <li key={item.id}>
                                    <Link href={item.url}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                   <ul className="flex items-center gap-1">
                     {
                        settings.social_links.length > 0 && 
                            settings.social_links.map((item) => (
                                <li key={item.icon}>
                                    <Link href={item.link} className="px-2 block" target="_blank">
                                        <Icon name={item.icon}/>
                                    </Link>
                                </li>
                            )
                        )
                    }
                    </ul>
                </div>
            </div>
            </Container>
        </footer>
    )
}

export default Footer