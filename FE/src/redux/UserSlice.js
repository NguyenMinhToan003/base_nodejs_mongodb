import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  email: '',
  posts: [],
  friends: [],
  room_chats: [],
  bio: '',
  profile_picture: '',
  createdAt: Date.now(),
  updatedAt: null
}
export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action) => {
      const {
        username, email, posts, friends, room_chats, bio, profile_picture, updatedAt, createdAt
      } = action.payload
      state.username = username
      state.email = email
      state.posts = posts
      state.friends = friends
      state.room_chats = room_chats
      state.bio = bio
      state.profile_picture = profile_picture
      state.createdAt = createdAt
      state.updatedAt = updatedAt
    },
    logout: (state) => {
      state.username = ''
      state.email = ''
      state.posts = []
      state.friends = []
      state.room_chats = []
      state.bio = ''
      state.profile_picture = ''
      state.createdAt = Date.now()
      state.updatedAt = null
    }
  }
})
export const { login, logout } = userSlice.actions
export default userSlice.reducer