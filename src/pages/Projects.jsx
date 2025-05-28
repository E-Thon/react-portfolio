import Cards from "../components/cards/Cards";
import "./_Projects.scss";

export default function Projects() {

    return (
        <>
            <section className="projects">
                <h1>
                    projects
                </h1>
                <div className="projects__cards">
                    <Cards />
                </div>

            </section>
        </>
    )
}