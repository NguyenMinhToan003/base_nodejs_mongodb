import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
const BtnAddPost = () => {
  return <>
    <Box sx={{ position: 'fixed', bottom: '10%' }}>
      <NavLink to="/add-post" className='navLink'>
        <Tooltip title="Create a post" arrow >
          <IconButton sx={{ color: 'text.secondary', border: '2px solid gray' }}><AddIcon sx={{ fontSize: '2rem' }} /></IconButton>
        </Tooltip>
      </NavLink>
    </Box>

  </>
}
export default BtnAddPost