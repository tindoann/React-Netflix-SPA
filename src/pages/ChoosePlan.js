import React from 'react'; 
import styled from 'styled-components';
import logo from '../svg/logo.svg'; 
import { Link, NavLink } from 'react-router-dom'; 

const ChoosePlan = () => {
  return (
    <MainContainer>
      {/* header top */}
      <div className='header-top'>
        <Link to='/'>
          <img src={logo} alt='logo'/>
        </Link>
        <NavLink to='/login' className='btn signIn-btn'>
          Sign In
        </NavLink>
      </div>
    </MainContainer>
  ); 
};  

export default ChoosePlan; 

// Main container
const MainContainer = styled.div``; 
