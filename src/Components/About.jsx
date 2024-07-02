import { Container,Row,Col } from "react-bootstrap";
import AbiyanImg from '../assets/img-about-us/abiyan.jpg'
import FauzanImg from '../assets/img-about-us/fauzan.jpeg'
import YosafatImg from '../assets/img-about-us/yosafat.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareInstagram, faSquareGithub,faSquareFacebook} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="bg-about d-flex justify-content-center align-items-center pb-1">
    <Container className="d-flex align-items-center justify-content-center img-container">
    <Row className="mx-4 row-cols-lg-3 row-cols-1">
    <Col className="px-4 img-wrapper">
      {/* About us */}
      <div id="image-about-abiyan">
      <img src={AbiyanImg} alt="Fauzan Image" />
      {/* end About us */}

      {/* Deskripsi */}
      <p><span>Hello!</span> Nama saya <span>Abiyan Samawi Alkindi</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya.</span></p>
      </div>
      {/* end Deskripsi */}

      {/* Icon Sosmed */}
      <div className="d-flex align-items-center">
      <div id="icon-abiyan-1">
      <a href="https://www.instagram.com/abiyanssa/">
      <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
      </a>
      </div>
      <div id="icon-abiyan-2">
      <a href="https://github.com/Abiyansa">
      <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
      </a>
      </div>
      <div id="icon-abiyan-3">
      <a href="https://www.facebook.com/abiyan.alkindi?mibextid=9R9pXO">
      <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
      </a>
      </div>
      </div>
      {/* end Icon Sosmed */}
      </Col>

      <Col className="px-4 img-wrapper">
      {/* About us */}
      <div id="image-about-fauzan">
      <img className="image" src={FauzanImg} alt="Fauzan Image" />
      {/* end About us */}

       {/* Deskripsi */}
       <p><span>Hello!</span> Nama saya <span>Ahmad Fauzan</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya</span>, dan saya adalah seorang <span>Web Developer.</span></p>
       </div>
      {/* end Deskripsi */}

       {/* Icon Sosmed */}
       <div className="d-flex align-items-center">
      <div id="icon-fauzan-1">
       <a href="https://www.instagram.com/ahd_fauzan18/?next=%2F&hl=id">
      <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
      </a>
      </div>
      <div id="icon-fauzan-2">
      <a href="https://github.com/fauzan18296">
      <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
      </a>
      </div>
      <div id="icon-fauzan-3">
      <a href="https://web.facebook.com/profile.php?id=100034570607256">
      <FontAwesomeIcon icon={faSquareFacebook} size="2xl"/>
      </a>
      </div>
      </div>
      {/* end Icon Sosmed */}
      </Col>

      <Col className="px-4 img-wrapper">
      {/* About us */}
      <div id="image-about-yosafat">
      <img className="image" src={YosafatImg} alt="Fauzan Image" />
      {/* end About us */}
       {/* Deskripsi */}
       <p><span>Hai!</span> perkenalkan saya <span>Yosafat Archie Rismaharjo Sarlan</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya</span>, saya adalah seorang <span>Web Developer.</span></p>
       </div>
      {/* end Deskripsi */}

      {/* Icon Sosmed */}
      <div className="d-flex align-items-center">
      <div id="icon-yosafat-1">
       <a href="https://www.instagram.com/invites/contact/?igsh=1rg9lzq7ghynh&utm_content=hsx3so1">
      <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
      </a>
      </div>
      <div id="icon-yosafat-2">
      <a href="https://github.com/Razelavier22">
      <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
      </a>
      </div>
      <div id="icon-yosafat-3">
      <a href="https://www.facebook.com/yosafat.yosafat.12935?mibextid=ZbWKwL">
      <FontAwesomeIcon icon={faSquareFacebook} size="2xl"/>
      </a>
      </div>
      </div>
      {/* end Icon Sosmed */}
      </Col>
    </Row>
    </Container>
    </div>
  )
}
export default About