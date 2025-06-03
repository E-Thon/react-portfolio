import { Link } from "react-router"
import "./_ButtonLink.scss";

export default function ButtonLink({to, text}){
    return (
        <Link to={to} className="buttonLink"><button>{text}</button></Link>
    )
}