import { Stack } from "@mui/material"
import { Link, NavLink } from "react-router-dom"

import Logo from '../assets/images/Logo.png';

export const Navbar = () => {
  return (
    <Stack 
      direction='row'
      justifyContent='space-around'
      sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <NavLink end to='/' style={({isActive}) => ({textDecoration: 'none', color: '#3A1212', borderBottom: isActive ? '3px solid #FF2625' : 'none'})}>Home</NavLink>
        <NavLink end to='/calories' style={({isActive}) => ({textDecoration: 'none', color: '#3A1212', borderBottom: isActive ? '3px solid #FF2625' : 'none'})}>Calories Burned</NavLink>
      </Stack>
    </Stack>
  )
}
