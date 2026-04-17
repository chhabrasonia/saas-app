import { Icon } from "./Icons";

const IconTextCard = ({icon, title}) => {
    return (
         <div className="flex bg-gray-100 py-4 px-5 rounded-lg gap-4">
            <span className="bg-white p-2">
                <Icon name={icon}/>
            </span>
            <h3 className="text-lg text-gray-600 leading-snug">{title}</h3>
        </div>
    )
}
export default IconTextCard;