import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import  Tasks from './pages/Tasks/Tasks'
import { Statistics } from './pages/Statistics/Statistics'

function App() {
  return (
    <>

      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>

    </>
  )
}

export default App