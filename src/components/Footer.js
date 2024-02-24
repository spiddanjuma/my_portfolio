import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Row className="align-items-center mt-3">
          <div className="social-icon">
                <a href="https://github.com/spiddanjuma"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/peter-danjuma-8b61a3189/"><FaLinkedin /></a>
                <a href="https://twitter.com/spid247"><FaTwitter /></a>
              </div>
          </Row>
       
          
      </Container>
    </footer>
  )
}
