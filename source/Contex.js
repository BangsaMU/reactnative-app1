import React, { useEffect, useState, useContext } from 'react';
// import React, { useState, createContext } from 'react';

// export const DataContext = createContext('');

// export const DataProvider = ({children}) => {
// const [data, setData] = useState("");
// return (
// <DataContext.Provider value={{ setData }}>
//   {children}
// </DataContext.Provider>
// );
// }


export const [state, dispatch] = React.useReducer(
    (prevState, action) => {

        const unixTime = Math.floor(Date.now() / 1000);
        const unixTime2 = Math.round((new Date()).getTime() / 1000);
        console.log(prevState, '<== state ==>', action)
        switch (action.type) {
            case 'RESTORE_TOKEN':
                {
                    console.log(unixTime, 'Action ==>', action.type)
                    return {
                        ...prevState,
                        userToken: action.userToken,
                        isLoading: false,
                    }
                };
            case 'SIGN_IN':
                {
                    console.log(unixTime, 'Action ==>', action.type, unixTime2, action.userToken)
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.userToken,
                    }
                };
            case 'SIGN_OUT':
                {
                    console.log(unixTime, 'Action ==>', action.type)
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    }
                };
        }
    }
    ,
    {
        isLoading: true,
        isSignout: false,
        userToken: null,
    }
);


export const AuthContext = React.createContext();