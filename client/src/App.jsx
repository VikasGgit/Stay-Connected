import React, {lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home =lazy(()=>import('./pages/Home') ) ;
const Chats =lazy(()=>import('./pages/Chats') ) ;
const Groups =lazy(()=>import('./pages/Groups') ) ;
const Login =lazy(()=>import('./pages/Login') ) ;



const App=()=>(

  <>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='chat/:chat_id' element={ <Chats/> }/>
    <Route path='login' element={ <Login/> }/>
    <Route path='groups' element={ <Groups/> } />

    </Routes>
  </BrowserRouter>
  </>
)
export default App