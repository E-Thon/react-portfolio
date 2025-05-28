import { Outlet } from "react-router"
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"

export default function Layout() {
  return (
    <>
      <Header 
        img="/logo.png"
      />

      <main> 
      <Outlet />
      </main>

      <Footer 
      img="portrait.jpg"
      adress="Nørrebro, Copenhagen"
      number={<a href="callto:004512345678">+45 60 61 52 18</a>}
      mail={<a href="mailto:emilie.m.thon@gmail.dk">emilie.m.thon@gmail.dk</a>}
      />
    </>
  )
}
