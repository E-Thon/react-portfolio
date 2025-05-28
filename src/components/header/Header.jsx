import { Link } from "react-router"
import Navigation from "../navigation/Navigation"

export default function Header({ img }) {

    return(
        <>
        <div className="nav__logo">
            <Link to="/">
                <img src={img} className="logo" alt="E-Thon logo" />
            </Link>
        </div>
        <Navigation />
        </>
    )
}