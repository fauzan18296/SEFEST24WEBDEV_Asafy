import {Container,Row,Col,Alert} from "react-bootstrap";
import {useState, useEffect} from 'react'
import axios from "axios";

const Comment = () => {
  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')
  const [comment, setComment] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    console.log('Username:', username);
    console.log('Nickname:', nickname);
    console.log('Comment:', comment);
  }, [username, nickname, comment]);

  const sendComment = (e) => {
    e.preventDefault()
  axios.post('http://localhost:3000/comment', {
  username: username,
  nickname: nickname,
  comment: comment
})
.then(response => {
  console.log(response)
})
.then(() => {
  setAlertMessage('Komentar telah berhasil dikirim!')
  setShowAlert(true)
  setTimeout(() => {
    setShowAlert(false)
  }, 3000)
})
}

  return (
    <div className="bg-comment d-flex justify-content-center align-items-center">
   <Container className="d-flex justify-content-center align-items-center bg-form-container">
    <Row className="d-flex justify-content-center align-items-center pb-4 row-cols-lg-5 row-cols-2">
      <Col className="d-flex justify-content-center align-items-center pt-4">
      <form onSubmit={sendComment}>
      { 
      showAlert && (
          <Alert variant="success" className="d-flex align-items-center justify-content-center">{alertMessage}</Alert>
        )
      }
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" className="username mb-2" placeholder="your username" onChange={(e) => setUsername(e.target.value)}/>
      <label htmlFor="nickname">Nickname:</label>
      <input type="text" name="nickname" className="nickname mb-2"  placeholder="your nickname" onChange={(e) => setNickname(e.target.value)}/>
      <label htmlFor="comment">Suggestion:</label>
      <input type="text" name="comment" className="suggestion mb-2"  placeholder="your comment" onChange={(e) => setComment(e.target.value)}/>

      <button type="submit" className="bg-success btn-comment px-4 py-1 fw-bold">Send</button>
      </form>
      </Col>
    </Row>  
   </Container>
   </div>
  )
}
export default Comment