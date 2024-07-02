import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import CommentPage from './Pages/CommentPage'
import ProductPage from './Pages/ProductPage'

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/comment' element={<CommentPage/>} />
        <Route path='/product'element={<ProductPage/>}/>
        </Routes>
    </Router>
  )
}
