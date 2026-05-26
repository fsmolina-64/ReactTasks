import { Routes, Route } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd';
import Navbar from './Components/Navbar/Navbar'
import { Home } from './pages/Home/home'
import Tasks from './pages/Tasks/tasks'
import { Statistics } from './pages/Statistics/statistics'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#020b2d',
          colorBgContainer: '#0d1b4d',
          colorPrimary: '#6366f1',
        },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </ConfigProvider>
  )
}

export default App;