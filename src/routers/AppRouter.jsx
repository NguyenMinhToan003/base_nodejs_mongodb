import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Posts from '../pages/Posts/Posts'
import ErrorRouter from './ErrorRouter'
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Posts />} />
        <Route path='profile' element={<Profile />} >
          <Route path='post' element={<Posts />} />
          <Route path='comment' element={<Posts />} />
          <Route path='like' element={<Posts />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorRouter />} />
    </Routes>
  )
}
export default AppRouter