import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import "./_Projects.scss";

export default function Projects() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setCards(data.cards))
    }, [])

    return (
        <>
            <section className="projects">
                <h1>
                    projects
                </h1>
                <div className="projects__cards">
                    {cards.map((card, index) => (
                        <Cards
                            key={index}
                            title={card.title}
                            url={card.url}
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                            technologies={card.technologies}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}