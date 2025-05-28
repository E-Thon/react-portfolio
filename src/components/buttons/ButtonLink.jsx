import { Link } from "react-router"

export default function ButtonLink({to, text}){
    return (
        <Link to={to} className="buttonLink"><button>{text}</button></Link>
    )
}