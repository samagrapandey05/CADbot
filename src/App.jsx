import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
//import Display from './Display.jsx'
//import TextBox from './TextBox.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import SignUp from './SignUp.jsx'
import CADbot from './CADbot.jsx'
import About from './About.jsx'


function App() {
  //const [prevQueries, setPrevQueries] = useState([])
  const [curUser, setCurUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurUser={setCurUser} setPrevQueries = {setPrevQueries}/>
      <Routes>
        <Route path="/" index element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurUser={setCurUser}/>}/>
        {/*<Route path="/sign-up" element={<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} curUser = {curUser} setCurUser={setCurUser}/>} />*/}
        <Route path="/cadbot" element={(loggedIn===true) ? <CADbot user = {curUser} /> : <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} curUser = {curUser} setCurUser={setCurUser} prevQueries={prevQueries} setPrevQueries = {setPrevQueries}/>} />
        <Route path="/about" element={<About/>}/>
        {/*<Route path="/sign-in" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <SignIn retrieveDatabase={retrieveDatabase} user={user} setLoggedIn={setLoggedIn} />} />
        <Route path="/profile" element={loggedIn ? <Profile retrieveDatabase={retrieveDatabase} user={user} updateUser={updateUser} deleteUser={deleteUser} setLoggedIn={setLoggedIn} setTriggeredLogout={setTriggeredLogout} /> : <NotFound />} />
        <Route path='*' element={<NotFound />} />*/}
      </Routes>
    </Router>
  )
}

export default App
