import "./_Cards.scss";

export default function Cards({title,
    url,
    imageSrc,
    imageAlt,
    technologies = []}) {

    return (
        <article className="projects__cards">
            <h3>{title}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={imageAlt} />
            </a>
            <ul>
                <li>Technologies used</li>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </ul>
        </article>
    )
}