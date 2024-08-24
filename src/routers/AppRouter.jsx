import { Routes, Route } from 'react-router-dom'
import Home from '~/pages/Home/Home'
import Profile from '~/pages/Profile/Profile'
import Posts from '~/pages/Posts/Posts'
import ErrorRouter from './ErrorRouter'
import Comments from '~/pages/Comments/Comments'
import Follwer from '../pages/Follwer/Follwer'
import Login from '~/pages/Auth/Login'
import Signup from '~/pages/Auth/Signup'
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Posts />} />
        <Route path='profile' element={<Profile />} >
          <Route path='posts' element={<Posts />} />
          <Route path='notification' element={<Comments />} />
          <Route path='follower' element={<Follwer />} />
        </Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<ErrorRouter />} />
    </Routes>
  )
}
export default AppRouter