import { useState } from 'react'
import  FlotingBoble from './components/FlotingBoble'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-bl from-gray-900 via-blue-900 to-sky-900 
      flex items-center justify-center relative overflow-hidden'>
        <FlotingBoble color='bg-sky-500' size='w-64 h-64' top='-5%' left='10%' delay={0}/>
        <FlotingBoble color='bg-blue-500' size='w-48 h-48' top='70%' left='80%' delay={5}/>
        <FlotingBoble color='bg-cyan-500' size='w-32 h-32' top='40%' left='-10%' delay={2}/>

        <Routes>
          <Route path='/' element={"home"}/>
          <Route path='/sign-up' element={<SignUpPage/>}/>

          <Route path='/log-in' element={<LoginPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
