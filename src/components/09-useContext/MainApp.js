import React, { Fragment, useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

import './mainApp.css';

export const MainApp = () => {

  const [user, setUser] = useState({});

  return (
    <Fragment>
      <UserContext.Provider value={{
        user,
        setUser,
      }}>
        <AppRouter/>
      </UserContext.Provider>
    </Fragment>

  )
}
