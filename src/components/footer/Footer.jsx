import { Link } from "react-router"

export default function Footer({ img, adress, number, mail }) {

    return (
        <>
            <div className="div__contact">
                <figure className="div__portrait">
                    <img src={img} className="portrait" alt="Portrait of Emilie Malene Thon" />
                </figure>
                <address>
                    <p>{adress}</p>
                    <p>Mobile: {number}</p>
                    <p>Mail: {mail}</p>
                </address>
            </div>
            <ul className="div__somes">
                <li className="div__some">
                    <Link href="https://www.facebook.com/emi.m.thon"><i className="fa-brands fa-facebook-f"></i>
                    </Link></li>
                <li className="div__some">
                    <Link href="https://www.instagram.com/emi.thon/"><i className="fa-brands fa-instagram"></i></Link>
                    </li>
                <li className="div__some">
                    <Link href="https://www.linkedin.com/in/emilie-thon-257943325/"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </li>
                <li className="div__some">
                    <Link href="https://github.com/E-Thon"><i className="fa-brands fa-github"></i></Link>
                    </li>
            </ul>
        </>
    )
}