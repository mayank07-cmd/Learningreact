import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>Hello My name is Mayank Bisht</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
