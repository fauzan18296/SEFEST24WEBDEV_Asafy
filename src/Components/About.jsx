import { Container,Row,Col } from "react-bootstrap";
import FauzanImg from '../assets/img-about-us/fauzan.jpeg'
import {faSquareInstagram, faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="bg-about d-flex justify-content-center align-items-center">
    <Container className="d-flex align-items-center justify-content-center  img-container">
    <Row className="mx-4">
    <Col className="px-4 img-wrapper">
      {/* About us */}
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}
      {/* Deskripsi */}
      <p><span>Hallo!</span> Nama saya <span>Ahmad Fauzan</span> saya adalah seorang siswa dari SMAN 11, saya adalah seorang <span>Web Developer</span></p>
      {/* end Deskripsi */}
      </Col>
      <Col className="px-4 img-wrapper">
      {/* About us */}
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}
      </Col>
      <Col className="px-4 img-wrapper">
      {/* About us */}
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}
      </Col>
    </Row>
    </Container>
    </div>
  )
}
export default About