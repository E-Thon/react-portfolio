import "./_Cards.scss";

export default function Cards() {

    return (
        <>
            <article className="projects__cards">
                <h3>MyMovies</h3>
                <a href="https://thon-mymovies.netlify.app/" target="_blank">
                    <img src="/mymovies-screenshot543x543.png" alt="Screenshot of myMovies webpage" />
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>REST API</li>
                    </ul>
                </ul>
            </article>
            <article className="projects__cards">
                <h3>Pokedex</h3>
                <a href="https://thon-pokedex.netlify.app/" target="_blank">
                    <img src="/pokedex-screenshot588x588.png" alt="Screenshot of Pokedex webpage" />
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>REST API</li>
                    </ul>
                </ul>
            </article>
            <article className="projects__cards">
                <h3>Newsify</h3>
                <a href="https://thon-newsify.netlify.app/" target="_blank">
                    <img src="/newsify-screenshot538x538.png" alt="Screenshot of Newslify webpage" />
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>REST API</li>
                        <li>Vite</li>
                        <li>Vitest</li>
                        <li>Node</li>
                        <li>webpack</li>
                    </ul>
                </ul>
            </article>
        </>
    )
}