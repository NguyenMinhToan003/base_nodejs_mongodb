import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Divider from '@mui/material/Divider'
// import Logo from '~/assets/logo.png'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import { Typography } from '@mui/material'

const Nav = () => {
  return (
    <>
      <Box
        sx={{
          width: (theme) => theme.socialMedia.widthLeft,
          position: 'fixed',
          left: '0',
          top: '0',
          bottom: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem'
        }}
      >
        <Button
          variant="text"
          color="primary"
          sx={{
            width: '100%',
            padding: '20px 0',
            color: 'error.main'
          }}
          startIcon={<LocalFireDepartmentOutlinedIcon />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Home
          </Typography>
        </Button>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <Button
          variant="text"
          color="primary"
          sx={{ width: '100%', padding: '20px 0' }}
          startIcon={<SearchOutlinedIcon fontSize="20px" />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Search
          </Typography>
        </Button>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <Button
          variant="text"
          color="primary"
          sx={{ width: '100%', padding: '20px 0' }}
          startIcon={<NotificationsOutlinedIcon />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Notification
          </Typography>
        </Button>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <Button
          variant="text"
          color="primary"
          sx={{ width: '100%', padding: '20px 0' }}
          startIcon={<PeopleAltOutlinedIcon />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Group
          </Typography>
        </Button>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <Button
          variant="text"
          color="primary"
          sx={{ width: '100%', padding: '20px 0' }}
          startIcon={<BookmarkBorderOutlinedIcon />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Bookmark
          </Typography>
        </Button>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <Button
          variant="text"
          color="primary"
          sx={{ width: '100%', padding: '20px 0' }}
          startIcon={<ManageAccountsOutlinedIcon />}
        >
          <Typography
            sx={{
              display: { sm: 'none', md: 'inline' },
              fontWeight: 'bold'
            }}
          >
            Account
          </Typography>
        </Button>
      </Box>
      <Divider
        orientation="vertical"
        sx={{
          position: 'fixed',
          left: (theme) => theme.socialMedia.widthLeft,
          top: '0',
          bottom: '0',
          margin: '0'
        }}
      />
    </>
  )
}

export default Nav
