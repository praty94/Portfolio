import React,{useState,createContext} from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const theme = "dark";//default app theme
    const [appState, setAppState] = useState({
        theme: localStorage.getItem('app.theme') || theme
    });
    return (
        <AppContext.Provider value={[appState,setAppState]}>
            {props.children}
        </AppContext.Provider>
    );
}