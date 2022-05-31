import { Container } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './screens/SignUp'
const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element='#' />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
