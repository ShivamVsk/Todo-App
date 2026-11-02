import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function AppTitleBar() {
  return (
    <AppBar sx={{position:'sticky', width:'100%'}}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            gap: '10px',
          }}
        >
          <PlaylistAddCheckIcon fontSize="large" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TODO-APP
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppTitleBar;
