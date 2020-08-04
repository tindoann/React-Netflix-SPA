import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Link } from "react-router-dom";

const FooterChoosePlan = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <span  className='question-link'> style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions? <Link>Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Card</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterChoosePlan;

// Footer Container
const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  background: #f3f3f3;
  padding: 1.875rem 0;
  margin-top: 10rem;
  position: relative;
  border-top: 1px solid #e6e6e6;
  z-index: 5;

  .footer-columns {
    width: 80%;
    margin: 1rem 3rem 0 3rem;
    color: #999;
    display: grid;
    grid-template-columns: repeat(4, 15.625rem);
    grid-gap: 0.3rem;
  }

  .footer-wrapper {
    margin: 0 auto; 
    padding: 1.25rem; 
  }
  
  .question-link {
    margin-left: 3rem; 
    font-size: 1rem;
    color: #999;  
  }

  a {
    color: #999; 
    font-size: 0.8125rem; 
    &:hover {
      text-decoration: underline; 
      cursor: pointer; 
    }
  }
`;
