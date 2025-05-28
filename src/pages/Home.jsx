import { Link } from "react-router"
import Splash from "../components/splash/Splash.jsx"
import "./_Home.scss"

export default function Home() {
    return (
        <>
            <section className="mainSection">
                <h1>
                    Portfolio
                </h1>
                <Splash />
                <Link to="/projects" className="logoLink"> 
                <img src="/logo.png" alt="E-Thon full logo" />
            </Link>
            <h2>Emilie Thon</h2>
            <h4>Frontend-Focused Web Developer in Training</h4>
            <p>
                My name is Emilie, and I am currently in the main course of the Web Development program at Roskilde Technical School. I have a strong interest in frontend development and user experience, and I work purposefully with technologies such as HTML, CSS (Tailwind and SASS), JavaScript, React, Node.js, and Git (GitHub).
            </p>
            <p>
                My approach to development is characterized by curiosity, structured problem-solving, and a desire for continuous learning. With an academic background in chemistry from the University of Copenhagen and a hands-on approach to coding, I combine analytical thinking with creative work.
            </p>
            <p>
                I am continuously seeking new opportunities to gain practical experience, preferably in collaboration with experienced developers and in an environment where quality and professional development are highly valued.
            </p>

            <div className="project">
                <article className="project__card">
                    <a href="https://thon-mymovies.netlify.app/" target="_blank">
                        <img src="/mymovies-screenshot564x399.png" alt="Screenshot of myMovies webpage" />
                    </a>
                </article>
                <article className="project__card">
                    <a href="https://thon-pokedex.netlify.app/" target="_blank">
                        <img src="/pokedex-screenshot536x378.png" alt="Screenshot of Pokedex webpage" />
                    </a>
                </article>
                <article className="project__card">
                    <a href="https://thon-newsify.netlify.app/" target="_blank">
                        <img src="/newsify-screenshot454x333.png" alt="Screenshot of Newslify webpage" />
                    </a>
                </article>

                <Link to="/projects" className="btn">See more</Link>
            </div>
        </section >
        </>
    )
}