import { Link } from "react-router"
import Splash from "../components/splash/Splash.jsx"

export default function Home() {
    return (
        <>
            <Splash/>
            <h1>Home</h1>
            <Link to="/contact">Contact</Link>
        </>
    )
}