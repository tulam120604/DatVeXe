import { Route, Routes } from 'react-router-dom'
import './App.css'
import Client from './Index/Client'
import Main from './Client/HomePage/Main'

function App() {

  return (
    <>
      <Routes>
        {/* Client */}
        <Route path='/' element={<Client />}>
          <Route index element={<Main />} />
        </Route>




        {/* Admin */}
      </Routes>
    </>
  )
}

export default App
