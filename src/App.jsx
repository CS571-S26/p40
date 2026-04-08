import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import OptimizerPage from './pages/OptimizerPage'
import ComparePage from './pages/ComparePage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <NavigationBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimizer" element={<OptimizerPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App