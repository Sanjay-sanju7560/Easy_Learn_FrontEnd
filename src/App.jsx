import './App.css'
import Home from './Components/Home'
import LoginPage from './Pages/LoginPage'
import AllCourses from './Pages/AllCourses'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterPage from './Pages/RegisterPage'
import TeacherLogin from './Pages/TeacherLogin'
import { Navigate, Route, Routes } from 'react-router-dom'
import TecherLogin from './Pages/TecherLogin'
import AddCourse from './Pages/AddCourse'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/teacher' element={<TeacherLogin/>}/>
        <Route path='/allcourses' element={<AllCourses/>}/>
        <Route path='/teacherLogin' element={<TecherLogin/>}/>
        <Route path='/upload' element={<AddCourse/>}/>
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>

    </>
  )
}

export default App
