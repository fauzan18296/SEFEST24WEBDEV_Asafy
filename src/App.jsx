import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import CommentPage from './Pages/CommentPage'
import ProductPage from './Pages/ProductPage'
import AlertComp  from './Components/AlertComp'
import { useState } from 'react';

export default function App() {
  const [appAlert, setAppAlert] = useState('')
  const handleAppAlert = (message) => {
    setAppAlert(message)
  }
  return (
   <Router>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/comment' element={<CommentPage setAlertMessage={handleAppAlert}/>} />
        <Route path='/product'element={<ProductPage/>}/>
        </Routes>
        {appAlert && (
          <AlertComp message={appAlert} />
        )}
    </Router>
  )
}
