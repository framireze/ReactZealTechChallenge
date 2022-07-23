import { AppBar, Typography, ButtonGroup } from '@mui/material';
import {Link, NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => (
  <AppBar position='static' sx={{ paddingX: 2, paddingY: 1 }}>
    <Typography fontWeight='bold' variant='h4'>REACT CHALLENGE</Typography>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <NavLink to="/first" ><Button>First</Button></NavLink>
      <NavLink to="/second" ><Button>Second</Button></NavLink>
      <NavLink to="/third" ><Button>Third</Button></NavLink>
      <NavLink to="/fourth" ><Button>Fourth</Button></NavLink>
      {/* <Button color="secondary">Second</Button>
      <Button>Third</Button>
      <Button>Fourth</Button> */}
    </ButtonGroup>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >Context</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to="/" className='nav-item nav-link' >Home </NavLink>
                <NavLink to="/about" className="nav-item nav-link" >About</NavLink>
                <NavLink to="/login" className="nav-item nav-link" >Login</NavLink>
                <Button variant="outlined">Outlfffffined</Button>
                
                </div>
            </div>
        </nav> */}
  </AppBar>
)

export default Header
