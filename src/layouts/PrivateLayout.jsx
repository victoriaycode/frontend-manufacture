import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import 'styles/layouts-style.css';
import Sidebar from 'components/Sidebar';
import errorImage from "media/error.png"
import { Link } from 'react-router-dom';
import { obtainUserData, obtainUserByEmail,createUser } from 'utils/Api-connection';
import jwt_decode from "jwt-decode";
import { useUser } from 'context/UserContext';

const PrivateLayout = ({ children }) => {
    const {setUserData}= useUser();
    const { user, isAuthenticated, isLoading, getAccessTokenSilently,loginWithRedirect,logout } = useAuth0();
    const [loadingUserInfo, setLoadingUserInfo]= useState(false);
    const override = css`display: block;  margin: 0 auto;  border-color: red;`;
  
  
    useEffect( async()  => {
        const fetchAuth0Token = async () => {

            
            const accessToken = await getAccessTokenSilently({
                audience: 'api-manufacturer-projectvi',
            });
            
            setLoadingUserInfo(true);
            localStorage.setItem("token", accessToken);
            


            const token = accessToken;
           
            const userdata = jwt_decode(token)['https://manufacturer.herokuapp.com/userData'];
            
            await obtainUserByEmail(userdata.email,
                (response) => {
                    
                   
                    if (response.data != null) {
                        
                       setUserData(response.data);
                       setLoadingUserInfo(false);
                    } else {
                     createUser(
                            {
                                name: userdata.name,
                                email: userdata.email,
                                role: "no_asignado",
                                state: "Pendiente", 
                                nickname: userdata.nickname, 
                                picture: userdata.picture,
                                created_at: userdata.created_at
                            },
                            (response) => {
                                setUserData(response.data);
                                setLoadingUserInfo(false);
                            },
                            (error) => {
                                console.error(error);
                                setLoadingUserInfo(false);
                            }
                        );
                    }
                    
                },
                (error) => {
                    logout({ returnTo: 'https://victoriaycode.github.io/frontend-manufacture/admin' });
                    console.error('Salio un error:', error);
                    setLoadingUserInfo(false);
                }
            );
        };


        if (isAuthenticated) {
            fetchAuth0Token();

        }
    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading  ||   loadingUserInfo ) return <div className='spinerClass'><ClipLoader loading={isLoading} css={override} size={150}></ClipLoader>...</div>
   
    if (!isAuthenticated) {
        return loginWithRedirect();
      }
    
      return (<>
      {children}
         
      </>
      );

};

export default PrivateLayout;