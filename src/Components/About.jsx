import { Container,Row,Col } from "react-bootstrap";
import AbiyanImg from '../assets/img-about-us/abiyan.jpg'
import FauzanImg from '../assets/img-about-us/fauzan.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareInstagram, faSquareGithub,faSquareFacebook} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="bg-about d-flex justify-content-center align-items-center">
    <Container className="d-flex align-items-center justify-content-center img-container">
    <Row className="mx-4 mt-5  row-cols-lg-3 row-cols-1">
    <Col className="px-4 img-wrapper">
      {/* About us */}
      <div id="image-about-abiyan">
      <img src={AbiyanImg} alt="Fauzan Image" />
      {/* end About us */}
      {/* Deskripsi */}
      <p><span>Hello!</span> Nama saya <span>Abiyan Samawi Alkindi</span> saya adalah seorang siswa dari <span>SMAN 11.</span></p>
      </div>
      {/* end Deskripsi */}
      {/* Icon Sosmed */}
      <div id="icon-abiyan">
      <a href="https://www.instagram.com/abiyanssa/">
      <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
      </a>
      <a href="https://github.com/Abiyansa">
      <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
      </a>
      <a href="https://www.facebook.com/abiyan.alkindi?mibextid=9R9pXO">
      <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
      </a>
      </div>
      {/* end Icon Sosmed */}
      </Col>
      <Col className="px-4 img-wrapper">
      {/* About us */}
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}
       {/* Deskripsi */}
       <p><span>Hello!</span> Nama saya <span>Ahmad Fauzan</span> saya adalah seorang siswa dari <span>SMAN 11</span>, dan saya adalah seorang <span>Web Developer.</span></p>
      {/* end Deskripsi */}
       {/* Icon Sosmed */}
       <a href="https://www.instagram.com/ahd_fauzan18/?next=%2F&hl=id">
      <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
      </a>
      <a href="https://github.com/fauzan18296">
      <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100034570607256">
      <FontAwesomeIcon icon={faSquareFacebook} size="2xl"/>
      </a>
      {/* end Icon Sosmed */}
      </Col>
      <Col className="px-4 img-wrapper">
      {/* About us */}
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}
       {/* Deskripsi */}
       <p><span>Hello!</span> Nama saya <span>Ahmad Fauzan</span> saya adalah seorang siswa dari <span>SMAN 11</span>, saya adalah seorang <span>Web Developer.</span></p>
      {/* end Deskripsi */}
      </Col>
    </Row>
    </Container>
    </div>
  )
}
export default About