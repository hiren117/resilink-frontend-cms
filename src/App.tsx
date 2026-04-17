import './App.css'
import HomePage from '@/Residents/pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import SurveyEngine from '@/Residents/pages/HomePage/SurveyEngine'
import RegistrationPage from './Residents/pages/Registration'
import ProfilePage from './Residents/pages/ProfilePage'

function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      
      <Route path="/survey" element={<SurveyEngine />} />
    </Routes>

    </>
  )
}

export default App
