import { Route, Routes } from 'react-router-dom'
import './App.css'
import Client from './Index/Client'
import Main from './Client/HomePage/Main'
import IndexDeital from './Client/DeitalPage/IndexDeital'

function App() {

  return (
    <>
      <Routes>
        {/* Client */}
        <Route path='/' element={<Client />}>
          <Route index element={<Main />} />
          <Route path='deital' element={<IndexDeital />} />
        </Route>

        {/* Admin */}
      </Routes>
    </>
  )
}

export default App
