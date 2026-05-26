import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import { Home } from './pages/Home/home'
import Tasks from './pages/Tasks/tasks'
import { Statistics } from './pages/Statistics/statistics'

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