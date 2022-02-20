import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
const App: React.FunctionComponent = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element='#' />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
