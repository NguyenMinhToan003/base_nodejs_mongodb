import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './UserSlice'
export default configureStore({
  reducer: {
    userData: userSlice.reducer
  }
})