import React from 'react'; 
import styled from 'styled-components'; 
import { Button } from './Button'; 
import { icon } from 'react-icon-kit'; 
import { cross } from 'react-icons-kit/icomoon/cross';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';


function TabContentThree() {
  return (
    <TabContainer>
      <div className='tab-content'>
        <div className='tab-top-content'>
          <span style={{ fontSize: '1.5rem' }}>
            Choose one plan and watch everything on Netflix
          </span>
          <Button className='btn'>try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className='tab-bottom-content'>
          <table>
            <thread>
             <tr>
               <th></th>
               <th>Basic</th>
               <th>Standard</th>
               <th>Premium</th>
             </tr>
            </thread>
            <tbody>
             <tr>
               <td>Monthly price</td>
               <td>9.99</td>
               <td>13.99</td>
               <td>16.99</td>
             </tr>
             <tr>
               <td>HD available</td>
               <td>
                 <Icon icon={cross} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
             </tr>
             <tr>
               <td>Ultra HD available</td>
               <td>
                 <Icon icon={cross} size={10} />
               </td>
               <td>
                 <Icon icon={cross} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
             </tr>
             <tr>
               <td>Screens you can watch on at the same time</td>
               <td>1</td>
               <td>2</td>
               <td>4</td>
             </tr>
             <tr>
               <td>Watch on your laptop, TV, phone and tablet</td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
             </tr>
             <tr>
               <td>Unlimited movies and TV shows</td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
             </tr>
             <tr>
               <td>Cancel anytime</td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
               <td>
                 <Icon icon={checkmark} size={10} />
               </td>
             </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  )
}

export default TabContentThree;

// Main Container
const TabContainer = styled.div`
  background var(--main-deep-dark); 

  .tab-content {
    margin: 0 15%; 
    padding-bottom: 1%; 
  }

  .tab-top-content {
    display: grid; 
    grid-template-columns: repeat(12, 1fr); 
    padding: 3rem 0 0; 
  }

  span {
    grid-column: 3 / 9; 
  }

  .btn {
    grid-column: 9 / 12; 
    margin-left: 3rem; 
    margin-right: 5.1rem; 
  }
`;
