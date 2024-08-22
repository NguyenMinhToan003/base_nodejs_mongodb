import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Posts from '../pages/Posts/Posts'
import ErrorRouter from './ErrorRouter'
import Comments from '../pages/Comments/Comments'
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Posts />} />
        <Route path='profile' element={<Profile />} >
          <Route path='posts' element={<Posts />} />
          <Route path='comments' element={<Comments />} />
          <Route path='likes' element={<Posts />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorRouter />} />
    </Routes>
  )
}
export default AppRouter