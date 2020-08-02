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
          <Logo src={logo} alt='logo'/>
        </Link>
        <NavLink to='/login' className='btn signIn-btn'>
          Sign In
        </NavLink>
      </div>
      {/* header content */}
      <div className='header-content'>
        <img 
          className='checkmark-logo' 
          src={CheckmarkLogo} 
          alt='checkmark img' 
        />
        <p>
          Step <strong>1</strong> of <strong>3</strong>
        </p>
        <h2>Choose your plan.</h2>
        <div className='checked-list'>
          <div className='bullet'>No commitments, cancel anytime.</div>
          <div className='bullet'>Everything on Netflix for one low price</div>
          <div className='bullet'>Unlimited viewing on all your devices.</div>
        </div>
        <Button>See the plans</Button>
      </div>
    </MainContainer>
  ); 
};  

export default ChoosePlan; 

// Main container
const MainContainer = styled.div`
  // header top
  .header-top {
    background: #fff; 
    height: 6rem; 
    border-bottom: 1px solid #6e6e6e;   
  }

  // header content
  .header-content {
    display: grid; 
    justify-content: center; 
    background: #fff; 
    color: var(--main-dark); 
    margin-bottom: 6rem; 
    width: 65%; 
    position: relative; 
    margin: auto; 
    margin-top: 4.5rem; 
    text-align: center; 
    align-content: center; 
    flex-derection: column; 
    z-index: 2; 
  }

  // checkmark logo
  .check-logo {
    width: 3rem; 
    margin-top: 3.125rem; 
    margin-bottom: 2rem; 
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem; 
  }
`; 

// logo
const logo = styled.img`
  width: 10.5rem; 
  height: 3.5rem; 
  position: absolute; 
  top: 49%; 
  left: 8%;
  transform: translate(-50%, -50%); 
  margin-left: 0;  
`; 