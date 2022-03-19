import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from 'context/UserContext';
import { obtainUserByEmail } from 'utils/Api-connection';

const ButtonLogin = () => {

    const { loginWithRedirect } = useAuth0();
    return (
        <div className="loginZone">
            <div className='information'>
                <h1>PARSE MANOFACTURER</h1>
            </div>
            <div className='buttonGoLogin'>
                <button className='btnGeneral btnGoLogin' onClick={() => loginWithRedirect()}>login</button>
            </div>
            <div className='demoSection'>
                <span className='subt1'>Try demo users</span>
                
                <span className=''>You can try this emails to  login as:</span>
                <ul className='listdemo'>
                  
                    <li className='rowDemo'>
                        <span>Admin</span>
                        <span>testadmin@gmail.com</span>
                        <span>testADMIN100#</span>
                    </li>
                    <li className='rowDemo'>
                    <span>Seller</span>
                        <span>testseller@gmail.com</span>
                        <span>testSELLER100#</span>
                    </li>
                </ul>
              
            

               
                
            </div>
        </div>
    )
};
export default ButtonLogin;
