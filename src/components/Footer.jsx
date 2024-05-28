import React from 'react'
import "../styles/main.css"
import mail from "../img/mail.svg"
import vk from "../img/vk.svg"
import tg from "../img/tg.svg"

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer">
        <div className="footer_t">Обратная связь</div>
        <a href="#" className="links"><img className="mail" src={mail} alt="mail" /></a>
        <a href="#" className="links"><img className="vk" src={vk} alt="vk" /></a>
        <a href="#" className="links"><img className="tg" src={tg} alt="tg" /></a>
      </div>
    </footer>
  )
}
