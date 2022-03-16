import { useUser } from 'context/UserContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
  if (roleList.includes(userData.role)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;