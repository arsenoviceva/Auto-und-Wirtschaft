import FirstRow from './firstrow/FirstRow';
import SecondRow from './secondrow/SecondRow';
import ThirdRow from './thirdrow/ThirdRow';

 
import React from 'react';

const Header = () =>{
    return (
        <div> 

       
        <FirstRow />
        <SecondRow/>
        <ThirdRow />
        </div>
    )
}

export default Header;