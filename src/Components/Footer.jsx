import { FaFacebookSquare,FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import './Footer.css'
export default function Footer() {
  return (
    <>
    <footer className="footerSection">
      <h1>Follow us</h1>
        <div className="footerSocialIcons">
          <a href=""  target='_blank'>
        <FaFacebookSquare className="icons"/>
        </a>

        <a href="" target='_blank'>
        <AiFillInstagram className="icons"/>
        </a>

        <a href=""  target='_blank'>
        <FaYoutube className="icons"/>
        </a>
        </div>
    </footer>
    </>
  )
}
