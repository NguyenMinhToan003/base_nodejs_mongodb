import Box from '@mui/material/Box'
import { mockDataRoomChats } from '~/api/mockdata'
import { useEffect, useState } from 'react'
import RoomChat from './RoomChat'
const RoomChats = ({ setStatusAction, setRoom }) => {
  const [listRooms, setListRooms] = useState([])
  useEffect(() => {
    setListRooms(mockDataRoomChats)
  }, [])
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, overflowY: 'auto', overflowX: 'hidden', padding: '10px' }}>
      {
        listRooms.RoomChats?.map((data, index) => {
          return <RoomChat key={index} roomChat={data} setStatusAction={setStatusAction} setRoom={setRoom} />
        })
      }
    </Box>
  </>
}
export default RoomChats