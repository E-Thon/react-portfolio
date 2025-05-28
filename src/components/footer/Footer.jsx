import { Link } from "react-router"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer({ img, adress, number, mail }) {
    return (
        <footer>
            <div className="footer__contact">
                <figure className="footer__portrait">
                    <img src={img} className="portrait" alt="Portrait of Emilie Malene Thon" />
                </figure>
                <address>
                    <p>{adress}</p>
                    <p>Mobile: {number}</p>
                    <p>Mail: {mail}</p>
                </address>
            </div>
            <ul className="footer__somes">
                <li className="footer__some">
                    <Link href="https://www.facebook.com/emi.m.thon"><FaFacebook /></Link>
                </li>
                <li className="footer__some">
                    <Link href="https://www.instagram.com/emi.thon/"><FaInstagram /></Link>
                </li>
                <li className="footer__some">
                    <Link href="https://www.linkedin.com/in/emilie-thon-257943325/"><FaLinkedin /></Link>
                </li>
                <li className="footer__some">
                    <Link href="https://github.com/E-Thon"><FaGithub /></Link>
                </li>
            </ul>
        </footer>
    )
}