import React, { useContext,useEffect } from 'react';
import { Home } from '../index';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeHelper , {themeColors} from '../../Theme/ThemeHelper';
import { AppContext } from '../../Context/AppContext';

function AppShell() {
    const [appState] = useContext(AppContext); 
    useEffect(()=>{
        document.body.style.backgroundColor = themeColors[appState.theme].primary        
    },[appState.theme]);   
    return (
        <ThemeProvider theme={ThemeHelper(appState.theme)}>
            <Home></Home>
        </ThemeProvider>
    );
}

export default AppShell;
